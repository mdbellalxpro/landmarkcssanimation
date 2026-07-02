import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "github-markdown-css/github-markdown-light.css";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import "./singleBlog.css";
const SingleBlog = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ===========================
  // Fetch Blog
  // ===========================
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://landmarkcssanimationbackend.onrender.com/api/blogs/${slug}`,
        );
        const data = await res.json();

        if (data.success) {
          setBlog(data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // ===========================
  // Increase View
  // ===========================
  useEffect(() => {
    fetch(
      `https://landmarkcssanimationbackend.onrender.com/api/blogs/${slug}/view`,
      {
        method: "PATCH",
      },
    ).catch(() => {});
  }, [slug]);

  // ===========================
  // Like Blog
  // ===========================
  const handleLike = async () => {
    try {
      const res = await fetch(
        `https://landmarkcssanimationbackend.onrender.com/api/blogs/${slug}/like`,
        {
          method: "PATCH",
        },
      );

      const data = await res.json();

      if (data.success) {
        setBlog((prev) => ({
          ...prev,
          likes: data.likes,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // ===========================
  // Post Comment
  // ===========================
  const handleComment = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);

    try {
      const res = await fetch(
        `https://landmarkcssanimationbackend.onrender.com/api/blogs/${slug}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            message,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        setBlog((prev) => ({
          ...prev,
          comments: data.comments,
        }));

        setName("");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="sb-loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="sb-loading">
        <h2>Blog Not Found</h2>
      </div>
    );
  }
    const previewDoc = `
    <!DOCTYPE html>
    <html>
    <head>

    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
    body{
      display:flex;
      justify-content:center;
      align-items:center;
      min-height:100vh;
      padding:30px;
      background:#f8fafc;
      overflow:auto;
    }

    ${blog?.cssCode || ""}
    </style>

    </head>

    <body>

    ${blog?.htmlCode || ""}

    </body>
    </html>
    `;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Landmark CSS Animation</title>

        <meta
          name="description"
          content={blog.metaDescription || blog.content?.substring(0, 160)}
        />

        <meta name="keywords" content={blog.tags?.join(", ") || ""} />

        <link
          rel="canonical"
          href={`https://landmarkcssanimation.onrender.com/blog/${blog.slug}`}
        />

        <meta
          property="og:url"
          content={`https://landmarkcssanimation.onrender.com/blog/${blog.slug}`}
        />

        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.content?.substring(0, 160)}
        />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />

        <meta name="robots" content="index,follow" />
      </Helmet>

      <section className="sb-single-blog">
        <div className="sb-hero-image">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className="sb-blog-wrapper">
          <h1>{blog.title}</h1>

          <div className="sb-author-info">
            <div className="sb-avatar">{blog.author?.charAt(0)}</div>

            <div>
              <h4>{blog.author}</h4>

              <small>{new Date(blog.createdAt).toLocaleDateString()}</small>
            </div>
          </div>

          <div className="sb-blog-stats">
            <button className="sb-like-btn" onClick={handleLike}>
              ❤️ {blog.likes || 0}
            </button>

            <span>💬 {blog.comments?.length || 0}</span>

            <span>👁 {blog.views || 0}</span>

            <span>📖 {blog.readingTime || 1} min read</span>
          </div>
          <div className="dec">
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>
          <br />

          {(blog.htmlCode || blog.tailwindCode) && (
            <div className="live-preview">
              <div className="code-header">
                <span>🚀 Live Preview</span>
              </div>
              <iframe
                title="Live Preview"
                srcDoc={previewDoc}
                sandbox="allow-scripts"
                className="preview-frame"
                style={{
                  height: `${blog.previewHeight || 200}px`,
                }}
              />
            </div>
          )}

          {blog.htmlCode && (
            <div className="code-block">
              <div className="code-header">
                <span>HTML</span>
              </div>

              <SyntaxHighlighter language="html" style={vscDarkPlus}>
                {blog.htmlCode}
              </SyntaxHighlighter>
            </div>
          )}

          {blog.cssCode && (
            <div className="code-block">
              <div className="code-header">
                <span>CSS</span>
              </div>

              <SyntaxHighlighter language="css" style={vscDarkPlus}>
                {blog.cssCode}
              </SyntaxHighlighter>
            </div>
          )}

          {blog.tailwindCode && (
            <div className="code-block">
              <div className="code-header">
                <span>Tailwind CSS</span>
              </div>

              <SyntaxHighlighter language="html" style={vscDarkPlus}>
                {blog.tailwindCode}
              </SyntaxHighlighter>
            </div>
          )}
        </div>

        <div className="sb-comment-section">
          <h2>Comments ({blog.comments?.length || 0})</h2>

          <form className="sb-comment-form" onSubmit={handleComment}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Write your comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Posting..." : "Post Comment"}
            </button>
          </form>

          <div className="sb-comments">
            {blog.comments?.length > 0 ? (
              blog.comments.map((item, index) => (
                <div className="sb-comment-card" key={item._id || index}>
                  <div className="sb-comment-avatar">
                    {item.name?.charAt(0)}
                  </div>

                  <div>
                    <h4>{item.name}</h4>

                    <p>{item.message}</p>

                    {item.createdAt && (
                      <small>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </small>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
