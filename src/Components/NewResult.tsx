import React from "react";
import Judith1 from "./Judith1";

interface propsDate {
  count: number;
}

const NewResult: React.FC<propsDate> = ({ count }) => {
  return (
    <div>
      <Judith1 count={count} />
    </div>
  );
};

export default NewResult;
