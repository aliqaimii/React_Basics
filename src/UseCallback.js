import React, { useCallback, useEffect, useMemo, useState } from "react";

const UseCallback = () => {
  const [increamentValue, setIncreamentValue] = useState(0);
  const [dark, setDark] = useState(false);

  const increament = useCallback(() => {
    setIncreamentValue(increamentValue + 1);
  }, []);

  const style = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100%",
  };

  const toggleTheme = () => {
    setDark(!dark);
  };
  return (
    <div style={style}>
      <h1>useCallback</h1>

      <h2>Increament value : {increamentValue}</h2>
      <Counter
        onClick={increament}
        value={"Increament Count" + increamentValue}
      />

      <button onClick={toggleTheme}>toggle Theme</button>
    </div>
  );
};

const Counter = ({ onClick, value }) => {
  //   useEffect(() => {
  //     console.log("render", value);
  //   }, [value]);

  console.log("render", value);

  return <button onClick={onClick}> {value}</button>;
};

export default React.memo(UseCallback);
