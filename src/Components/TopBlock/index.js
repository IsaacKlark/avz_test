import { Wrapper, Text, Head } from "./styles";
import { CustomButton } from "../Button";

const TopBlock = () => {
  return (
    <Wrapper component="section">
      <Head component="h1">Test assignment for front-end developer</Head>
      <Text>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Text>
      <CustomButton>Sign up</CustomButton>
    </Wrapper>
  );
};

export default TopBlock;
