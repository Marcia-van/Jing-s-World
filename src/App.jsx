import React, { Suspense, useEffect, useRef, useState } from "react"; 
import { Canvas, useFrame } from '@react-three/fiber'; 
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import "./App.css";

// --- 1. 高级感头灯组件：光随屏转，勾勒模型边缘 ---
function Headlight() {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      const { position } = state.camera;
      // 将灯光设在相机略微偏右、偏上的位置，模拟摄影棚斜上方主光 
      lightRef.current.position.set(position.x + 1, position.y + 1.5, position.z);
    }
  });

  

  return (
    <>
      {/* 主方向光：高亮度金色调，突出质感  */}
      <directionalLight ref={lightRef} intensity={3.2} color="#fffdfa" castShadow />
      {/* 基础环境光：微弱冷调，消除死黑  */}
      <ambientLight intensity={0.6} color="#eef2ff" />
    </>
  );
}

// --- 2. 定义 Model (保持你的原始结构和 Draco 地址) ---
function Model({ url }) {
  const { scene } = useGLTF(url, 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  return <primitive object={scene} />;
}



// --- 3. 预加载 (保持你的原始路径) ---
useGLTF.preload('/1.glb', 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/');



// --- 3. 主页面组件 ---
function App() {
  const navItems = ["About Me", "My Work", "Contact"];


<div className="hero-right">
  <nav className="hero-nav">
    {/* 跳转到第一页 */}
    <a href="#page-1" className="hero-nav-link">
      HOME
    </a>

    {/* 跳转到第二页 */}
    <a href="#page-2" className="hero-nav-link">
      MY WORK
    </a>

    {/* 🌟 核心：无论中间加多少页，这个始终指向 contact-page */}
    <a href="#contact-page" className="hero-nav-link">
      CONTACT
    </a>
  </nav>
</div>


  return (
    // scroll-container 负责捕捉翻页
    <div className="scroll-container">
      
      
{/* 第一页：Hero 区域 (完全保留你的结构，仅添加 id 用于导航跳转) */}
      <section id="hero" className="hero"> 
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



{/* About Me部分*/}
<section className="valentin-section">
  {/* 左边：固定信息 */}
  <div className="valentin-left">
    <h1 className="valentin-logo">About Me.</h1>

    {/* 🌟 核心修改：在标题下方加入猫狗照片区域 */}
    <div className="about-pets-container">
      <img src="/dog.png" alt="My Dog" className="about-pet-image" />
      <img src="/cat.png" alt="My Cat" className="about-pet-image" />
    </div>

    <div className="about-points">
      {/* 🌟 放置你的核心要点信息 */}
      <h3 className="partners-title">ANTHROPOLOGY GRADUATE</h3>
      <p style={{color: '#6e5e5e'}}>FAU Erlangen-Nürnberg</p>
      <div className="decor-line"></div>
    </div>
  </div>

  {/* 右边：沉浸式滚动阅读 */}
  <div className="valentin-right-scroll">
    <div className="scroll-spotlight-text">
      <span className="text-intro-label">(Intro)</span>
      <p>
        By bridging anthropology and digital operations, I’ve had the unique opportunity 
        to coordinate bilingual narratives...
      </p>
      
      <span className="text-intro-label">(Experience)</span>
      <p>
        Managed support for Winter Olympics supply chain projects and 
        Universal Studios Beijing-related projects.
      </p>
      
      <span className="text-intro-label">(Goal)</span>
      <p>
        My aim is to merge data-driven insights with human-centered communication.
      </p>
      
      {/* 🌟 多加几个空行，确保最后一段文字也能滚动到聚光灯位置 */}
      <div style={{height: '30vh'}}></div>
    </div>
  </div>
</section>






{/* 第二页：PPT 下一页 */}
<section id="work" className="next-page page-2">
  <div className="content-box">
    <h2 className="section-title">AI-Generated Poster</h2>
    
    {/* 替换掉原本的 .video-grid，改用新的海报画廊容器 */}
    <div className="poster-fan-gallery">
      {/* 每一张海报都是一个 simple-video-item */}
      
      {/* 海报 1 */}
      <div className="simple-video-item p1">
        <img src="/Poster01.png" alt="Project 01 Poster" />
        <p>Project 01</p>
      </div>

      {/* 海报 2 */}
      <div className="simple-video-item p2">
        <img src="/Poster02.png" alt="Project 02 Poster" />
        <p>Project 02</p>
      </div>

      {/* 海报 3 */}
      <div className="simple-video-item p3">
        <img src="/Poster03.png" alt="Project 03 Poster" />
        <p>Project 03</p>
      </div>

      {/* 海报 4 */}
      <div className="simple-video-item p4">
        <img src="/Poster04.png" alt="Project 04 Poster" />
        <p>Project 04</p>
      </div>

      {/* 海报 5 */}
      <div className="simple-video-item p5">
        <img src="/Poster05.png" alt="Project 05 Poster" />
        <p>Project 05</p>
      </div>
    </div>
  </div>
</section>


{/* 第三页：横屏视频互动展示 */}
      <section className="next-page page-3">
        <div className="content-box">
          <h2 className="section-title" style={{ 
            marginBottom: "40px", 
            fontSize: "2.5rem",
            color: "#8daee3",
            textAlign: "center"
          }}>
            AI-Powered Product Visual Concept showcase 1
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
      <section className="next-page page-4">
        <div className="content-box">
          <h2 className="section-title" style={{ 
            marginBottom: "40px", 
            fontSize: "2.5rem",
            color: "#86a6d9",
            textAlign: "center"
          }}>
            AI-Powered Product Visual Concept Showcase 2 {/* 💡 换个标题区分一下 */}
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


{/* 第五页：AI 音乐与视频产品呈现 */}
      <section className="next-page page-5">
        <div className="content-box-p5">
          <h2 className="title-p5">
            AI-Powered Music & Video Showcase
          </h2>

          <div className="demo-video-container">
            <video 
              className="product-demo-video" 
              controls 
              playsInline 
              preload="auto"
              onEnded={(e) => { e.target.currentTime = 0.1; }}
            >
              <source src="/demo-vedio.mp4#t=0.1" type="video/mp4" />
              您的浏览器不支持视频播放。
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


{/* --- 🌟 第 8 页：Contact (绝对锁定版) --- */}
<div className="p8-fixed-page">
  
  {/* 1. 标题：绝对定位在左上 */}
  <div className="p8-abs-header">
    <h2 className="p8-title">
      Get In Touch <span className="p8-badge">Available for Work</span>
    </h2>
  </div>

  {/* 2. 信息面板：绝对定位在中央 */}
  <div className="p8-abs-panel">
    <div className="p8-grid">
<div className="p8-item">
  <label>Email</label>
  <a 
    href="#copy" 
    className="p8-copy-link"
    onClick={(e) => {
      e.preventDefault();
      navigator.clipboard.writeText("zhangjingmarcia123@gmail.com");
      e.target.innerText = "Copied to clipboard!";
      setTimeout(() => { e.target.innerText = "zhangjingmarcia123@gmail.com" }, 2000);
    }}
  >
    zhangjingmarcia123@gmail.com
  </a>
</div>
<div className="p8-item">
  <label>Social</label>
  <div className="p8-links">
    <a 
      href="https://www.linkedin.com/in/jing-zhang-43a548278/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p8-social-link"
    >
      LinkedIn: Jing Zhang
    </a>
  </div>
</div>
      <div className="p8-item">
        <label>Location</label>
        <span>Fürth / Remote</span>
      </div>
    </div>
  </div>

  {/* 3. 署名：绝对定位在底部 */}
  <div className="p8-abs-footer">
    <p>© 2026 DESIGNED BY Jing</p>
  </div>
</div>



      


    </div> // scroll-container 闭合
  );
}

// ✅ 样式变量定义在组件外部，确保打包时能被正确引用
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