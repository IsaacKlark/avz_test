import axios from "axios";

export const getUsers = async (page) => {
  const res = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  );

  return res.data;
};

export const postUsers = async (data, token) => {
  const res = await axios.post(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users",
    data,
    {
      headers: {
        Token: token,
      },
    }
  );

  return res.data;
};

export const getPositions = async () => {
  const res = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
  );

  return res.data;
};

export const getToken = async () => {
  const res = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/token`
  );

  return res.data;
};
