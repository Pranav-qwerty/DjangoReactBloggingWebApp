import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      thumbnail: "/static/images/code.jpg",
      date: "",
      author: "",
    };
    this.post_id = this.props.match.params.postId;
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/get-post?post_id=${this.post_id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          content: data.body,
          title: data.title,
          date: data.created_at,
          author: data.author,
        });
      });
    console.log(this.post_id);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="blog_post_con">
          <div className="blog_post">
            <div className="head">
              <h1>{this.state.title}</h1>
              <h3>{this.state.date.substr(0, 10)}</h3>
            </div>
            <p>{this.state.content}</p>
            <div className="author">
              <h4>-{this.state.author}</h4>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogPost;
