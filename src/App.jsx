import React, { useState } from 'react';
import Screen from './Screen';
import Header from './Header';

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  return (
    <>
      {isSplashVisible ? (
        <Screen onFinish={() => setSplashVisible(false)} />
      ) : (
        <div>
          <Header />
        </div>
      )}
    </>
  );
};

export default App;
