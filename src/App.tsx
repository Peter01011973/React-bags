import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import Routes from './components/routes';

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes/>
      </div>
    </Layout>
  );
}

export default App;
