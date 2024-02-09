import React from "react";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  secondaryCls?: string;
  bsDismiss?: string;
  ariaLable?: string;
  onButtonClick: () => void;
}
const MyButton = ({
  color = "primary",
  secondaryCls,
  bsDismiss,
  ariaLable,
  onButtonClick,
}: Props) => {
  return (
    <button
      className={"btn btn-" + color + " " + secondaryCls}
      data-bs-dismiss={bsDismiss}
      aria-label={ariaLable}
      onClick={onButtonClick}
    >
      My Button
    </button>
  );
};

export default MyButton;
