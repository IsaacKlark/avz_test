import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export const RightWrapper = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Text = styled(Typography)`
  text-transform: uppercase;
`;

export const Bar = styled(AppBar)`
  background-color: white;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 13px 16px;

  @media (min-width: 768px) {
    padding: 13px 32px;
  }

  @media (min-width: 1024px) {
    padding: 13px 60px;
  }
`;

export const ContentWrapper = styled(Box)`
  max-width: 1170px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
