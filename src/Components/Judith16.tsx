import React from "react";
import Judith17 from "../Components/Judith17";

interface propsDate {
  joy: number;
}
const Judith16: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith17 joy={joy} />
    </div>
  );
};

export default Judith16;
