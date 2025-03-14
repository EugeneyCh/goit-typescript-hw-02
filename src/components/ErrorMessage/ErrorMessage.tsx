import { FC } from "react";
import s from "./ErrorMessage.module.css";


const ErrorMessage: FC = () => {
  return (
    <div className={s.errorMessage}>
      <h2>Something went wrong! Try again later...</h2>
    </div>
  );
}
export default ErrorMessage;
