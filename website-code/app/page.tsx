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
    description: "海外宣发视觉设计",
  },
  {
    number: "03",
    title: "E-commerce Visuals",
    description: "京东PLUS十周年庆典",
  },
  {
    number: "04",
    title: "Project Exercises",
    description: "AIGC｜UIUX｜3D建模",
  },
];

const contacts = [
  ["Telephone", "181 7134 2115"],
  ["Email", "1012177280@qq.com"],
  ["WeChat", "Qq77155_"],
  ["Base", "上海｜北京｜深圳｜杭州｜广州"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-white">
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
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{label}</p>
      <h2 className="mt-3 text-[56px] font-bold uppercase leading-[1.15] tracking-[-0.02em]">{title}</h2>
    </div>
  );
}
