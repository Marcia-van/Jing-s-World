
import Lenis from "lenis"; // 确保你之前运行过 npm install lenis
import React, { useEffect, useRef } from "react"; // ✅ 必须加上 useRef
import "./App.css";

function App() {
  const navItems = ["About Me", "My Work", "Contact"];


  return (
    // scroll-container 负责捕捉翻页
    <div className="scroll-container">
      
      {/* 第一页：Hero 区域 (完全保留你的结构) */}
      <section className="hero">
        <div className="hero-logo">
          <img
            src="/logo-jing-world.png"
            alt="Jing World Logo"
            className="hero-logo-image"
          />
        </div>

        <div className="hero-left">
          <div className="hero-copy">
            <p className="hero-line hero-line-small">Keep something</p>
            <p className="hero-line hero-line-script">of myself</p>
            <p className="hero-line hero-line-small">in the quiet gaps</p>
            <p className="hero-line">of time.</p>
            <p className="hero-subtitle">
              A quiet entrance for research, writing, images, and moving thoughts.
            </p>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-video-frame">
            <video className="hero-video softened-video" autoPlay muted loop playsInline>
              <source src="/Selfie.mp4" type="video/mp4" />
            </video>
            {/* 门：之后我们再给这两个 div 加动画 */}
            <div className="video-door-left"></div>
            <div className="video-door-right"></div>
          </div>
        </div>

        <div className="hero-right">
          <nav className="hero-nav">
            {navItems.map((item) => (
              <a href="#" className="hero-nav-link" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 第二页：PPT 下一页 */}
<section className="next-page">
  <div className="content-box">
    <h2 className="section-title">Selected Work</h2>
    
    <div className="video-grid">
      {/* 视频 1 */}
      <div className="simple-video-item">
        <video autoPlay muted loop playsInline>
          <source src="/Selfie.mp4" type="video/mp4" />
        </video>
        <p>Project 01</p>
      </div>

      {/* 视频 2 */}
      <div className="simple-video-item">
        <video autoPlay muted loop playsInline>
          <source src="/Selfie.mp4" type="video/mp4" />
        </video>
        <p>Project 02</p>
      </div>

      {/* 视频 3 */}
      <div className="simple-video-item">
        <video autoPlay muted loop playsInline>
          <source src="/Selfie.mp4" type="video/mp4" />
        </video>
        <p>Project 03</p>
      </div>
    </div>
  </div>
</section>


{/* 第三页：横屏视频互动展示 */}
      <section className="next-page">
        <div className="content-box">
          <h2 className="section-title" style={{ 
            marginBottom: "40px", 
            fontSize: "2.5rem",
            color: "#8798c8",
            textAlign: "center"
          }}>
            AI-Powered Product Showcases
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              width: "90%",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {/* 视频 1 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/1.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 2 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/2.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 3 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/3.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 4 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/4.mp4" style={videoElementStyle} />
            </div>
          </div>

{/* 💡 删掉之前的 footer 标签，或者替换为这个没有任何高度占位的版本 */}
        </div>
      </section>



      {/* 第四页：内容和第三页一模一样 */}
      <section className="next-page">
        <div className="content-box">
          <h2 className="section-title" style={{ 
            marginBottom: "40px", 
            fontSize: "2.5rem",
            color: "#8798c8",
            textAlign: "center"
          }}>
            More AI Creative Works {/* 💡 换个标题区分一下 */}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              width: "90%",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {/* 视频 5 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/5.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 6 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/6.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 7 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/7.mp4" style={videoElementStyle} />
            </div>

            {/* 视频 8 */}
            <div
              className="hover-video-card"
              onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector("video");
                v.pause();
                v.currentTime = 0;
              }}
              style={videoCardStyle}
            >
              <video muted loop playsInline src="/8.mp4" style={videoElementStyle} />
            </div>
          </div>
        </div>
      </section>





    </div> // scroll-container 闭合
  );
}

// 抽离样式变量，让上面看起来更干净
const videoCardStyle = {
  width: "100%",
  aspectRatio: "16/9",
  background: "#000",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.4s ease",
  border: "2px solid transparent",
};

const videoElementStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export default App;