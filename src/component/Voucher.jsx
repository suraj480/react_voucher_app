import React, { Component } from 'react';

class Voucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  fetchData = () => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        // Assuming your API returns an array of items
        this.setState(prevState => ({
          items: [...prevState.items, data],
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  handleDelete = index => {
    this.setState(prevState => ({
      items: prevState.items.filter((item, i) => i !== index),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <button onClick={this.fetchData}>Fetch Data</button>
        <div className="card">
            {console.log("CHECK",items)}
          {items.map((item, index) => (
            <div key={index} className="item">
              <p>{item.title}</p>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Voucher;
