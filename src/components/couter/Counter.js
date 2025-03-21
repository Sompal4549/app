"use client";
import React, { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectedStatus,
} from "../../lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectedStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Text as="span" aria-label="Count">
          {count}
        </Text>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <Flex>
        <Input
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
          value={incrementAmount}
          type="number"
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </Button>
      </Flex>
    </div>
  );
};
export default Counter;
