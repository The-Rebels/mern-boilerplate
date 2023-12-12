import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementBy4 = () => {
    dispatch(incrementByAmount(4));
  };

  return (
    <div className='w-full h-screen gap-10 flex justify-center items-center flex-col'>
      <button
        className='bg-black/20 border border-black/70 rounded-md py-2 px-6'
        onClick={handleIncrement}
      >
        Increment
      </button>
      <h1>count is {value}</h1>
      <button
        className='bg-black/20 border border-black/70 rounded-md py-2 px-6'
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className='bg-black/20 border border-black/70 rounded-md py-2 px-6'
        onClick={handleIncrementBy4}
      >
        IncrementByAmount
      </button>
    </div>
  );
}

export default App;
