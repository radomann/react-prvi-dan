import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentWillUnmount() {
    // Ovdje čistite sve resurse koje ste alocirali u componentDidMount (kao što su tajmeri ili network requests)
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data ? <p>Data loaded: {JSON.stringify(data)}</p> : <p>Loading data...</p>}
      </div>
    );
  }
}

export default MyComponent;


