import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import './index.css';
import Body from './components/Body/Body';

const styles = {
  appLayoutContainter: 'app-layout-container',
};

const AppLayout: React.FC = (): Element => {
  return (
    <div className={styles.appLayoutContainter}>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
