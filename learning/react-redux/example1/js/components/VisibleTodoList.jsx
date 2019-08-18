import React from "react";
import connect from "react-redux/es/connect/connect";
import TodoList from "./TodoList.jsx";
import PropTypes from "prop-types";
import toggleTodo from "../reducers/toggleTodo";
import { withRouter } from "react-router";
import {SHOW_ALL} from "../constants";
import { getVisibleTodos } from "../reducers";


const mapStateToTodoListProps = (state,  { match }) => {
    return {
        todos: getVisibleTodos(state, match.params.filter || SHOW_ALL)
    };
};

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    { onTodoClick: toggleTodo }
)(TodoList));
VisibleTodoList.contextTypes = {
    store: PropTypes.object
};

export default VisibleTodoList;