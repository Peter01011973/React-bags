import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import Routes from './components/routes';
import GetDataForFilters from './components/getDataForFilters';

function App() {
  return (
    <>
      <GetDataForFilters />
      <Layout>
        <div className="App">
          <Routes />
        </div>
      </Layout>
    </>
  );
}

export default App;
