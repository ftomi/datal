import React from "react";
import { useFormikContext } from "formik";

import Btn from "../Btn";

function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();

  return <Btn onPress={handleSubmit}> {children}</Btn>;
}

export default SubmitButton;
