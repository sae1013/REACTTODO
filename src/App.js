import React from "react";
import Todos from "./component/Todos";
import Header from "./component/layout/Header";
import AddTodo from "./component/AddTodo";
import About from "./component/pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  //Togle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Del Complete
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          // console.log("filter()호출");
          return todo.id !== id;
        }),
      ],
    });
    // console.log("setstate이후호출");
  };
  //Add Complete

  AddTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      copleted: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  state = {
    todos: [
      {
        id: uuid(),
        title: " Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: " sex",
        completed: true,
      },
    ],
  };
  componentDidMount() {
    console.log("App.js마운트");
  }
  render() {
    console.log("App컴포넌트");
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header style={headerStyle}></Header>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo}></AddTodo>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  ></Todos>
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
export default App;
