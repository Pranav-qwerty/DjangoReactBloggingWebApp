import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      body: "",
      redirect_now: false,
      post_id: "",
    };
    this.handlePostBlog = this.handlePostBlog.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  handlePostBlog() {
    if (
      this.state.author != "" &&
      this.state.tilte != "" &&
      this.state.body != ""
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: this.state.author,
          title: this.state.title,
          body: this.state.body,
        }),
      };

      fetch("http://localhost:8000/api/create-post", requestOptions)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return 0;
          }
        })
        .then((data) => {
          if (data != 0) {
            alert(
              `Your blog has been created. Your blog id is ${data.post_id}`
            );
            console.log(data);
            this.setState({
              redirect_now: true,
              post_id: data.post_id,
            });
          } else {
            alert("Please enter all the fields");
          }
        });
    } else {
      console.log(this.state.author);
      console.log(this.state.tilte);
      console.log(this.state.body);
    }
  }
  handleTextFieldChange(e) {
    this.setState({
      body: e.target.value,
    });
    console.log(e.target.value);
  }
  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
    console.log(e.target.value);
  }
  handleAuthorChange(e) {
    this.setState({
      author: e.target.value,
    });
    console.log(e.target.value);
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        {this.state.redirect_now ? (
          <Redirect to={"/blog/" + this.state.post_id} />
        ) : (
          <div />
        )}
        <div
          className="create-main"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="create">
            <TextField
              label="Enter Your Name"
              variant="outlined"
              defaultValue=""
              onChange={this.handleAuthorChange}
            />
          </div>
          <div className="create">
            <TextField
              label="Enter Blog Title"
              variant="outlined"
              onChange={this.handleTitleChange}
              defaultValue=""
            />
          </div>
          <hr />
          <div className="create" style={{ display: "flex" }}>
            <TextField
              label="Enter Blog Content"
              variant="outlined"
              defaultValue=""
              cols={100}
              rows={30}
              onChange={this.handleTextFieldChange}
              multiline={true}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handlePostBlog}
          >
            Post Blog
          </Button>
        </div>
      </div>
    );
  }
}

export default CreateBlog;
