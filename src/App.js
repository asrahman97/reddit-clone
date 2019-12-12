import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Post from './components/post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       
      }





  }


  

  


  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <h1>Reddit</h1>

        <Post />

        Hello world

    </div>
    );
  }
}

export default App;
