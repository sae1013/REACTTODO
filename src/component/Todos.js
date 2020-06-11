import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log("Todos컴포넌트 실행");
    return this.props.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
