import * as React from "react";
import _Link from "next/link";
/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";

let animation = keyframes({
  "from,to": {
    color: "green"
  },
  "50%": {
    color: "hotpink"
  }
});

export default () => (
  <React.Fragment>
    <h1
      css={{
        animation: `${animation} 3s infinite`,
        fontFamily: "sans-serif"
      }}
    >
      Some Text!
    </h1>
  </React.Fragment>
);
