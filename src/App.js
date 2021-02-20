import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from './pages/About';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/A-propos" component={About} exact />
            <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
      
  );
};

export default App;
