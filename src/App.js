import Box from "@mui/material/Box";
import Header from "./Components/Header";
import { Global, css } from "@emotion/react";
import Nunito from "./fonts/Nunito-Regular.ttf";
import NunitoMedium from "./fonts/Nunito-Medium.ttf";
import TopBlock from "./Components/TopBlock";
import GetRequestBlock from "./Components/GetRequestBlock";
import PostRequestBlock from "./Components/PostRequestBlock";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Global
        styles={css`
          @font-face {
            font-family: "Nunito";
            src: url(${Nunito}) format("truetype");
          }

          @font-face {
            font-family: "Nunito-Medium";
            src: url(${NunitoMedium}) format("truetype");
          }

          * {
            box-sizing: border-box;
          }

          body {
            background: #e5e5e5;
          }
        `}
      />
      <Header />
      <TopBlock />
      <GetRequestBlock page={page} setPage={setPage} />
      <PostRequestBlock setPage={setPage} />
    </Box>
  );
}

export default App;
