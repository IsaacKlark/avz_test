import { Bar, ContentWrapper } from "./styles";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { RightWrapper } from "./styles";
import { CustomButtonLink } from "../Button";

const Header = () => {
  return (
    <Bar position="static">
      <ContentWrapper>
        <Logo />

        <RightWrapper>
          <CustomButtonLink href="#users" variant="contained">Users</CustomButtonLink>
          <CustomButtonLink href="#sign up" variant="contained">Sign up</CustomButtonLink>
        </RightWrapper>
      </ContentWrapper>
    </Bar>
  );
};

export default Header;
