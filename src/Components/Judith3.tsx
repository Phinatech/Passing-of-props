import React from "react";
import Judith4 from "../Components/Judith4";

interface propsDate {
  joy: number;
}

const Judith3: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith4 joy={joy} />
    </div>
  );
};

export default Judith3;
