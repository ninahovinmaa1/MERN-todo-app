import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import AllTodoListsPage from './pages/AllTodoListsPage';
import DetailedListPage from './pages/DetailedListPage';

function App() {
  return (

    <div className="App">
        <Switch>
            <Route path="/:id"><DetailedListPage/></Route>
            <Route path="/"><AllTodoListsPage/></Route>
        </Switch>
    </div>
  );
}

export default App;
