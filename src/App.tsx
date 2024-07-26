import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
