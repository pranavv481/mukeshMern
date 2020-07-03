import React, { Component } from 'react';

class Home extends Component {
  state = {
    text: '',
    mywishes: [{ _id: 1, wish: 'loading' }],
  };

  handleDelete(id) {
    fetch('/remove/' + id, { method: 'delete' })
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        const newWishes = this.state.mywishes.filter((item) => {
          return item._id !== res2._id;
        });
        this.setState({
          mywishes: newWishes,
        });
      });
  }

  componentDidMount() {
    fetch('/data')
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        this.setState({
          mywishes: res2,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const url = 'http://localhost:5000/sent';

    var data = new URLSearchParams();

    for (const pair of new FormData(e.target)) {
      data.append(pair[0], pair[1]);
    }

    fetch('/sent', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        this.setState({
          mywishes: [...this.state.mywishes, res2],
        });
      });
  }
  render() {
    const list = this.state.mywishes.map((item) => {
      return (
        <a
          className="collection-item"
          key={item._id}
          onClick={() => this.handleDelete(item._id)}
        >
          {item.wish}
        </a>
      );
    });
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="item"
            value={this.state.text}
            placeholder="enter text"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button className="waves-effect waves-light btn" type="submit">
            Add
          </button>
        </form>

        <div className="collection">{list}</div>
      </div>
    );
  }
}

export default Home;
