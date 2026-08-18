// useRef --------------------------------------------------------------------------------------------------------------
// allow access to DOM element and retain mutable values without re-renders. can hold previous state or prop values.
// used with ref attribute for direct DOM interaction.
// Not limited to DOM referance , can hold any value. Refs can passed as props also.

import { useRef } from "react";

const number = useRef();