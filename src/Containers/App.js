import React from 'react';
import './App.css';
import BlogPost from "../Components/BlogPost/BlogPost"
import CommectList from "../Components/CommentList/CommentList"

function App() {
  return (
    <div className="App">
      <BlogPost post="Initial Post Data"></BlogPost>
      <CommectList commentList = "Initial Comment List"></CommectList>
    </div>
  );
}

export default App;
