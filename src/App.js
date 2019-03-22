import React, { Component } from 'react';
import './App.css';

import Child from './child'
import Search from './Search'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      searchResult: []
    }
  }
   
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts:data
        })
      })
  }

  onChangeSearch = (e) => {

    this.setState({
      search: e
    })

    let res = this.state.posts.filter((post) => {
      return post.title.toLowerCase().indexOf(this.state.search) > -1;
    })

    this.setState({
      searchResult: res
    })

  }
  
  render() {
    const { searchResult, posts } = this.state;
    return (
      <div className="App">
        <h1 className="mt-2">Total Search Result : {this.state.searchResult.length} out of {this.state.posts.length}</h1>
        <div className="search my-5">
          <Search searchresultfromchild={this.onChangeSearch} />
        </div>
        <div className="container">
          <div className="row">
            {
              searchResult.length > 0 ? 
              searchResult.map(post => {
                return (
                  <Child key={post.id} title={post.title} body={post.body} />
                )
              }) : 
              posts.map(post => {
                return (
                  <Child key={post.id} title={post.title} body={post.body} />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
