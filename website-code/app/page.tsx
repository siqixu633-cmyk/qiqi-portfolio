import Image, { type StaticImageData } from "next/image";

import navBg from "../../assets/background/01-navbar-bg.png";
import heroBg from "../../assets/background/02-hero-bg.png";
import heroCardOneDefault from "../../figma-reference/02-hero-card-01-default.png";
import heroCardTwo from "../../figma-reference/02-hero-card-02.png";
import heroCardThree from "../../figma-reference/02-hero-card-03.png";
import aboutBg from "../../assets/background/03-about me-bg.png";
import aboutCardBg from "../../assets/background/03-about me-card-01-bg.png";
import aboutAvatar from "../../assets/avatar/03-about me-card-01-avatar-default.png";
import aboutDetailTwo from "../../assets/about me/03-about me-card-02-detail.png";
import aboutDetailThree from "../../assets/about me/03-about me-card-03-detail.png";
import aboutDetailFour from "../../assets/about me/03-about me-card-04-detail.png";
import projectBg from "../../assets/background/04-project-bg.png";
import brandCover from "../../assets/project/cover/04-project-cover-Brand AIGC Visuals.png";
import gameCover from "../../assets/project/cover/04-project-cover-Game Release Visuals.png";
import commerceCover from "../../assets/project/cover/04-project-cover-E-commerce Visuals.png";
import exercisesCover from "../../assets/project/cover/04-project-cover-Project Exercises.png";
import brandLogo from "../../assets/icons/04-project- logo-Brand AIGC Visuals.png";
import gameLogo from "../../assets/icons/04-project-logo-Game Release Visuals.png";
import commerceLogo from "../../assets/icons/04-project- logo-E-commerce Visuals.png";
import contactBg from "../../assets/background/05-contact-footer-bg.png";
import logoPurple from "../../assets/icons/logo-Purple.png";
import logoWhite from "../../assets/icons/logo- white.png";
import phoneIcon from "../../assets/icons/icon- telephone.png";
import emailIcon from "../../assets/icons/icon-email.png";
import wechatIcon from "../../assets/icons/icon-wechat.png";
import locationIcon from "../../assets/icons/icon- location.png";
import wechatQr from "../../content/WeChat QR code.png";

type Project = {
  number: string;
  title: string;
  summary: string;
  duties: string[];
  cover: StaticImageData;
  logo?: StaticImageData;
};

const navItems = ["Home", "About", "Projects", "Contact"];

const aboutCards = [
  {
    number: "01",
    title: "Product Thinking",
    text: "从策略与目标出发构建设计逻辑，擅长打破重建，在反复推翻中形成完整视觉体系。",
    image: aboutDetailTwo,
  },
  {
    number: "02",
    title: "Cross-field Integration",
    text: "游戏发行 × 电商营销 × 产品视觉多场景实战，具备从创意KV到规范资产的完整链路经验。",
    image: aboutDetailThree,
  },
  {
    number: "03",
    title: "AIGC Workflow",
    text: "将AI工具融入工作流，提升个人产能，并沉淀可复用模板与视觉标准。",
    image: aboutDetailFour,
  },
];

const projects: Project[] = [
  {
    number: "01",
    title: "Brand AIGC Visuals",
    summary: "AIGC视觉生产系统设计",
    duties: ["AIGC-IM聊天-服装背景生成", "AIGC-品牌等级视觉规范语言构建", "探索品牌创意物料周边延展"],
    cover: brandCover,
    logo: brandLogo,
const navItems = ["Home", "About", "Projects", "Contact"];

const projects = [
  {
    number: "01",
    title: "Brand AIGC Visuals",
    description: "AIGC视觉生产系统设计",
  },
  {
    number: "02",
    title: "Game Release Visuals",
    summary: "海外宣发视觉设计",
    duties: ["海外宣发物料输出", "品牌物料延展", "AIGC风格探索"],
    cover: gameCover,
    logo: gameLogo,
    description: "海外宣发视觉设计",
  },
  {
    number: "03",
    title: "E-commerce Visuals",
    summary: "京东PLUS十周年庆典",
    duties: ["动态叙事｜场景转化｜AIGC协同设计", "年度账单 AIGC+AE协同设计", "AI换肤 端侧AI体验"],
    cover: commerceCover,
    logo: commerceLogo,
    description: "京东PLUS十周年庆典",
  },
  {
    number: "04",
    title: "Project Exercises",
    summary: "AIGC｜UIUX｜3D建模",
    duties: ["可栗口语设计改版复盘", "游戏化运营设计", "AIGC设计与3D建模"],
    cover: exercisesCover,
    description: "AIGC｜UIUX｜3D建模",
  },
];

const contacts = [
  { label: "Telephone", value: "181 7134 2115", icon: phoneIcon },
  { label: "Email", value: "1012177280@qq.com", icon: emailIcon },
  { label: "WeChat", value: "Qq77155_", icon: wechatIcon },
  { label: "Base", value: "上海｜北京｜深圳｜杭州｜广州", icon: locationIcon },
  ["Telephone", "181 7134 2115"],
  ["Email", "1012177280@qq.com"],
  ["WeChat", "Qq77155_"],
  ["Base", "上海｜北京｜深圳｜杭州｜广州"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-white">
      <Navbar />
      <Hero />
      <About />
      <ProjectsDefault />
      <ContactFooter />
    </main>
  );
}

function Navbar() {
  return (
    <header
      className="fixed left-0 top-0 z-50 h-[110px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${navBg.src})` }}
    >
      <nav className="mx-auto flex h-full w-[1460px] items-center justify-between" aria-label="Main navigation">
        <a className="flex items-center gap-3" href="#home" aria-label="QiQi Portfolio Home">
          <Image src={logoPurple} alt="" className="h-[40px] w-[40px] object-contain" priority />
          <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white">QIQI</span>
        </a>
        <div className="flex items-center gap-[42px]">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item}
              href={`#${item === "Home" ? "home" : item.toLowerCase()}`}
              className="border-b border-transparent pb-2 text-[12px] font-medium uppercase leading-none tracking-[0.05em] text-white/70 hover:border-white/50 hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-[68px] w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-[12px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_30px_rgba(168,85,247,0.25)]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[1080px] overflow-hidden bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg.src})`, backgroundSize: "1920px 1080px" }}
    >
      <div className="absolute left-[230px] top-[308px] w-[640px]">
        <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-white/50">QIQI PORTFOLIO</p>
        <h1 className="mt-6 max-w-[650px] bg-gradient-to-br from-white via-[#E8D7FF] to-[#A855F7] bg-clip-text text-[76px] font-bold leading-[0.98] tracking-[-0.045em] text-transparent">
          Evolving With AI Designing Without Limits.
        </h1>
        <p className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-white/70">
          Visual Designer specializing in AI-driven creativity, immersive campaigns, and next-generation digital systems.
        </p>
        <a
          href="#projects"
          className="mt-10 inline-flex h-[68px] w-[180px] items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[#A855F7] to-[#EC4899] text-[14px] font-semibold uppercase tracking-[0.08em] shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
        >
          EXPLORE
        </a>
      </div>

      <Image
        src={heroCardOneDefault}
        alt="Hero welcome card"
        className="absolute left-[230px] top-[622px] h-[394px] w-[713px] rounded-[20px] object-contain"
        priority
      />
      <Image
        src={heroCardTwo}
        alt="Designed Outside the Lines card"
        className="absolute left-[960px] top-[681px] h-[335px] w-[358px] rounded-[20px] object-contain"
        priority
      />
      <Image
        src={heroCardThree}
        alt="Unlimited Possibilities card"
        className="absolute left-[1333px] top-[681px] h-[335px] w-[357px] rounded-[20px] object-contain"
        priority
      />
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="h-[1080px] bg-cover bg-center bg-no-repeat pt-[150px]"
      style={{ backgroundImage: `url(${aboutBg.src})` }}
    >
      <div className="mx-auto w-[1460px]">
        <SectionTitle label="About Me" title="Visual Designer × AIGC Explorer" />
        <div className="grid grid-cols-[868px_1fr] gap-8">
          <article
            className="grid h-[594px] grid-cols-[390px_1fr] overflow-hidden rounded-[20px] border border-white/10 bg-cover bg-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            style={{ backgroundImage: `url(${aboutCardBg.src})` }}
          >
            <div className="self-end">
              <Image src={aboutAvatar} alt="QiQi portrait" className="h-[520px] w-[390px] object-contain object-bottom" />
            </div>
            <div className="py-14 pr-14">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">Visual Communication Design</p>
              <h3 className="mt-3 text-[48px] font-bold leading-[1.1] tracking-[-0.03em]">QiQi</h3>
              <p className="mt-5 text-[16px] leading-[1.75] text-white/70">
                就读于湖北工业大学视觉传达设计专业，拥有腾讯游戏、京东与一点资讯等跨领域实习经历，参与过游戏宣发、电商运营、品牌视觉等项目，具备从创意构思、视觉表达、AIGC生成到设计落地的全流程能力。
              </p>
              <div className="mt-8 flex flex-wrap gap-[10px]">
                {["27届 · 20岁", "电商/游戏/产品实战", "AIGC落地项目5＋"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[#A855F7]/25 bg-[#A855F7]/10 px-[14px] py-[9px] text-[12px] leading-none text-white/80">
      <header className="fixed left-0 top-0 z-50 h-20 w-full border-b border-white/10 bg-[#0A0A0C]/90 backdrop-blur">
        <nav className="mx-auto flex h-full w-[1460px] items-center justify-between">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.18em]">
            QIQI
          </a>
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item === "Home" ? "home" : item.toLowerCase()}`}
                className="border-b border-transparent pb-2 text-xs font-medium uppercase tracking-[0.08em] text-white/70 hover:border-[#A855F7] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="h-[1080px] bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.22),transparent_34%),linear-gradient(180deg,#12121A_0%,#0A0A0C_100%)] pt-[190px]">
        <div className="mx-auto grid w-[1460px] grid-cols-[600px_1fr] items-center gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">QIQI PORTFOLIO</p>
            <h1 className="mt-6 bg-gradient-to-br from-white to-[#A855F7] bg-clip-text text-[76px] font-bold leading-[0.98] tracking-[-0.045em] text-transparent">
              Evolving With AI Designing Without Limits.
            </h1>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-white/70">
              Visual Designer specializing in AI-driven creativity, immersive campaigns, and next-generation digital systems.
            </p>
            <a href="#projects" className="mt-10 inline-flex h-[68px] min-w-[180px] items-center justify-center rounded-full bg-gradient-to-br from-[#A855F7] to-[#EC4899] px-10 text-sm font-semibold uppercase tracking-[0.08em]">
              EXPLORE
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 h-[394px] rounded-[20px] border border-white/10 bg-white/[0.04] p-12 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Hi, Welcome to</p>
              <h2 className="mt-3 max-w-[420px] text-5xl font-bold leading-tight">My Digital Space.</h2>
              <p className="mt-5 max-w-[430px] text-[15px] leading-[1.6] text-white/70">
                Visual Designer blending AI, branding, games, and immersive digital experiences.
              </p>
            </div>
            <div className="h-[335px] rounded-[20px] border border-white/10 bg-white/[0.04] p-10 shadow-2xl">
              <p className="text-[32px] font-bold leading-[1.18]">Designed Outside the Lines.</p>
            </div>
            <div className="h-[335px] rounded-[20px] border border-white/10 bg-white/[0.04] p-10 text-right shadow-2xl">
              <p className="text-[32px] font-bold leading-[1.18]">Unlimited Possibilities Is More Than a Concept.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="h-[1080px] bg-[#12121A] pt-[150px]">
        <div className="mx-auto w-[1460px]">
          <SectionTitle label="About Me" title="Visual Designer × AIGC Explorer" />
          <div className="grid grid-cols-[868px_1fr] gap-8">
            <article className="h-[594px] rounded-[20px] border border-white/10 bg-white/[0.04] p-14 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Visual Communication Design</p>
              <h3 className="mt-3 text-5xl font-bold">QiQi</h3>
              <p className="mt-5 max-w-[680px] text-base leading-[1.75] text-white/70">
                就读于湖北工业大学视觉传达设计专业，拥有腾讯游戏、京东与一点资讯等跨领域实习经历，参与过游戏宣发、电商运营、品牌视觉等项目，具备从创意构思、视觉表达、AIGC生成到设计落地的全流程能力。
              </p>
              <div className="mt-8 flex gap-3">
                {['27届 · 20岁', '电商/游戏/产品实战', 'AIGC落地项目5＋'].map((tag) => (
                  <span key={tag} className="rounded-full border border-[#A855F7]/30 bg-[#A855F7]/10 px-4 py-2 text-xs text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <div className="grid gap-4">
            {aboutCards.map((card) => (
              <article key={card.number} className="grid h-[186px] grid-cols-[132px_1fr] items-center gap-[22px] rounded-[20px] border border-white/10 bg-white/[0.035] p-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <Image src={card.image} alt="" className="w-[132px] object-contain" />
                <div>
                  <span className="text-[14px] tracking-[0.05em] text-white/35">{card.number}</span>
                  <h3 className="mt-2 text-[24px] font-semibold leading-[1.25]">{card.title}</h3>
                  <p className="mt-[10px] text-[13px] leading-[1.65] text-white/70">{card.text}</p>
                </div>
            </article>
            <div className="grid gap-4">
              {[
                ["01", "Product Thinking"],
                ["02", "Cross-field Integration"],
                ["03", "AIGC Workflow"],
              ].map(([number, title]) => (
                <article key={number} className="h-[186px] rounded-[20px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
                  <span className="text-sm tracking-[0.05em] text-white/35">{number}</span>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-white/70">设计策略、跨领域视觉整合与 AIGC 工作流沉淀。</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="h-[1080px] bg-[#0A0A0C] pt-[132px]">
        <div className="mx-auto w-[1460px]">
          <div className="text-center">
            <SectionTitle label="Projects" title="Selected Works" />
          </div>
          <div className="grid grid-cols-2 gap-7">
            {projects.map((project) => (
              <article key={project.number} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
                <div className="h-[260px] rounded-2xl bg-gradient-to-br from-[#252530] to-[#12121A]" />
                <span className="mt-7 block text-sm tracking-[0.05em] text-white/35">{project.number}</span>
                <h3 className="mt-3 text-[32px] font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 text-[15px] text-white/70">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsDefault() {
  return (
    <section
      id="projects"
      className="h-[1080px] bg-cover bg-center bg-no-repeat pt-[132px]"
      style={{ backgroundImage: `url(${projectBg.src})` }}
    >
      <div className="mx-auto w-[1460px]">
        <div className="text-center">
          <SectionTitle label="Projects" title="Selected Works" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          {projects.map((project) => (
            <article key={project.number} className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="relative aspect-[1169/607] overflow-hidden bg-[#1A1A24]">
                <Image src={project.cover} alt={`${project.title} cover`} className="h-full w-full object-cover" />
                {project.logo ? <Image src={project.logo} alt={`${project.title} logo`} className="absolute bottom-6 left-7 h-auto w-[178px] object-contain drop-shadow-2xl" /> : null}
              </div>
              <div className="p-[30px] pt-[26px]">
                <span className="text-[14px] tracking-[0.05em] text-white/35">{project.number}</span>
                <h3 className="mt-[10px] text-[32px] font-bold leading-[1.2] tracking-[-0.01em]">{project.title}</h3>
                <p className="mt-[10px] text-[15px] leading-[1.5] text-white/70">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.duties.map((duty) => (
                    <li key={duty} className="list-none rounded-full border border-white/10 bg-white/[0.04] px-[10px] py-[7px] text-[11px] leading-[1.2] text-white/50">
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <section
      id="contact"
      className="flex h-[1080px] flex-col bg-cover bg-center bg-no-repeat pt-[150px]"
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className="mx-auto grid w-[1460px] flex-1 grid-cols-[570px_1fr] items-center gap-[72px]">
        <div>
          <Image src={logoWhite} alt="QiQi logo" className="mb-8 h-[78px] w-[78px] object-contain" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">Contact & Footer</p>
          <h2 className="mt-[18px] text-[68px] font-bold leading-[1.06] tracking-[-0.04em]">Let&apos;s Create Future-facing Visual Experiences.</h2>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-white/70">
            感谢访问我的个人网站，欢迎交流设计、AIGC、产品体验方向内容，期待与您合作！
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[18px]">
          {contacts.map((item) => (
            <div key={item.label} className="min-h-[172px] rounded-[20px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <Image src={item.icon} alt="" className="mb-[22px] h-11 w-11 object-contain" />
              <span className="block text-[12px] font-medium uppercase tracking-[0.08em] text-white/50">{item.label}</span>
              <strong className="mt-2 block text-[18px] font-semibold leading-[1.4] text-white">{item.value}</strong>
            </div>
          ))}
          <div className="col-span-2 grid min-h-[172px] grid-cols-[150px_1fr] items-center gap-6 rounded-[20px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <Image src={wechatQr} alt="WeChat QR code" className="h-[150px] w-[150px] rounded-2xl object-cover" />
            <p className="text-[18px] leading-[1.5] text-white/70">Scan to connect on WeChat</p>
          </div>
        </div>
      </div>
      <footer className="mx-auto flex min-h-[86px] w-[1460px] items-center justify-between border-t border-white/[0.06] text-[12px] tracking-[0.04em] text-white/50">
        <span>© 2026 QiQi. All Rights Reserved.</span>
        <span>Designed with Figma & Code</span>
      </footer>
    </section>
      </section>

      <section id="contact" className="flex h-[1080px] flex-col bg-[#12121A] pt-[150px]">
        <div className="mx-auto grid w-[1460px] flex-1 grid-cols-[570px_1fr] items-center gap-[72px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact & Footer</p>
            <h2 className="mt-5 text-[68px] font-bold leading-[1.06] tracking-[-0.04em]">Let&apos;s Create Future-facing Visual Experiences.</h2>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-white/70">
              感谢访问我的个人网站，欢迎交流设计、AIGC、产品体验方向内容，期待与您合作！
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[18px]">
            {contacts.map(([label, value]) => (
              <div key={label} className="min-h-[172px] rounded-[20px] border border-white/10 bg-white/[0.04] p-7 shadow-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-white/50">{label}</span>
                <strong className="mt-3 block text-lg font-semibold text-white">{value}</strong>
              </div>
            ))}
          </div>
        </div>
        <footer className="mx-auto flex min-h-[86px] w-[1460px] items-center justify-between border-t border-white/[0.06] text-xs tracking-[0.04em] text-white/50">
          <span>© 2026 QiQi. All Rights Reserved.</span>
          <span>Designed with Figma & Code</span>
        </footer>
      </section>
    </main>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-white/50">{label}</p>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{label}</p>
      <h2 className="mt-3 text-[56px] font-bold uppercase leading-[1.15] tracking-[-0.02em]">{title}</h2>
    </div>
  );
}
