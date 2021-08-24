import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    //JS Functions
    const inputTextHander = (e) => {
        console.log("LOOKATME", e.target.value);
        setInputText(e.target.value);
    }
    const submitTextHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 10000) + 1 }
            //Originalmente era "Math.random() *  1000"
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHander}
                type="text"
                className="todo-input" />
            <button
                onClick={submitTextHandler}
                className="todo-button"
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    name="todos"
                    className="filter-todo"
                    onChange={statusHandler}
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
