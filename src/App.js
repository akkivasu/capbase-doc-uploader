import React from 'react';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Uploader from './Uploader';
import DocsreqContextProvider from './contexts/DocsreqContext';
import DocscomplContextProvider from './contexts/DocscomplContext';
const App = () => {
  return (
    <div className="App" style={{fontFamily: "'Open Sans Condensed', sans-serif"}}>
      <DocscomplContextProvider>
      <DocsreqContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/uploader' component={Uploader} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </DocsreqContextProvider>
      </DocscomplContextProvider>
    </div>
  );
}

export default App;
