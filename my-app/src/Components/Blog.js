import 'bootstrap/dist/css/bootstrap.min.css';

function Blog() {
  return (
    <div className="container-fluid p-5 d-flex align-items-center justify-content-center border" style={{ height: "90vh" }}>
      <div className="row">
        <div className="col-12">
          <h1 className="d-flex justify-content-center" style={{ fontSize: 80 }}>Blog</h1>
        </div>
      </div>
    </div>
  );
}

export default Blog;