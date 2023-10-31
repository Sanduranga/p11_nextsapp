import React, { ReactNode } from "react";

interface propType {
  children: ReactNode;
}

function StudentForm(props: propType) {
  return <div className="flex w-80">{props.children}</div>;
}

export default StudentForm;
