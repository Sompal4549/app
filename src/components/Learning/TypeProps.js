"use client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const { Box, Text, Input } = require("@chakra-ui/react");

const TypeProps = ({ num, str, bool }) => {
  return (
    <>
      <Box>
        <Text>Number Prop of TypeProps: {num}.</Text>
        <Text>String Prop of TypeProps: {str}.</Text>
        <Text>Boolean Prop of TypeProps: {bool}.</Text>
        <MagicEightBall />
      </Box>
    </>
  );
};
export default TypeProps;
// TypeProps.prototype = {
//   num: PropTypes.number.isRequired,
//   str: PropTypes.string.isRequired,
//   bool: PropTypes.boolean.isRequired,
// };
const MagicEightBall = () => {
  const [value, setValue] = useState("");
  const [randomIndex, setRandomIndex] = useState("");
  const handleChange = (event) => {
    setValue(event?.target?.value);
  };
  const ask = () => {
    if (value) {
      setRandomIndex(Math.floor(Math.random() * 20));
    }
  };
  const possibleAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ];
  return (
    <div>
      <Input value={value} type="text" onChange={handleChange} />
      <Button onClick={ask}>Ask</Button> the Magic Eight Ball!
      <Text color="white">{possibleAnswers[randomIndex]}</Text>
    </div>
  );
};
