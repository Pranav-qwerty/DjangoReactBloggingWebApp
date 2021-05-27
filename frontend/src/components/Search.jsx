import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import SearchResult from "./SearchResult";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.renderRes = this.renderRes.bind(this);
  }
  handelTextFieldChange(e) {
    this.setState({
      data: [],
    });
    fetch(`http://localhost:8000/api/search-post?query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        let parsed_data = JSON.parse(data);
        this.setState({
          data: parsed_data,
        });
        console.log(this.state.data);
      });
  }
  renderRes() {
    if (this.state.data == []) {
      return <h1>No Result Found Matching Your Search</h1>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {this.state.data.map((blog, index) => {
            return (
              <SearchResult
                content={blog.body}
                date={String(blog.date)}
                author={blog.author}
                title={blog.title}
                post_id={blog.post_id}
              />
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div id="search">
        <div className="search-box">
          <TextField
            id="outlined-basic"
            label="Enter any Keyword"
            variant="outlined"
            onChange={(e) => this.handelTextFieldChange(e)}
          />
        </div>
        <div className="search-results">{this.renderRes()}</div>
      </div>
    );
  }
}

export default Search;
