import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editText, setEditText] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, isEditing: false }]);
        setNewTask("");
    };

    const editTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, isEditing: true } : task
        );
        setTasks(updatedTasks);
        setEditText(tasks[index].text);
    };

    const saveTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { text: editText, isEditing: false } : task
        );
        setTasks(updatedTasks);
    };

    const cancelEdit = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, isEditing: false } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-list-container">
            <div className="task-input">
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button className="save-button" onClick={() => saveTask(index)}>Save</button>
                                <button className="cancel-button" onClick={() => cancelEdit(index)}>Cancel</button>
                            </>
                        ) : (
                            <span>{task.text}</span>
                        )}
                        {!task.isEditing && (
                            <>
                                <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
