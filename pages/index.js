import _Link from "next/link";
/** @jsx jsx */
import { jsx } from "@emotion/core";

let Center = props => (
  <div
    css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "95vh",
      width: "95vw",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}
  >
    <div>{props.children}</div>
  </div>
);

let Link = props => (
  <div
    css={{
      padding: 8
    }}
  >
    <_Link href={props.href}>
      <a>{props.children}</a>
    </_Link>
  </div>
);

export default () => (
  <Center>
    <div>
      <h1>Emotion 10.</h1>
      <Link href="/global">Global</Link>
      <Link href="/strings">Strings</Link>
      <Link href="/keyframes">Keyframes</Link>
      <Link href="/class-names">Class Names</Link>
      <Link href="/theming">Theming</Link>
    </div>
  </Center>
);
