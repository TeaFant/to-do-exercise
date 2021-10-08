import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import "./Todos.css";

class Todos extends Component {
  render() {
    const undone = [];
    const done = [];

    this.props.todos.map((todo) => {
      if (todo.completed) {
        return done.push(
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        );
      } else {
        return undone.push(
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        );
      }
    });

    return (
      <div className="list">
        <div>
          <h2>To do</h2>
          <div>{undone.length === 0 ? <p>Nice job!!</p> : undone}</div>
        </div>
        <div>
          <h2>Done</h2>
          <div>
            {done.length === 0 ? <p>What are you waiting for??</p> : done}
          </div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
