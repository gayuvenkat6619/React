import { useSelector } from "react-redux";
 
const SecondComponent = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>This is Second Component </h1>
      counter value: {state.count}
      <br /> <br />
      Name: {state.name}
    </div>
  );
};
 
export default SecondComponent;
 