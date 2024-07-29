// App.js

import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <h2>Saivijay</h2> {/* Added this line for your name */}
            <h1>My To-Do List</h1>
            <ToDoList />
        </div>
    );
}

export default App;
