import React from "react";
import { Link } from "react-router-dom";

function Blog({ thumbnail, date, content, code, title }) {
  return (
    <div class="col-sm-4">
      <div class="section_1">
        <div>
          <img src={thumbnail} style={{ maxWidth: "100%" }} />
        </div>
        <button type="button" class="date-bt" style={{ width: "auto" }}>
          {date}
        </button>
        <Link
          style={{ color: "#0056b3", textAlign: "center" }}
          to={`/blog/${code}`}
        >
          <h2 style={{ color: "rgb(75 94 114)", fontWeight: "700" }}>
            {title}
          </h2>
          <p style={{ color: "#0056b3", height: "100px", margin: "0 10px" }}>
            {content}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
