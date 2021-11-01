import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllTodoListsPage from './pages/AllTodoListsPage';
import DetailedListPage from './pages/DetailedListPage';
import EditListPage from './pages/EditListPage';

function App() {
  return (

    <div className="container">
        <Switch>
            <Route path="/edit/:id" component={EditListPage}/>
            <Route path="/:id" component={DetailedListPage}/>
            <Route path="/"><AllTodoListsPage/></Route>
        </Switch>
    </div>
  );
}

export default App;
