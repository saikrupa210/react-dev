import React from "react";
import ReactDOM  from "react-dom/client";

const heading =  React.createElement('h1',{id:'heading'},"Hello World From React testing the hotreload ✌🚀");

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root)
root.render(heading);



// deprecated

// const element = '<h1>Hello, React!</h1>';

// // Assuming you have an HTML element with the id "root"
// const rootElement = document.getElementById('root');

// console.log(rootElement)
// // Render the React element into the DOM
// ReactDOM.render(element, rootElement);
