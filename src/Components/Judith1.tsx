import React from "react";
import Judith2 from "./Judith2";
interface propsDate {
  count: number;
}

const Judith1: React.FC<propsDate> = ({ count }) => {
  return (
    <div>
      <Judith2 pearl={count} />
    </div>
  );
};

export default Judith1;
