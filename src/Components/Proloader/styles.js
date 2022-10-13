import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const AnimatedPreloader = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: rotate 1s linear infinite;
  }
`;
