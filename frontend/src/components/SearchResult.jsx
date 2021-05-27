import React from "react";
import { Link } from "react-router-dom";

function SearchResult({ title, content, date, author, post_id }) {
  return (
    <Link to={`/blog/${post_id}`} style={{ color: "#0056b3" }}>
      <div
        style={{
          width: "30vw",
          height: "300px",
          background: "#f8f8f8",
          padding: "10px",
        }}
      >
        <div className="head">
          <h1>{title}</h1>
          <h3>{date.substr(0, 10)}</h3>
        </div>
        <p>{content}</p>
        <div className="author">
          <h4>-{author}</h4>
        </div>
      </div>
    </Link>
  );
}

export default SearchResult;
