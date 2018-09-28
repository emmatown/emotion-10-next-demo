import * as React from "react";
import _Link from "next/link";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

let theme = {
  color: "hotpink"
};

export default () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <h1
        css={theme => ({
          color: theme.color
        })}
      >
        Some Text!
      </h1>
    </ThemeProvider>
  </React.Fragment>
);
