import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPost from './AllPost';



class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Post & Comments App</h2>
    </div>

    <AllPost />
    <PostForm />
</div>
);
}
}
export default App;
