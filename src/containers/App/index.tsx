import React from 'react';
import Header from '@components/Header';
import MenuBar from '@components/MenuBar';
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <header>
        <MenuBar name={'Chan abcsasas'}></MenuBar>
      </header>
    </div>
  );
}

export default App;
