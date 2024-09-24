import React from "react";

interface Props {
  buttonName: string;
  onClick: () => void;
}

const Button = ({ buttonName, onClick }: Props) => {
  return (
    <button className="btn mt-3" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
