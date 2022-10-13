import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { FormHelperText } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Radio } from "@mui/material";
import { CustomButton } from "../Button";

export const Wrapper = styled(Box)`
  padding: 0 16px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled(Typography)`
  font-size: 40px;
  line-height: 40px;
  font-family: "Nunito";
  text-align: center;
  letter-spacing: 0;
`;

export const Form = styled(Box)`
  width: 100%;
  max-width: 1170px;
  display: grid;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  margin: 0 auto;
`;

export const CustomInput = styled(TextField)`
  margin-top: 50px;
  border-radius: 4px;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  max-width: 380px;

  input {
    font-family: "Nunito";
    font-size: 16px;
    padding: 0 16px;
    height: 54px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #d0cfcf;
  }

  .MuiOutlinedInput-notchedOutline:hover {
    border: none;
  }

  & .MuiOutlinedInput-root:hover {
    & > fieldset {
      border-color: #d0cfcf;
    }
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    color: #7e7e7e;
    font-family: "Nunito-Medium";
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    top: 4px;
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: #7e7e7e;
    font-size: 16px;
    left: 1px;
  }

  legend {
    font-size: 9px;
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #7e7e7e;
  }

  .css-1wc848c-MuiFormHelperText-root.Mui-error {
    font-size: 12px;
  }
`;

export const InputWrapper = styled(Box)`
  max-width: 380px;
  width: 100%;

  .error {
    border-color: #d32f2f;

    .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root,
    label {
      color: #d32f2f;
    }
  }
`;

export const CustomFormControl = styled(FormControl)`
  margin-top: 50px;
  border-radius: 4px;
  border: 1px solid #d0cfcf;
  width: 100%;

  label + .css-rzipz-MuiInputBase-root-MuiInput-root {
    margin: 0;
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    background: #e5e5e5;
    padding: 0 8px;
    left: -8px;
    font-size: 12px;
    color: #7e7e7e;
    top: 2px;
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #7e7e7e;
  }

  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: #7e7e7e;
  }
`;

export const SimpleInput = styled(Input)`
  &::before,
  &::after {
    border: none !important;
  }

  font-family: "Nunito";
  font-size: 16px;
  padding: 0 16px;
  height: 54px;
  margin: 0;
`;

export const CustomFormHelperText = styled(FormHelperText)`
  margin-left: 16px;
  color: #7e7e7e;
  font-family: "Nunito";
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  margin-bottom: 21px;
  letter-spacing: 0;

  @media (min-width: 768px) {
    margin-bottom: 22px;
  }
`;

export const Text = styled(Typography)`
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
`;

export const RadioWrapper = styled(Box)`
  margin-top: 11px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;

  span {
    padding: 0;
    margin-right: 11px;
  }
`;

export const Label = styled(InputLabel)`
  display: flex;
  color: black;
  align-items: center;
`;

export const CustomRadio = styled(Radio)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FileLoadWrapper = styled(Box)`
  display: flex;
  width: 100%;
  width: 100%;
  max-width: 380px;
  position: relative;
  margin-top: 47px;

  .error {
    border: 2px solid #cb3d40;
  }

  .errorInput {
    border: 2px solid #cb3d40;
    border-left: none;
  }

  input[class="error"] {
    border-left: none;
  }
`;

export const FileLoader = styled(Input)`
  position: absolute;
  visibility: hidden;
  pointer-events: none;
`;

export const LoadButton = styled.label`
  width: 114px;
  height: 54px;
  letter-spacing: 0;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  text-transform: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 108px;
  }
`;

export const LoadInput = styled(Input)`
  width: 100%;
  border: 1px solid #d0cfcf;
  border-radius: 0 4px 4px 0;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  padding: 0 16px;

  &::placeholder {
    color: #7e7e7e;
    letter-spacing: 0;
  }

  &::before,
  &::after {
    border: none !important;
  }
`;

export const Submit = styled(CustomButton)`
  margin: 29px auto 100px;

  &:disabled {
    background: #b4b4b4;
    color: white;
  }
`;
