import React from "react";
import "./css/Home.css";
import AddPost from "../components/AddPost";
export default class userPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: this.props.userPosts
    };
  }

  userPost(post) {
    return (
      <div className="Body-User-Post-Card" key={post.id}>
        <div className="Body-User-Post-Label">
          {post.name}
        </div>
        <div className="Body-User-Post-Value">
          {post.post}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Body-User-Post">
        <div>
          <AddPost addPost={post => this.props.addPost(post)} />
        </div>
        {this.props.userPosts.map(post => this.userPost(post))}
      </div>
    );
  }
}

// console.log(Object.keys(data)[0])
