import React, { Suspense, useEffect, useRef } from "react"; 
// 🌟 核心：增加了 useFrame，这是实现“光随屏转”的灵魂
import { Canvas, useFrame } from '@react-three/fiber'; 
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import "./App.css";

// --- 1. 新增：头灯组件 (实现你要求的：光线永远从你视角上方打下去) ---
function Headlight() {
  const lightRef = useRef();
  
  // 每一帧都强制让灯光跟着相机（也就是你的眼睛）走
  useFrame((state) => {
    if (lightRef.current) {
      // 1. 让灯光位置同步相机位置
      lightRef.current.position.copy(state.camera.position);
      // 2. 向上偏移（实现你说的头顶上方 20cm 打光的感觉）
      lightRef.current.position.y += 2; 
      // 3. 向前偏移，确保光是从“屏幕外”打向模型
      lightRef.current.position.z += 1;
    }
  });

  return <directionalLight ref={lightRef} intensity={2.5} color="#ffffff" />;
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





      {/* 首页按钮🌟 传送门按钮：直达 Page 6 */}
<button 
  onClick={() => {
    // 逻辑：找到 Page 6 所在的 section 并滚动到它
    const page6 = document.querySelector('.page-6');
    page6?.scrollIntoView({ behavior: 'smooth' });
  }}
  style={{
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 9999, // 确保它在所有层级之上
    background: 'rgba(255, 255, 255, 0.1)', // 半透明白
    color: '#8eafd6',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '12px',
    backdropFilter: 'blur(5px)', // 高斯模糊，显高级
    transition: 'all 0.3s ease',
    outline: 'none'
  }}
  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
>
  GO TO 3D →
</button>





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
            color: "#95b8f0",
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
            color: "#95b8f0",
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
          
          <p className="video-description">
            Experience the future of creativity where AI orchestrates both sound and vision.
          </p>
        </div>
      </section>



<section
  className="next-page page-6"
  style={{ 
    height: "100vh", 
    width: "100%", 
    background: "radial-gradient(circle at center, #7181a7 0%, #e0ecfa 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden"
  }}
>
  <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
<Canvas 
  // 🌟 1. 放大模型：把相机拉近（fov 从 45 改成 20），模型就会在视觉上变大很多
  camera={{ position: [0, 0, 10], fov: 25 }} 
  style={{ width: "100%", height: "100%" }}
  gl={{ antialias: true }}
>
  {/* 🌟 2. 环境光再次压低 (0.5 -> 0.3)：环境光越低，模型的转折处阴影越自然 */}
  <ambientLight intensity={0.3} />

  {/* 🌟 3. 头灯：光线随屏走，保持亮面 */}
  <Headlight />

  {/* 🌟 4. 侧向主灯：稍微偏移，制造侧面阴影 */}
  <directionalLight position={[10, 10, 5]} intensity={1.5} />

  {/* 🌟 5. 放大核心：给 Center 加一个 scale (缩放) */}
  <Center scale={1.8}> 
    <Model url="/1.glb" />
  </Center>
  
  <OrbitControls enableZoom={true} enablePan={true} makeDefault />
</Canvas>
  </Suspense>
</section>

      



      


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