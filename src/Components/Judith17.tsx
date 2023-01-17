import React from "react";
import Judith18 from "../Components/Judith18";

interface propsDate {
  joy: number;
}

const Judith17: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith18 joy={joy} />
    </div>
  );
};

export default Judith17;
