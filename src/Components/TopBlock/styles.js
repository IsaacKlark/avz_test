import { Box } from "@mui/system";
import styled from "@emotion/styled";
import BackgroundImage360 from "../../images/background360.png";
import BackgroundImage768 from "../../images/background768.png";
import BackgroundImage1024 from "../../images/background1024.png";
import BackgroundImage1170 from "../../images/background1170.png";

import { Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  height: 500px;
  max-width: 1170px;
  background-image: url(${BackgroundImage360});
  padding: 40px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 89px 16px 0;
  }

  @media (min-width: 1024px) {
    height: 650px;
    padding: 164px 16px 0;
  }

  @media (min-width: 361px) {
    background-image: url(${BackgroundImage768});
  }

  @media (min-width: 769px) {
    background-image: url(${BackgroundImage1024});
  }

  @media (min-width: 1025px) {
    background-image: url(${BackgroundImage1170});
  }
`;

export const Head = styled(Typography)`
  color: white;
  font-family: "Nunito";
  font-size: 40px;
  margin-bottom: 21px;
  line-height: 40px;
  text-align: center;
  max-width: 380px;
  letter-spacing: 0;
`;

export const Text = styled(Typography)`
  color: white;
  font-family: "Nunito";
  font-size: 16px;
  margin-bottom: 32px;
  line-height: 26px;
  text-align: center;
  max-width: 380px;
  letter-spacing: 0;
`;
