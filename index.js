import React from "react";
import ReactDOM from "react-dom/client";

//Jsx 
const Title = () => (<h1>Hello react</h1>);


//React component
const Heading = () => {
 return (
  <>
  <h1>React functional component</h1>
  <h2>{console.log('fsdfsd')}</h2>
  {Title()}
  </>
 )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading/>);