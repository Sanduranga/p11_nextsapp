import React, { ReactNode } from "react";

interface propType {
  children: ReactNode;
}

function Field(props: propType) {
  return (
    <div className="w-40 flex justify-start font-bold"> {props.children} </div>
  );
}

export default Field;
