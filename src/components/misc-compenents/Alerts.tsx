import React, { ReactNode } from "react";
import { useEffect } from "react";

import MyButton from "./MyButton";

interface Props {
  text?: string;
  children: ReactNode;
}
const Alert = ({ text, children }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <MyButton
        secondaryCls="btn-close"
        bsDismiss="alert"
        ariaLable="Close"
        onButtonClick={function (): void {
          console.log("Button in Alert is clicked");
        }}
      ></MyButton>
    </div>
  );
};

export default Alert;
