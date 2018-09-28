import * as React from "react";
import _Link from "next/link";
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

export default () => (
  <React.Fragment>
    <Global
      styles={css`
        html {
          font-family: sans-serif;
        }
      `}
    />
    <h1
      css={css`
        color: hotpink;
      `}
    >
      Some Text!
    </h1>
  </React.Fragment>
);
