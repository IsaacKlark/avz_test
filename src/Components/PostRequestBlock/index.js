import {
  Head,
  Wrapper,
  Form,
  CustomInput,
  CustomFormControl,
  SimpleInput,
  InputWrapper,
  CustomFormHelperText,
  Text,
  RadioWrapper,
  Label,
  CustomRadio,
  FileLoadWrapper,
  FileLoader,
  LoadButton,
  LoadInput,
  Submit,
} from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import InputLabel from "@mui/material/InputLabel";
import { getPositions, getToken, postUsers } from "../services";
import Preloader from "../Proloader";
import { Alert } from "@mui/material";
import { ReactComponent as RadioIcon } from "../../images/radio.svg";
import { ReactComponent as RadioCheckedIcon } from "../../images/checkedRadio.svg";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+38 (000) 000 - 00 - 00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const PostRequestBlock = ({ setPage }) => {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fileError, setFileError] = useState("");
  const [photo, setPhoto] = useState();
  const [photoPath, setPhotoPath] = useState("");
  const [token, setToken] = useState("");
  const [successSubmit, setSuccessSubmit] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(2).max(60),
    email: Yup.string()
      .email()
      .matches(
        //eslint-disable-next-line
        /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
        "incorrect email"
      )
      .required("Required")
      .min(2)
      .max(100),
    phone: Yup.string()
      .required()
      .min(23, "unfinished phone")
      .test((value) => {
        const editedPhone = value
          ?.split(/[\(\)\-]/g)
          .join("")
          ?.split(" ")
          .join("");
        if (!editedPhone?.startsWith("+380")) {
          return false;
        }
        return true;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: 1,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append(
        "phone",
        values.phone
          ?.split(/[\(\)\-]/g)
          .join("")
          ?.split(" ")
          .join("")
      );
      formData.append("position_id", values.position_id);

      postUsers(formData, token)
        .then(() => {
          setSuccessSubmit(true);
          setPage(1);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        })
        .catch(() => {
          setError(true);
        });
    },
    validationSchema,
  });

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
  } = formik;

  const fileLoad = (file, path) => {
    setFileError("");

    if (file.size / 1024 / 1024 > 5) {
      setFileError("user photo size must not exceed 5MB");
    } else if (!file?.type?.includes("jpeg")) {
      setFileError("user photo should be jpg/jpeg format");
    } else {
      const image = new Image();
      const reader = new FileReader();
      reader.onloadend = (e) => {
        image.src = e.target.result;
      };

      image.onload = () => {
        if (image.width < 70 || image.height < 70) {
          setFileError("user photo resolution should be at least 70x70px");
        } else {
          setPhotoPath(path);
          const blob = new Blob([file], { type: "jpg/jpeg" });
          var changedFile = new File([blob], "photo", { type: "jpg/jpeg" });
          setPhoto(changedFile);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    let mounted = true;

    getPositions()
      .then((res) => {
        if (mounted) {
          setPositions(res.positions);
          values.position_id = res.positions[0].id;
        }
      })
      .catch(() => {
        if (mounted) setError(true);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    getToken()
      .then((res) => {
        if (mounted) setToken(res.token);
      })
      .catch(() => {
        if (mounted) setError(true);
      });

    return () => (mounted = false);
  }, []);

  return (
    <Wrapper>
      <Head>Working with POST request</Head>

      <Form
        component="form"
        onKeyDown={(e) => {
          if (e.code === "Enter") e.preventDefault();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <CustomInput
          variant="outlined"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth={true}
          label="Your name"
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ""}
          autoComplete="off"
        />

        <CustomInput
          variant="outlined"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
          autoComplete="off"
          fullWidth={true}
        />

        <InputWrapper>
          <CustomFormControl
            variant="outlined"
            className={touched.phone && errors.phone ? "error" : ""}
          >
            <InputLabel
              htmlFor="phone"
              className={touched.phone && errors.phone ? "errorLabel" : ""}
              error={!!(touched.phone && errors.phone)}
            >
              Phone
            </InputLabel>
            <SimpleInput
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              id="phone"
              inputComponent={TextMaskCustom}
              fullWidth={true}
              autoComplete="off"
            />
          </CustomFormControl>
          <CustomFormHelperText error={!!(touched.phone && errors.phone)}>
            {!!(touched.phone && errors.phone)
              ? errors.phone
              : "+38 (XXX) XXX - XX - XX"}
          </CustomFormHelperText>
        </InputWrapper>
        <Text>Select your position</Text>
        <RadioWrapper>
          <Preloader display={loading} />

          {positions.map((position) => (
            <Label key={position.id}>
              <CustomRadio
                checked={values.position_id === position.id}
                checkedIcon={<RadioCheckedIcon />}
                icon={<RadioIcon />}
                onChange={() => setFieldValue("position_id", position.id)}
              />
              <Text>{position.name}</Text>
            </Label>
          ))}
        </RadioWrapper>

        <InputWrapper>
          <FileLoadWrapper>
            <FileLoader
              type="file"
              id="file"
              onChange={(e) => fileLoad(e.target.files[0], e.target.value)}
            />
            <LoadButton htmlFor="file" className={fileError ? "error" : ""}>
              Upload
            </LoadButton>
            <LoadInput
              className={fileError ? "errorInput" : ""}
              value={photoPath}
              name="photo"
              id="photo"
              fullWidth={true}
              autoComplete="off"
              placeholder="Upload your photo"
            />
          </FileLoadWrapper>
          <CustomFormHelperText error={!!fileError}>
            {!!fileError ? fileError : ""}
          </CustomFormHelperText>
        </InputWrapper>
        <Submit
          type="submit"
          disabled={
            !values.name ||
            !values.email ||
            !values.phone ||
            !values.position_id ||
            !photo ||
            Object.keys(errors).length
          }
        >
          Sign up
        </Submit>
      </Form>
      {error ? (
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{ position: "absolute", right: "0", top: "65px" }}
        >
          Failed! Something went wrong!
        </Alert>
      ) : null}
      {successSubmit ? (
        <Alert
          severity="success"
          onClose={() => setSuccessSubmit(false)}
          sx={{ position: "absolute", right: "0", top: "65px" }}
        >
          User saved success!
        </Alert>
      ) : null}
    </Wrapper>
  );
};

export default PostRequestBlock;
