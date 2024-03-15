import React from 'react';

interface AppProps {
  message: string;
}

const App = ({message}: AppProps) => {
  return <div>{message} React Starter Kit in TypeScript</div>;
};

export default App;
