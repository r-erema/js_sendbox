import AddTodo from "./AddTodo.jsx";
import VisibleTodoList from "./VisibleTodoList.jsx";
import Footer from "./Footer.jsx";
import React from "react";
import {SHOW_ALL} from "../constants";

class TodoolaApp extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    };
}

export default TodoolaApp;