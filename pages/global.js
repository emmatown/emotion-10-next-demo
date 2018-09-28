import _Link from "next/link";
/** @jsx jsx */
import { jsx, Global } from "@emotion/core";

export default () => (
  <div>
    <Global
      styles={{
        html: {
          fontFamily: "sans-serif"
        }
      }}
    />
    <h1>This is styled globally!</h1>
  </div>
);
