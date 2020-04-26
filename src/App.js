import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Footer, IconBar, NavBar } from './components'
import { Criticas, Home, Personagens, Podcasts } from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path="/" component={() => <Home />} />
          <Route path="/criticas" component={() => <Criticas />} />
          <Route path="/personagens" component={() => <Personagens />} />
          <Route path="/podcasts" component={() => <Podcasts />} />

        </Switch>
        <IconBar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
