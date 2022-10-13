import {
  Wrapper,
  Head,
  CardsWrapper,
  CustomCard,
  CustomAvatar,
  Name,
  Text,
  Button,
} from "./styles";
import { useEffect, useState } from "react";
import { getUsers } from "../services";
import { Alert } from "@mui/material";
import Preloader from "../Proloader";
import avatarImage from "../../images/avatar.svg";

const GetRequestBlock = ({ page, setPage }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setLoading(true);
    }

    getUsers(page)
      .then((res) => {
        if (mounted) {
          if (page === 1) {
            setUsers(res.users);
            setTotalPages(res.total_pages);
          } else {
            setUsers([...users, ...res.users]);
          }
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => (mounted = false);
  }, [page]);

  const formatPhoneNumber = (phoneNumberString) => {
    let splittedNumber = phoneNumberString.split("");
    splittedNumber.splice(3, 0, ' (');
    splittedNumber.splice(7, 0, ') ');
    splittedNumber.splice(11, 0, ' ');
    splittedNumber.splice(14, 0, ' ');

    return splittedNumber.join("");
  };

  return (
    <Wrapper>
      <Head id="users" component="h1">Working with GET request</Head>
      {error ? (
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{ position: "absolute", right: "0", top: "65px" }}
        >
          Failed! Users weren't loaded!
        </Alert>
      ) : null}
      <CardsWrapper>
        {users.map((user) => (
          <CustomCard key={user.id}>
            <CustomAvatar alt={user.name} src={user.photo || avatarImage} />
            <Name title={user.name}>{user.name}</Name>
            <Text title={user.position}>{user.position}</Text>
            <Text title={user.email}>{user.email}</Text>
            <Text title={formatPhoneNumber(user?.phone)}>
              {formatPhoneNumber(user.phone)}
            </Text>
          </CustomCard>
        ))}
      </CardsWrapper>
      {page < totalPages ? (
        <Button onClick={() => setPage(page + 1)}>Show more</Button>
      ) : null}

      <Preloader display={loading} />
    </Wrapper>
  );
};

export default GetRequestBlock;
