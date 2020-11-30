import React from "react";

export class Todo extends React.Component {
  state = {
    items: [],
    value: 5
  };

  getAllTodos = async () => {
    await fetch(
      `https://jsonplaceholder.typicode.com/todos?&_limit=${this.state.value}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ items: json });
      });
  };

  componentDidUpdate(_prevProps: any, prevState: any) {
    // Updates todo's if state changed
    if (prevState.value !== this.state.value) {
      this.getAllTodos();
    }
  }

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return <div className="App">Todo</div>;
  }
}
