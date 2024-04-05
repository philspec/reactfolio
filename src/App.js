import React from 'react';
import PrerenderedComponent from './components/PrerenderedComponent';
import ClientSideComponent from './components/ClientSideComponent';

const App = () => {
  return (
    <div>
      <PrerenderedComponent />
      <ClientSideComponent />
    </div>
  );
};

export default App;
