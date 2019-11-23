import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';

import Filters from './components/Filters';
import ListContainer from './components/ListContainer';
import AddTodoFormContainer from './components/addTodoFormContainer';
import './App.css'

const store = createStore(rootReducer);
console.log(store.getState())
function App() {
  return (
    // позвязываем store к приложению с помощью provider
      <Provider store={store}>
        <Filters />
        <ListContainer />
        <AddTodoFormContainer />
      </Provider>
  );
}

export default App;
