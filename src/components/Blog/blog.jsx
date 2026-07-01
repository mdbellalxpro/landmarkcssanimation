import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();

        if (data.success) {
          setBlogs(data.data || []);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="blogpage-loading">
        <h2>Loading Blogs...</h2>
      </div>
    );
  }

  return (
    <section className="blogpage-container">
      <div className="blogpage-header">
        <h1>Latest Blogs</h1>
        <p>
          Discover React, JavaScript, CSS, Node.js and Web Development
          Articles.
        </p>
      </div>

      <div className="blogpage-grid">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="blogpage-card" key={blog._id}>
              <div className="blogpage-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                />
                
                <span className="blogpage-category">
                  {blog.category}
                </span>
              </div>

              <div className="blogpage-body">
                <div className="blogpage-author-box">
                  <div>
                    <h4>{blog.author}</h4>

                    <small>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>

                <h2>{blog.title}</h2>

               

                <p>{blog.excerpt}</p>

                <div className="blogpage-info">
                  <span>❤️ {blog.likes ?? 0}</span>

                  <span>💬 {blog.comments?.length ?? 0}</span>

                  <span>👁 {blog.views ?? 0}</span>
                </div>

             
               

                <Link
                  to={`/blog/${blog.slug}`}
                  className="blogpage-read-more"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="blogpage-no-blog">
            <h2>No Blogs Found</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;