import BlogRow from "./BlogRow";

function BlogSection() {
  return (
    <div class="blog_main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="blog_text">Our Latest Blog</h1>
          </div>
          <BlogRow no1={0} no2={1} no3={2} />
        </div>
        <div class="blog_section_2"></div>
      </div>
    </div>
  );
}

export default BlogSection;
