import {
  handleDecrease,
  handleIncrease,
  handleReset,
  handleSetName,
} from "../redux/introduction/home.action";
import { useDispatch } from "react-redux";
import SecondComponent from "./SecondComp";

const FirstComponent = () => {
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    console.log("Increase button clicked");
    dispatch(handleIncrease());
  };

  const handleButtonClick = () => {
    dispatch(handleSetName("Credo systems"));
  };

  return (
    <div>
      <h1>This is First Component </h1>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={() => dispatch(handleDecrease())}>Decrease</button>
      <button onClick={() => dispatch(handleReset())}>Reset</button>

      <button onClick={handleButtonClick}> Click me </button>
      <br />
      <br />
      <br />
      <SecondComponent />
    </div>
  );
};

export default FirstComponent;
