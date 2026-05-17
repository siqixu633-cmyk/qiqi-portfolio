import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, ".preview");
const cssPath = join(root, "app", "globals.css");

const asset = (path) => encodeURI(`../${path}`);
const image = (path, alt = "", className = "") => `<img${className ? ` class="${className}"` : ""} src="${asset(path)}" alt="${alt}" />`;

const strengths = [
  ["01", "Product Thinking", "从策略与目标出发构建设计逻辑，擅长打破重建，在反复推翻中形成完整视觉体系。", "assets/about me/03-about me-card-02-detail.png"],
  ["02", "Cross-field Integration", "游戏发行 × 电商营销 × 产品视觉多场景实战，具备从创意KV到规范资产的完整链路经验。", "assets/about me/03-about me-card-03-detail.png"],
  ["03", "AIGC Workflow", "将AI工具融入工作流，提升产能并沉淀可复用模板与视觉标准。", "assets/about me/03-about me-card-04-detail.png"],
];

const projects = [
  ["01", "Brand AIGC Visuals", "AIGC视觉生产系统设计", ["AIGC-IM聊天-服装背景生成", "品牌等级视觉规范语言构建", "品牌创意物料周边延展"], "assets/project/cover/04-project-cover-Brand AIGC Visuals.png", "assets/icons/04-project- logo-Brand AIGC Visuals.png"],
  ["02", "Game Release Visuals", "海外宣发视觉设计", ["海外宣发物料输出", "品牌物料延展", "AIGC风格探索"], "assets/project/cover/04-project-cover-Game Release Visuals.png", "assets/icons/04-project-logo-Game Release Visuals.png"],
  ["03", "E-commerce Visuals", "京东PLUS十周年庆典", ["动态叙事与场景转化", "AIGC + AE协同设计", "会员权益感知强化"], "assets/project/cover/04-project-cover-E-commerce Visuals.png", "assets/icons/04-project- logo-E-commerce Visuals.png"],
  ["04", "Project Exercises", "AIGC｜UIUX｜3D建模", ["可栗口语设计改版复盘", "游戏化运营设计", "AIGC设计与3D建模"], "assets/project/cover/04-project-cover-Project Exercises.png", ""],
];

const contacts = [
  ["Telephone", "181 7134 2115", "assets/icons/icon- telephone.png", "tel:18171342115"],
  ["Email", "1012177280@qq.com", "assets/icons/icon-email.png", "mailto:1012177280@qq.com"],
  ["WeChat", "Qq77155_", "assets/icons/icon-wechat.png", "#contact"],
  ["Base", "上海｜北京｜深圳｜杭州｜广州", "assets/icons/icon- location.png", "#contact"],
];

const rawCss = await readFile(cssPath, "utf8");
const css = rawCss.replace(/^@tailwind[^;]+;\n/gm, "");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>QiQi Portfolio Static Preview</title>
  <style>${css}</style>
</head>
<body>
  <main>
    <header class="navbar" style="background-image:url('${asset("assets/background/01-navbar-bg.png")}')">
      <nav class="nav-inner" aria-label="Main navigation">
        <a class="brand" href="#home" aria-label="QiQi Portfolio home">
          ${image("assets/icons/logo-Purple.png", "")}
          <span>QIQI</span>
        </a>
        <input class="nav-toggle" id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
        <label class="hamburger" for="nav-toggle"><span></span><span></span><span></span></label>
        <div class="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
      </nav>
    </header>

    <section id="home" class="section hero-section" style="background-image:url('${asset("assets/background/02-hero-bg.png")}')">
      <div class="container hero-grid reveal">
        <div class="hero-copy">
          <p class="eyebrow">QIQI PORTFOLIO</p>
          <h1>Evolving With AI Designing Without Limits.</h1>
          <p class="hero-subtitle">Visual Designer specializing in AI-driven creativity, immersive campaigns, and next-generation digital systems.</p>
          <a class="primary-cta" href="#projects">EXPLORE</a>
        </div>
        <div class="hero-cards" aria-label="Portfolio highlights">
          <article class="hero-card hero-card-main" style="background-image:url('${asset("assets/hero/02-hero-card-01-bg.png")}')">
            <div class="hero-card-content">
              <p class="card-kicker">Hi, Welcome to</p>
              <h2>My Digital Space.</h2>
              <p>Visual Designer blending AI, branding, games, and immersive digital experiences.</p>
              <span>DIVE DEEPER</span>
            </div>
            ${image("assets/hero/02-hero-card-01-mian visual.png", "Futuristic character visual", "hero-figure")}
          </article>
          <article class="hero-card mini-card" style="background-image:url('${asset("assets/hero/02-hero-card-02-bg.png")}')"><p>Designed Outside the Lines.</p></article>
          <article class="hero-card mini-card mini-card-last" style="background-image:url('${asset("assets/hero/02-hero-card-03-bg.png")}')"><p>Unlimited Possibilities Is More Than a Concept.</p></article>
        </div>
      </div>
    </section>

    <section id="about" class="section about-section" style="background-image:url('${asset("assets/background/03-about me-bg.png")}')">
      <div class="container reveal">
        <div class="section-heading"><p>About Me</p><h2>Visual Designer × AIGC Explorer</h2></div>
        <div class="about-grid">
          <article class="about-profile-card" style="background-image:url('${asset("assets/background/03-about me-card-01-bg.png")}')">
            <div class="avatar-shell">
              ${image("assets/avatar/03-about me-card-01-avatar-default.png", "QiQi portrait default", "avatar-default")}
              ${image("assets/avatar/03-about me-card-01-avatar-hover.png", "QiQi portrait hover", "avatar-hover")}
            </div>
            <div class="profile-copy">
              <p class="eyebrow">Visual Communication Design</p>
              <h3>QiQi</h3>
              <p>就读于湖北工业大学视觉传达设计专业，拥有腾讯游戏、京东与一点资讯等跨领域实习经历，参与游戏宣发、电商运营、品牌视觉等项目。</p>
              <div class="tag-row"><span>27届 · 20岁</span><span>多领域实战</span><span>AIGC 5＋</span></div>
            </div>
          </article>
          <div class="strength-grid">
            ${strengths.map(([number, title, text, path]) => `<article class="strength-card">${image(path)}<div><span>${number}</span><h3>${title}</h3><p>${text}</p></div></article>`).join("\n")}
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects-section" style="background-image:url('${asset("assets/background/04-project-bg.png")}')">
      <div class="container reveal">
        <div class="section-heading section-heading-center"><p>Projects</p><h2>Selected Works</h2></div>
        <div class="projects-grid">
          ${projects.map(([number, title, background, roles, cover, logo]) => `<article class="project-card"><div class="project-image-wrap">${image(cover, `${title} cover`)}${logo ? image(logo, `${title} logo`, "project-logo") : ""}</div><div class="project-copy"><span class="project-number">${number}</span><h3>${title}</h3><p>${background}</p><ul>${roles.map((role) => `<li>${role}</li>`).join("")}</ul></div></article>`).join("\n")}
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section" style="background-image:url('${asset("assets/background/05-contact-footer-bg.png")}')">
      <div class="container contact-layout reveal">
        <div class="contact-copy">
          ${image("assets/icons/logo- white.png", "QiQi logo", "footer-logo")}
          <p class="eyebrow">Contact & Footer</p>
          <h2>Let’s Create Future-facing Visual Experiences.</h2>
          <p>感谢访问我的个人网站，欢迎交流设计、AIGC、产品体验方向内容，期待与您合作！</p>
        </div>
        <div class="contact-panel">
          ${contacts.map(([label, value, icon, href]) => `<a class="contact-item" href="${href}">${image(icon)}<span>${label}</span><strong>${value}</strong></a>`).join("\n")}
          <div class="qr-card">${image("content/WeChat QR code.png", "WeChat QR code")}<p>Scan to connect on WeChat</p></div>
        </div>
      </div>
      <footer class="site-footer container"><span>© 2026 QiQi. All Rights Reserved.</span><span>Designed with Figma & Code</span></footer>
    </section>
  </main>
</body>
</html>`;

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), html);
console.log("Static preview generated at .preview/index.html");
console.log("Run: python3 -m http.server 4173 --bind 127.0.0.1");
console.log("Open: http://127.0.0.1:4173/.preview/index.html");
