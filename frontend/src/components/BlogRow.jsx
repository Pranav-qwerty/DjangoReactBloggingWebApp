import React, { Component } from "react";
import Blog from "./Blog";

class BlogRow extends Component {
  constructor() {
    super();
    this.state = {
      blogData: [],
      fetchPageNo: 1,
    };
    this.renderBlog = this.renderBlog.bind(this);
  }

  blogSection_Style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/post")
      .then((response) => response.json())
      .then((data) => {
        if (data.count == 0) {
          this.setState({
            fetchPageNo: null,
          });
        } else if (data.count < 10) {
          this.setState({
            fetchPageNo: 1,
          });
        } else {
          this.setState({
            fetchPageNo: Math.round(data.count / 5) - 1,
          });
        }

        if (this.state.fetchPageNo != null) {
          fetch(`http://localhost:8000/api/post?page=${this.state.fetchPageNo}`)
            .then((response) => response.json())
            .then((data) => {
              // setBlogData(data);
              this.setState({
                blogData: data.results,
              });
              console.log(this.state.blogData[0]);
            });
        } else {
          this.setState({
            blogData: null,
          });
        }
      });
  }
  renderBlog() {
    if (this.state.blogData != null) {
      return (
        <div>
          {this.state.blogData.map((_, index, blog) => {
            return (
              <Blog
                content={blog[index]["body"]}
                date={blog[index]["created_at"]}
                code={blog[index]["post_id"]}
                title={blog[index]["title"]}
                thumbnail={"/static/images/code.jpg"}
              />
            );
          })}
        </div>
      );
    } else {
      console.log(this.state.blogData);
      return <h1>There are no blogs</h1>;
    }
  }
  render() {
    return (
      <div
        className="blog_section_2"
        style={{
          display: this.state.fetchPageNo != null ? "block" : "flex",
          justifyContent: "center",
        }}
      >
        <div className="row">{this.renderBlog()}</div>
      </div>
    );
  }
}
export default BlogRow;
