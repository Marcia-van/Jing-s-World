import React, { Suspense, useEffect, useRef, useState } from "react"; 
import { Canvas, useFrame } from '@react-three/fiber'; 
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import "./App.css";

// --- 1. 高级感头灯组件 ---
function Headlight() {
  const lightRef = useRef();
  useFrame((state) => {
    if (lightRef.current) {
      const { position } = state.camera;
      lightRef.current.position.set(position.x + 1, position.y + 1.5, position.z);
    }
  });

  return (
    <>
      <directionalLight ref={lightRef} intensity={3.2} color="#fffdfa" castShadow />
      <ambientLight intensity={0.6} color="#eef2ff" />
    </>
  );
}

// --- 2. 定义 Model ---
function Model({ url }) {
  const { scene } = useGLTF(url, 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  return <primitive object={scene} />;
}

// 预加载
useGLTF.preload('/1.glb', 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

// --- 3. 主页面组件 ---
function App() {
  const navItems = ["About Me", "My Work", "Contact"];

  // 🌟 导航组件变量
  const navigation = (
    <div className="hero-right">
      <nav className="hero-nav">
        <a href="#about-me" className="hero-nav-link">ABOUT ME</a>
        <a href="#work" className="hero-nav-link">MY WORK</a>
        <a href="#contact-page" className="hero-nav-link">CONTACT</a>
      </nav>
    </div>
  );

  return (
    <div className="scroll-container">
      
      {/* 第一页：Hero 区域 */}
      <section id="hero" className="hero"> 
        <div className="hero-logo">
          <img src="/logo-jing-world.png" alt="Jing World Logo" className="hero-logo-image" />
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
            <div className="video-door-left"></div>
            <div className="video-door-right"></div>
          </div>
        </div>

        {navigation}
      </section>

      {/* About Me 区域 */}
      <section id="about-me" className="valentin-section">
        <div className="valentin-left">
          <div className="about-header-group">
            <h1 className="valentin-logo">About Me.</h1>
            <p className="pet-description">My family members</p>
            <div className="about-pets-container">
              <div className="about-pet-image-wrapper">
                <img src="/dog.jpg" alt="My Dog" className="about-pet-image" />
              </div>
              <div className="about-pet-image-wrapper">
                <img src="/cat.jpg" alt="My Cat" className="about-pet-image" />
              </div>
            </div>
          </div>

          <div className="about-route-container" style={{ marginTop: '20px' }}>
            <div className="about-pet-image-wrapper" style={{ width: '90%', boxSizing: 'border-box' }}>
              <img src="/route.png" alt="My Route" className="about-pet-image" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="about-points">
            <h3 className="partners-title">MASTER OF ANTHROPOLOGY</h3>
            <p style={{color: '#6e5e5e'}}>Friedrich-Alexander-Universität Erlangen-Nürnberg</p>
            <div className="decor-line"></div>
          </div>
        </div>

        <div className="valentin-right-scroll">
          <div className="scroll-spotlight-text">
            <p>For me, <strong>Anthropology</strong> has never been just an academic pursuit—it is the ultimate toolkit for decoding complex social structures and cultivating <strong>consumer empathy</strong>.</p>
            <p>While some dismiss the humanities as "unprofitable," I see them as <strong>the silent engine of value</strong>. In a world obsessed with raw data, true marketing begins with <strong>understanding people</strong>, their cultures, and their untold needs.</p>
            <p>From orchestrating the <strong>Winter Olympics</strong> supply chain to shaping <strong>Universal Studios</strong> experiences, I translate these abstract cultural insights into <strong>strategic operations</strong>. Because when you truly master the <strong>"Who"</strong>, the "How" becomes instinctive.</p>
            <div style={{height: '50vh'}}></div>
          </div>
        </div>
      </section>

      {/* 第二页：Poster */}
      <section id="work" className="next-page page-2">
        <div className="content-box">
          <h2 className="section-title">AI-Generated Poster</h2>
          <div className="poster-fan-gallery">
            <div className="simple-video-item p1"><img src="/Poster01.png" alt="P1" /><p>Project 01</p></div>
            <div className="simple-video-item p2"><img src="/Poster02.png" alt="P2" /><p>Project 02</p></div>
            <div className="simple-video-item p3"><img src="/Poster03.png" alt="P3" /><p>Project 03</p></div>
            <div className="simple-video-item p4"><img src="/Poster04.png" alt="P4" /><p>Project 04</p></div>
            <div className="simple-video-item p5"><img src="/Poster05.png" alt="P5" /><p>Project 05</p></div>
          </div>
        </div>
      </section>

      {/* 第三页：Showcase 1 */}
      <section className="next-page page-3">
        <div className="content-box">
          <h2 className="section-title" style={{ marginBottom: "40px", fontSize: "2.5rem", color: "#8daee3", textAlign: "center" }}>
            AI-Powered Product Visual Concept showcase 1
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="hover-video-card" 
                   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
                   onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video"); v.pause(); v.currentTime = 0; }}
                   style={videoCardStyle}>
                <video muted loop playsInline src={`/${num}.mp4`} style={videoElementStyle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 第四页：Showcase 2 */}
      <section className="next-page page-4">
        <div className="content-box">
          <h2 className="section-title" style={{ marginBottom: "40px", fontSize: "2.5rem", color: "#86a6d9", textAlign: "center" }}>
            AI-Powered Product Visual Concept Showcase 2
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
            {[5, 6, 7, 8].map(num => (
              <div key={num} className="hover-video-card" 
                   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
                   onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video"); v.pause(); v.currentTime = 0; }}
                   style={videoCardStyle}>
                <video muted loop playsInline src={`/${num}.mp4`} style={videoElementStyle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 第五页：Music */}
      <section className="next-page page-5">
        <div className="content-box-p5">
          <h2 className="title-p5">AI-Powered Music & Video Showcase</h2>
          <div className="demo-video-container">
            <video className="product-demo-video" controls playsInline preload="auto" onEnded={(e) => { e.target.currentTime = 0.1; }}>
              <source src="/demo-vedio.mp4#t=0.1" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

{/* --- 🌟 第 7 页：3D 展示 (绝对定位解决回滚版) --- */}
<div className="p7-fixed-container">
  
  {/* 背景层已移至 CSS */}
  
  <header className="p7-mag-header">
    <h2 className="p7-mag-title">
      Interactive Showcase <span className="p7-ai-info">Powered by AI</span>
    </h2>
  </header>

  <section className="p7-glass-booth">
    <Suspense fallback={<div className="p7-loading-text">Loading...</div>}>
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.4} />
        <Headlight />
        <Center scale={1.8}> 
          <Model url="/1.glb" />
        </Center>
        <OrbitControls enableZoom={true} makeDefault />
      </Canvas>
    </Suspense>

    {/* 右下角极简图注 */}
    <div className="p7-tag-notes">
      <span className="p7-tag-item">Drag to Rotate</span>
      <div className="p7-tag-split" />
      <span className="p7-tag-item">Scroll to Zoom</span>
    </div>
  </section>

</div>

      {/* 第八页：Contact */}
      <section id="contact-page" className="p8-fixed-page" style={{height: '100vh', position: 'relative'}}>
        <div className="p8-abs-header">
          <h2 className="p8-title">Get In Touch <span className="p8-badge">Available for Work</span></h2>
        </div>
        <div className="p8-abs-panel">
          <div className="p8-grid">
            <div className="p8-item">
              <label>Email</label>
              <a href="#copy" className="p8-copy-link" onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("zhangjingmarcia123@gmail.com");
                const target = e.target;
                target.innerText = "Copied to clipboard!";
                setTimeout(() => { target.innerText = "zhangjingmarcia123@gmail.com" }, 2000);
              }}>zhangjingmarcia123@gmail.com</a>
            </div>
            <div className="p8-item">
              <label>Social</label>
              <div className="p8-links">
                <a href="https://www.linkedin.com/in/jing-zhang-43a548278/" target="_blank" rel="noopener noreferrer" className="p8-social-link">LinkedIn: Jing Zhang</a>
              </div>
            </div>
            <div className="p8-item">
              <label>Location</label>
              <span>Fürth / Remote</span>
            </div>
          </div>
        </div>
        <div className="p8-abs-footer">
          <p>© 2026 DESIGNED BY Jing</p>
        </div>
      </section>

    </div> 
  );
}

// ✅ 样式变量
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