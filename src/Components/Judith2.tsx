import React from "react";
import Judith3 from "../Components/Judith3";

interface propsDate {
  pearl: number;
}

const Judith2: React.FC<propsDate> = ({ pearl }) => {
  //(props)
  return (
    <div>
      {" "}
      /
      <Judith3 joy={pearl} />
    </div>
  );
};
//{props.pearl}
export default Judith2;
