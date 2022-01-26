import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

// same way
// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
