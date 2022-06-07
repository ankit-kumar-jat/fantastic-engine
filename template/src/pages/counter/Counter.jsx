import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "redux/features/counter/counterSlice";
import { Container } from "components/ui";

const Button = (props) => {
  return (
    <button
      className="mx-2 my-1 px-4 py-2 bg-[#704cb61a] rounded-sm text-[#704cb6] text-3xl transition-all border-2 border-transparent outline-none hover:border-[#704cb666] focus-visible:border-[#704cb666] active:bg-[#704cb633]"
      {...props}
    />
  );
};

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Container>
      <div className="flex justify-center items-center space-x-4 mb-6">
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className="px-4 text-7xl">{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="text-5xl w-14 text-center"
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </div>
    </Container>
  );
}
