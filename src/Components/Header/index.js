import { Bar, ContentWrapper } from "./styles";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { RightWrapper } from "./styles";
import { CustomButton } from "../Button";

const Header = () => {
  return (
    <Bar position="static">
      <ContentWrapper>
        <Logo />

        <RightWrapper>
          <CustomButton variant="contained">Users</CustomButton>
          <CustomButton variant="contained">Sign up</CustomButton>
        </RightWrapper>
      </ContentWrapper>
    </Bar>
  );
};

export default Header;
