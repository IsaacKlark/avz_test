import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

export const CustomButton = styled(Button)`
  background-color: #f4e041;
  border-radius: 80px;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  width: 100.3px;
  height: 34px;
  color: black;
  box-shadow: none;
  text-transform: none;
  letter-spacing: 0;

  &:hover {
    background-color: #ffe302;
    cursor: pointer;
    box-shadow: none;
  }
`;

export const CustomButtonLink = styled(Link)`
  background-color: #f4e041;
  border-radius: 80px;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  width: 100.3px;
  height: 34px;
  color: black;
  box-shadow: none;
  text-transform: none;
  letter-spacing: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffe302;
    cursor: pointer;
    box-shadow: none;
  }
`;
