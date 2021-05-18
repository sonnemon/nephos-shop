import React from 'react';
import AppLayout from './layouts/app-layout.component';
import Router from './Router';

const App = () => {
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  );
};
export default App;
