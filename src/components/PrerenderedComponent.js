import React from 'react';

const PrerenderedComponent = () => {
  return (
    <div>
      <h2>This is a Prerendered component.</h2>
      <p>This content is prerendered during the build process.</p>
      <img src="https://images.unsplash.com/photo-1653324078431-a27144d5895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"/>
    </div>
  );
};

export default PrerenderedComponent;
