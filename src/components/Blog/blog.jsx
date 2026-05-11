
// BlogFeed.jsx

import React from "react";
import "./blog.css";

const posts = [
{
  id: 1,
  author: "SVG Master",
  time: "2 hours ago",
  category: "SVG Icons",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  title: "Premium SVG Icons Collection",
  description:
    "The Future of SVG Icons in Modern Web Design. SVG icons are very important in today’s web design. They are simple, clean, and fast. SVG never loses quality even when resized. It improves website speed, performance, and SEO. Developers can easily customize SVG with CSS and add animations like hover effects and transitions. SVG is widely used in menus, buttons, dashboards, and mobile apps. It saves time and makes UI design more efficient. In the future, SVG will play a bigger role in modern web development with animations and frameworks."
},

  {
    id: 2,
    author: "CSS Animation Lab",
    time: "5 hours ago",
    category: "CSS Animation",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title: "Creative CSS Animation Effects",
    description: 
    'CSS Animation is a technique used in web design to create motion and visual effects on elements. It makes websites look more modern and interactive.With CSS animation, elements can move, change color, fade, or transform smoothly without using complex code.It works using simple CSS properties like animation timing and keyframes that control how an element behaves over time.CSS animations are widely used in modern websites to improve user experience and make designs more engaging.They are lightweight, fast, and easy to implement, which makes them a popular choice for developers.Overall, CSS animation helps bring life to a static website and improves the overall visual experience.'


  },

  {
    id: 3,
    author: "Brandify Studio",
    time: "1 day ago",
    category: "Brand Logo",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    title: "Modern Brand Logo Inspiration",
    description:
      "Creative logo ideas for startups, businesses and modern digital brands.",
  },
];

export default function BlogFeed() {
  return (
    <div className="feed-page">

      {/* Top Header */}
      <div className="feed-header">
        <h1>Design Community Feed</h1>

        <p>
          SVG Icons, CSS Animations, UI Inspiration & Brand Logos
        </p>
      </div>

      {/* Feed Container */}
      <div className="feed-container">

        {/* Create Post */}
        <div className="create-post">

          <div className="create-top">
            <div className="profile"></div>

            <input
              type="text"
              placeholder="Share your latest design inspiration..."
            />
          </div>

          <div className="create-actions">
            <button>🎨 SVG</button>
            <button>✨ Animation</button>
            <button>🚀 Upload</button>
          </div>

        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div className="post-card" key={post.id}>

            {/* Post Header */}
            <div className="post-header">

              <div className="author-box">

                <div className="author-avatar">
                  {post.author.charAt(0)}
                </div>

                <div>
                  <h3>{post.author}</h3>
                  <span>{post.time}</span>
                </div>

              </div>

              <div className="post-category">
                {post.category}
              </div>

            </div>

            {/* Image */}
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>

            {/* Content */}
            <div className="post-content">

              <h2>{post.title}</h2>

              <p>{post.description}</p>

              {/* Actions */}
              <div className="post-actions">

                <button>❤️ Like</button>

                <button>💬 Comment</button>

                <button>🔗 Share</button>

                <button className="read-btn">
                  Read More
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}