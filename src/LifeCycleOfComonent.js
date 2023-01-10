import React from "react";

const LifeCycleOfComponent = () => {
  let lifeCycle = ["Mounting", "Updating", "Unmounting", "Error Handling"];

  let Mounting =
    "When an instance of a componnet is being created and inserted into the Dom";

  let Mounting_Methods = [
    "constructor",
    "static getDerivedStateFromProps",
    "render",
    "componentDidMount",
  ];

  let Updating =
    "When a component is being re-render as a result of changes to either its props and state";

  let Updating_Methods = [
    "ShouldComponentUpdate",
    "static getDerivedStateFromProps",
    "render",
    "getSnapShotBeforeUpdate",
    "compoentDidUpdate",
  ];

  let Unmounting = " When a component is being removed from the Dom";

  let Unmounting_Methods = ["componentWillUnmount"];

  let ErrorHandling =
    "when there is an error during rendering, in a lifeCycle method, on ithe the constructor of any child component";

  let ErrorHandling_Methods = [
    "static getDerivedStateFromProps",
    "componentDidCatch",
  ];
};

export default LifeCycleOfComponent;
