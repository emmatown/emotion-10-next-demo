import * as React from "react";
import { ClassNames } from "@emotion/core";

// from npm or something
let Annoying = props => (
  <div className={props.wrapperClassName}>
    <div className={props.className}>some content</div>
  </div>
);

export default () => (
  <ClassNames>
    {({ css, cx }) => (
      <Annoying
        wrapperClassName={css({ padding: 8, fontFamily: "sans-serif" })}
        className={css({ color: "green" })}
      />
    )}
  </ClassNames>
);
