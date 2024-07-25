import React  from "react";
import ReactDOM from "react-dom";

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('h1', { id: 'child' }, 'This is heading 1'),
  React.createElement('h2', { id: 'child' }, 'This is heading 2'),

  React.createElement('h1', { id: 'child2' }, 'This is heading 1'),
  React.createElement('h2', { id: 'child2' }, 'This is heading 2'),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
