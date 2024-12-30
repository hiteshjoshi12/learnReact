import React from "react";
import ReactDOM from "react-dom";

//jsx -> babel transpiles it to react.createElement
//jsx is not html inside html. It is a html/xml like syntax
const Heading = <h1>Hello from JSX</h1>;

//react components
//class based components  -OLD
// Functional components - NEW

const AnotherComponent = () => {
    <div>
      <h1>HEllo from Another Component</h1>
    </div>
};

//React Functional Component
const HeadingComponent = () => {
    <div>
      <AnotherComponent />
      <h1 className="heading">Namaste React Functional Component</h1>
      <AnotherComponent />
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(<HeadingComponent />);



