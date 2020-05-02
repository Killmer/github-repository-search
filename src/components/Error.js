import React from "react";

import { StyledError } from "./styles/StyledError";

const Error = ({ error }) => (
  <StyledError>{error || "Something went wrong..."}</StyledError>
);

export default Error;
