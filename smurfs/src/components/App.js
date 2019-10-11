import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';

const App = props => {

    return (
      <div className="App">
        <SmurfList />
        <AddSmurfForm />
      </div>
    );
}

export default App;
