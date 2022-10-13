import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { CustomButton } from "../Button";

export const Wrapper = styled(Box)`
  padding: 140px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 140px 31px;
  }

  @media (min-width: 1024px) {
    padding: 140px 60px;
  }
`;

export const Head = styled(Typography)`
  font-size: 40px;
  line-height: 40px;
  font-family: "Nunito";
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: 0;
`;

export const CardsWrapper = styled(Box)`
  display: grid;
  gap: 19px 16px;
  grid-template-columns: 1fr;
  max-width: 1170px;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 29px;
  }
`;

export const CustomCard = styled(Card)`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 255px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 254px;
  }
`;

export const CustomAvatar = styled(Avatar)`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
`;

export const Name = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 20px;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  overflow: hidden;
  max-width: 100%;
  letter-spacing: 0;
`;

export const Text = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  overflow: hidden;
  max-width: 100%;
  letter-spacing: 0;
`;

export const Button = styled(CustomButton)`
  width: 120px;
`;
