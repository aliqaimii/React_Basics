import React, { useCallback, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [useMemoState, setUseMemoState] = useState(false);

  //   console.log("Parent component called");
  const memoCalculation = useMemo(() => setNum(count), [count]);
  // const num = useCallback(() => {
  //   setNum(count);
  // }, [count]);

  const calculation = useMemoState ? memoCalculation : setNum(count);

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100%",
  };

  const onToggle = () => {
    setDark(!dark);
  };

  const onIncreamemnt = () => {
    setCount(count + 1);
  };

  const toggleMemo = () => {
    setUseMemoState(!useMemoState);
  };

  return (
    <div style={style}>
      <text style={{ fontWeight: "bold", marginTop: 100 }}>useMemo</text>

      <div>
        <text>Count : {calculation}</text>
        <button onClick={onIncreamemnt}>Increament</button>
      </div>
      <button onClick={onToggle}>toggle</button>

      <button onClick={toggleMemo}>
        toggle Memo : {useMemoState ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
};

function setNum(num) {
  console.log("LOOOOOOP");
  for (let i = 0; i < 1000000000; i++) {}
  return num;
}

export default React.memo(UseMemo);
