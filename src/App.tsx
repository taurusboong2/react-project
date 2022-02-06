import React from 'react';
import StarPrac from './components/StarPrac';
import StarSelf from './components/StarSelf';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Card display />
        <Card display="vt" />
        <Card display="vt" des={false} />
      </div>
      <Card display="big" />
      <div>
        <StarSelf />
        <StarPrac />
      </div>
    </div>
  );
}

export default App;
