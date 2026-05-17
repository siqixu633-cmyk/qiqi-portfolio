---
version: alpha
name: qiqi-portfolio-design
site_name: 7 Portfolio
description: 高级极简暗色主题个人作品集网站。深紫黑色画布搭配紫粉渐变强调色，大量留白与精致卡片构成视觉层次。SF Pro 与 PingFang SC 双字体系统，20px 主圆角配合 999px 胶囊按钮，轻微柔和阴影营造空间感。

colors:
  # 背景色 - 深紫黑基调
  bg-void: "#0A0A0C"              # 最深背景（页面底层）
  bg-primary: "#12121A"           # 主背景色
  bg-secondary: "#1A1A24"         # 次级背景、卡片底色
  bg-tertiary: "#252530"          # 三级背景、悬浮层
  bg-card: "rgba(255,255,255,0.03)"     # 卡片背景（微透明）
  bg-card-hover: "rgba(255,255,255,0.06)"  # 卡片悬浮背景
  bg-glass: "rgba(26,26,36,0.80)"       # 毛玻璃背景
  bg-card-highlight: "rgba(168,85,247,0.08)"  # 强调卡片背景（带紫色调）
  
  # 强调色 - 紫粉渐变系统
  accent-purple: "#A855F7"        # 主强调色（紫色）
  accent-pink: "#EC4899"          # 次强调色（粉紫）
  accent-violet: "#8B5CF6"        # 紫罗兰色
  accent-gradient-start: "#A855F7"
  accent-gradient-end: "#EC4899"
  accent-glow: "rgba(168,85,247,0.40)"  # 发光效果
  accent-subtle: "rgba(168,85,247,0.15)" # 微强调背景
  
  # 文字色
  text-primary: "#FFFFFF"                           # 主要文字
  text-secondary: "rgba(255,255,255,0.70)"          # 次要文字（正文）
  text-tertiary: "rgba(255,255,255,0.50)"           # 辅助文字
  text-muted: "rgba(255,255,255,0.35)"              # 占位符、说明
  text-on-accent: "#FFFFFF"                         # 强调色上的文字
  
  # 边框与分割线
  border-subtle: "rgba(255,255,255,0.08)"
  border-default: "rgba(255,255,255,0.12)"
  border-accent: "rgba(168,85,247,0.30)"
  border-glow: "rgba(168,85,247,0.50)"
  divider: "rgba(255,255,255,0.06)"
  
  # 特殊状态
  surface-tag-purple: "rgba(168,85,247,0.20)"
  surface-tag-pink: "rgba(236,72,153,0.20)"

typography:
  # 字体族
  font-display-en: "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif"
  font-body-en: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
  font-display-zh: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
  font-stack: "SF Pro Display, SF Pro Text, PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif"
  
  # Hero 大标题
  hero-title:
    fontFamily: "{typography.font-display-en}"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    gradient: "linear-gradient(135deg, {colors.text-primary} 0%, {colors.accent-purple} 100%)"
  
  # 章节标题（英文）
  section-title:
    fontFamily: "{typography.font-display-en}"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    textTransform: "uppercase"
  
  # 章节标题（中文）
  section-title-zh:
    fontFamily: "{typography.font-display-zh}"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  
  # 卡片标题
  card-title:
    fontFamily: "{typography.font-display-en}"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  
  # 卡片副标题
  card-subtitle:
    fontFamily: "{typography.font-body-en}"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    color: "{colors.text-secondary}"
  
  # 正文大
  body-large:
    fontFamily: "{typography.font-stack}"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    color: "{colors.text-secondary}"
  
  # 正文标准
  body:
    fontFamily: "{typography.font-stack}"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    color: "{colors.text-secondary}"
  
  # 正文小
  body-small:
    fontFamily: "{typography.font-stack}"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    color: "{colors.text-tertiary}"
  
  # 标签/徽章
  caption:
    fontFamily: "{typography.font-stack}"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  
  # 导航链接
  nav-link:
    fontFamily: "{typography.font-display-en}"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  
  # 按钮文字
  button:
    fontFamily: "{typography.font-display-en}"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  
  # 项目编号
  project-number:
    fontFamily: "{typography.font-display-en}"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
    color: "{colors.text-muted}"
  
  # 项目标题
  project-title:
    fontFamily: "{typography.font-display-en}"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"

spacing:
  # 基础单位 8px
  base: "8px"
  
  # 间距 Token
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  xxl: "32px"
  xxxl: "40px"
  section-sm: "48px"
  section-md: "64px"
  section-lg: "80px"
  section-xl: "120px"

rounded:
  # 圆角系统
  none: "0px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"                    # 主圆角（规范要求）
  xl: "24px"
  pill: "999px"                 # 按钮圆角（规范要求）
  full: "50%"

shadows:
  # 阴影系统 - 轻微柔和
  none: "none"
  
  sm: "0 2px 8px rgba(0,0,0,0.20)"
  
  md: "0 4px 20px rgba(0,0,0,0.25)"
  
  lg: "0 8px 30px rgba(0,0,0,0.30)"
  
  accent: "0 4px 20px rgba(168,85,247,0.15)"
  
  accent-lg: "0 8px 30px rgba(168,85,247,0.25)"
  
  inner: "inset 0 2px 4px rgba(0,0,0,0.10)"
  
  card: "0 4px 20px rgba(0,0,0,0.20), 0 0 0 1px rgba(255,255,255,0.05)"
  
  card-hover: "0 8px 30px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.08)"

components:
  # 导航栏
  navbar:
    backgroundColor: "transparent"
    height: "80px"
    padding: "0 40px"
    position: "fixed"
    top: 0
    left: 0
    right: 0
    zIndex: 100
  
  navbar-logo:
    display: "flex"
    alignItems: "center"
    gap: "{spacing.xs}"
  
  navbar-logo-icon:
    width: "24px"
    height: "24px"
    background: "linear-gradient(135deg, {colors.accent-purple} 0%, {colors.accent-pink} 100%)"
    borderRadius: "{rounded.sm}"
    display: "flex"
    alignItems: "center"
    justifyContent: "center"
    fontFamily: "{typography.font-display-en}"
    fontSize: "14px"
    fontWeight: 700
    color: "{colors.text-on-accent}"
  
  navbar-logo-text:
    fontFamily: "{typography.font-display-en}"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.1em"
    color: "{colors.text-primary}"
    textTransform: "uppercase"
  
  navbar-links:
    display: "flex"
    gap: "{spacing.xl}"
  
  navbar-link:
    fontFamily: "{typography.nav-link.fontFamily}"
    fontSize: "{typography.nav-link.fontSize}"
    fontWeight: "{typography.nav-link.fontWeight}"
    letterSpacing: "{typography.nav-link.letterSpacing}"
    color: "{colors.text-secondary}"
    textTransform: "{typography.nav-link.textTransform}"
    transition: "color 0.2s ease"
  
  navbar-link-hover:
    color: "{colors.text-primary}"
  
  navbar-cta:
    background: "linear-gradient(135deg, {colors.accent-purple} 0%, {colors.accent-pink} 100%)"
    color: "{colors.text-on-accent}"
    padding: "10px 20px"
    borderRadius: "{rounded.pill}"
    fontFamily: "{typography.button.fontFamily}"
    fontSize: "{typography.button.fontSize}"
    fontWeight: "{typography.button.fontWeight}"
    letterSpacing: "{typography.button.letterSpacing}"
    textTransform: "{typography.button.textTransform}"
    border: "none"
    cursor: "pointer"
    transition: "all 0.2s ease"
  
  navbar-cta-hover:
    transform: "translateY(-1px)"
    boxShadow: "{shadows.accent}"
  
  # Hero 区域
  hero-section:
    minHeight: "100vh"
    background: "{colors.bg-void}"
    paddingTop: "{spacing.section-xl}"
    paddingBottom: "{spacing.section-lg}"
    display: "flex"
    flexDirection: "column"
    alignItems: "center"
    textAlign: "center"
  
  hero-title:
    fontFamily: "{typography.hero-title.fontFamily}"
    fontSize: "{typography.hero-title.fontSize}"
    fontWeight: "{typography.hero-title.fontWeight}"
    lineHeight: "{typography.hero-title.lineHeight}"
    letterSpacing: "{typography.hero-title.letterSpacing}"
    background: "{typography.hero-title.gradient}"
    backgroundClip: "text"
    textFillColor: "transparent"
    maxWidth: "800px"
    marginBottom: "{spacing.md}"
  
  hero-subtitle:
    fontFamily: "{typography.body-large.fontFamily}"
    fontSize: "{typography.body-large.fontSize}"
    fontWeight: "{typography.body-large.fontWeight}"
    lineHeight: "{typography.body-large.lineHeight}"
    color: "{colors.text-secondary}"
    maxWidth: "600px"
    marginBottom: "{spacing.xl}"
  
  hero-cta:
    background: "linear-gradient(135deg, {colors.accent-purple} 0%, {colors.accent-pink} 100%)"
    color: "{colors.text-on-accent}"
    padding: "14px 32px"
    borderRadius: "{rounded.pill}"
    fontFamily: "{typography.button.fontFamily}"
    fontSize: "{typography.button.fontSize}"
    fontWeight: "{typography.button.fontWeight}"
    letterSpacing: "{typography.button.letterSpacing}"
    textTransform: "{typography.button.textTransform}"
    border: "none"
    cursor: "pointer"
    transition: "all 0.2s ease"
  
  hero-cta-hover:
    transform: "translateY(-2px)"
    boxShadow: "{shadows.accent-lg}"
  
  # 卡片系统
  card:
    background: "{colors.bg-card}"
    border: "1px solid {colors.border-subtle}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
  
  card-hover:
    background: "{colors.bg-card-hover}"
    borderColor: "{colors.border-default}"
    transform: "translateY(-4px)"
    boxShadow: "{shadows.card-hover}"
  
  card-welcome:
    background: "linear-gradient(135deg, rgba(168,85,247,0.10) 0%, rgba(236,72,153,0.05) 100%)"
    border: "1px solid {colors.border-accent}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    display: "flex"
    gap: "{spacing.lg}"
    overflow: "hidden"
  
  card-feature:
    background: "{colors.bg-card}"
    border: "1px solid {colors.border-subtle}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    display: "flex"
    flexDirection: "column"
    alignItems: "center"
    textAlign: "center"
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
  
  card-feature-hover:
    background: "{colors.bg-card-hover}"
    borderColor: "{colors.border-accent}"
    transform: "translateY(-4px)"
  
  card-feature-icon:
    width: "48px"
    height: "48px"
    marginBottom: "{spacing.md}"
    color: "{colors.accent-purple}"
  
  # About Me 卡片
  about-card:
    background: "{colors.bg-card}"
    border: "1px solid {colors.border-subtle}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.xl}"
    display: "flex"
    gap: "{spacing.xl}"
  
  about-avatar:
    width: "120px"
    height: "120px"
    borderRadius: "{rounded.md}"
    objectFit: "cover"
    border: "2px solid {colors.border-accent}"
  
  about-content:
    flex: 1
  
  about-name:
    fontFamily: "{typography.font-display-zh}"
    fontSize: "24px"
    fontWeight: 600
    color: "{colors.text-primary}"
    marginBottom: "{spacing.xs}"
  
  about-name-en:
    fontFamily: "{typography.font-display-en}"
    fontSize: "14px"
    fontWeight: 500
    color: "{colors.text-tertiary}"
    letterSpacing: "0.1em"
    textTransform: "uppercase"
    marginBottom: "{spacing.md}"
  
  about-bio:
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "{typography.body.fontSize}"
    lineHeight: "{typography.body.lineHeight}"
    color: "{colors.text-secondary}"
    marginBottom: "{spacing.md}"
  
  about-tags:
    display: "flex"
    gap: "{spacing.sm}"
    flexWrap: "wrap"
  
  about-tag:
    background: "{colors.surface-tag-purple}"
    color: "{colors.accent-purple}"
    padding: "6px 12px"
    borderRadius: "{rounded.pill}"
    fontFamily: "{typography.caption.fontFamily}"
    fontSize: "{typography.caption.fontSize}"
    fontWeight: "{typography.caption.fontWeight}"
    border: "1px solid {colors.border-accent}"
  
  about-tag-alt:
    background: "{colors.surface-tag-pink}"
    color: "{colors.accent-pink}"
  
  # 工作经历卡片
  experience-card:
    background: "{colors.bg-card}"
    border: "1px solid {colors.border-subtle}"
    borderRadius: "{rounded.lg}"
    padding: "{spacing.lg}"
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
  
  experience-card-hover:
    background: "{colors.bg-card-hover}"
    borderColor: "{colors.border-default}"
  
  experience-logo:
    height: "24px"
    marginBottom: "{spacing.sm}"
    objectFit: "contain"
  
  experience-company:
    fontFamily: "{typography.font-display-zh}"
    fontSize: "16px"
    fontWeight: 600
    color: "{colors.text-primary}"
    marginBottom: "{spacing.xs}"
  
  experience-role:
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "13px"
    color: "{colors.text-secondary}"
    marginBottom: "{spacing.sm}"
  
  experience-date:
    fontFamily: "{typography.caption.fontFamily}"
    fontSize: "{typography.caption.fontSize}"
    color: "{colors.text-muted}"
  
  # 项目列表项
  project-item:
    display: "flex"
    alignItems: "center"
    gap: "{spacing.xl}"
    padding: "{spacing.xl} 0"
    borderBottom: "1px solid {colors.divider}"
    cursor: "pointer"
    transition: "all 0.3s ease"
  
  project-item-hover:
    paddingLeft: "{spacing.md}"
  
  project-number:
    fontFamily: "{typography.project-number.fontFamily}"
    fontSize: "{typography.project-number.fontSize}"
    color: "{typography.project-number.color}"
    minWidth: "40px"
  
  project-title:
    fontFamily: "{typography.project-title.fontFamily}"
    fontSize: "{typography.project-title.fontSize}"
    fontWeight: "{typography.project-title.fontWeight}"
    color: "{colors.text-primary}"
    flex: 1
  
  project-icon:
    width: "24px"
    height: "24px"
    color: "{colors.text-secondary}"
  
  project-arrow:
    width: "24px"
    height: "24px"
    color: "{colors.text-muted}"
    transition: "transform 0.3s ease"
  
  project-item-hover-arrow:
    transform: "translateX(4px)"
    color: "{colors.accent-purple}"
  
  # Contact 区域
  contact-section:
    background: "{colors.bg-primary}"
    padding: "{spacing.section-lg} 0"
    position: "relative"
    overflow: "hidden"
  
  contact-title:
    fontFamily: "{typography.section-title.fontFamily}"
    fontSize: "40px"
    fontWeight: "{typography.section-title.fontWeight}"
    lineHeight: "{typography.section-title.lineHeight}"
    color: "{colors.text-primary}"
    maxWidth: "500px"
    marginBottom: "{spacing.lg}"
  
  contact-subtitle:
    fontFamily: "{typography.body-large.fontFamily}"
    fontSize: "{typography.body-large.fontSize}"
    lineHeight: "{typography.body-large.lineHeight}"
    color: "{colors.text-secondary}"
    maxWidth: "400px"
    marginBottom: "{spacing.xl}"
  
  contact-info:
    display: "flex"
    gap: "{spacing.xl}"
    flexWrap: "wrap"
  
  contact-item:
    display: "flex"
    alignItems: "center"
    gap: "{spacing.sm}"
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "{typography.body.fontSize}"
    color: "{colors.text-tertiary}"
  
  contact-cta:
    background: "linear-gradient(135deg, {colors.accent-purple} 0%, {colors.accent-pink} 100%)"
    color: "{colors.text-on-accent}"
    padding: "12px 28px"
    borderRadius: "{rounded.pill}"
    fontFamily: "{typography.button.fontFamily}"
    fontSize: "{typography.button.fontSize}"
    fontWeight: "{typography.button.fontWeight}"
    display: "flex"
    alignItems: "center"
    gap: "{spacing.xs}"
    border: "none"
    cursor: "pointer"
    transition: "all 0.2s ease"
  
  contact-cta-hover:
    transform: "translateY(-2px)"
    boxShadow: "{shadows.accent-lg}"
  
  # Section 标签
  section-label:
    fontFamily: "{typography.section-title-zh.fontFamily}"
    fontSize: "{typography.section-title-zh.fontSize}"
    fontWeight: "{typography.section-title-zh.fontWeight}"
    letterSpacing: "{typography.section-title-zh.letterSpacing}"
    color: "{colors.text-secondary}"
    textTransform: "{typography.section-title-zh.textTransform}"
    marginBottom: "{spacing.lg}"
  
  # 装饰元素
  decorative-shape:
    position: "absolute"
    right: "10%"
    top: "50%"
    transform: "translateY(-50%)"
    width: "300px"
    height: "300px"
    pointerEvents: "none"

animation:
  # 缓动函数
  ease-smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  ease-out: "cubic-bezier(0, 0, 0.2, 1)"
  
  # 时长
  duration-fast: "0.15s"
  duration-normal: "0.3s"
  duration-slow: "0.5s"
  duration-slower: "0.8s"
  
  # 入场动画
  fade-up:
    from:
      opacity: 0
      transform: "translateY(20px)"
    to:
      opacity: 1
      transform: "translateY(0)"
    duration: "0.6s"
    easing: "{animation.ease-smooth}"
  
  fade-in:
    from:
      opacity: 0
    to:
      opacity: 1
    duration: "0.4s"
    easing: "ease-out"
  
  scale-in:
    from:
      opacity: 0
      transform: "scale(0.95)"
    to:
      opacity: 1
      transform: "scale(1)"
    duration: "0.5s"
    easing: "{animation.ease-smooth}"

layout:
  # 容器
  container:
    maxWidth: "1200px"
    margin: "0 auto"
    padding: "0 40px"
  
  container-narrow:
    maxWidth: "980px"
    margin: "0 auto"
    padding: "0 40px"
  
  # 网格
  grid-3:
    display: "grid"
    gridTemplateColumns: "repeat(3, 1fr)"
    gap: "{spacing.lg}"
  
  grid-3-responsive:
    display: "grid"
    gridTemplateColumns: "repeat(3, 1fr)"
    gap: "{spacing.lg}"
    media-tablet: "repeat(2, 1fr)"
    media-mobile: "1fr"
  
  # 弹性布局
  flex-row:
    display: "flex"
    gap: "{spacing.lg}"
  
  flex-col:
    display: "flex"
    flexDirection: "column"
    gap: "{spacing.lg}"
  
  # 响应式断点
  breakpoints:
    sm: "640px"
    md: "768px"
    lg: "1024px"
    xl: "1280px"
    xxl: "1536px"

---

## Overview

**7 Portfolio** 是一个高级极简风格的个人作品集网站，采用深色主题设计。设计语言以深紫黑色为画布，紫粉渐变为强调色，营造出科技感与艺术感并存的视觉体验。

**核心特征：**
- **深色基调**：深紫黑色背景（#0A0A0C → #1A1A24）营造沉浸式氛围
- **紫粉渐变**：从紫色（#A855F7）到粉色（#EC4899）的渐变作为品牌强调色
- **极简排版**：SF Pro Display + PingFang SC 双字体系统，大量留白
- **精致卡片**：20px 圆角卡片，微透明背景，悬浮时轻微抬升
- **胶囊按钮**：999px 圆角的渐变按钮，品牌标志性交互元素
- **柔和阴影**：轻微、柔和的阴影系统，避免强烈对比

**视觉层次：**
1. Hero 区域：大标题渐变文字 + 副标题 + CTA 按钮
2. 欢迎卡片：左侧文案 + 右侧人物图像
3. 特性卡片：三列网格，图标 + 标题 + 描述
4. 关于我：头像 + 简介 + 标签
5. 工作经历：三列公司卡片
6. 项目列表：编号 + 标题 + 图标 + 箭头
7. 联系区域：标题 + 副标题 + 联系方式 + 3D 装饰

## Colors

### 品牌强调色
- **主紫色** (`{colors.accent-purple}` — #A855F7)：主要强调色，用于渐变起始、标签、图标
- **粉紫色** (`{colors.accent-pink}` — #EC4899)：渐变结束色，次要强调
- **紫罗兰** (`{colors.accent-violet}` — #8B5CF6)：辅助紫色调
- **渐变** (`linear-gradient(135deg, #A855F7 0%, #EC4899 100%)`)：CTA 按钮、装饰元素
- **发光** (`{colors.accent-glow}` — rgba(168,85,247,0.40))：按钮悬浮、焦点状态

### 背景色
- **虚空黑** (`{colors.bg-void}` — #0A0A0C)：最深背景，Hero 区域
- **主背景** (`{colors.bg-primary}` — #12121A)：页面主背景
- **次背景** (`{colors.bg-secondary}` — #1A1A24)：卡片底色、悬浮层
- **三级背景** (`{colors.bg-tertiary}` — #252530)：深层元素
- **卡片背景** (`{colors.bg-card}` — rgba(255,255,255,0.03))：微透明卡片
- **毛玻璃** (`{colors.bg-glass}` — rgba(26,26,36,0.80))：导航栏、浮动层

### 文字色
- **主要文字** (`{colors.text-primary}` — #FFFFFF)：标题、重要文字
- **次要文字** (`{colors.text-secondary}` — rgba(255,255,255,0.70))：正文、描述
- **辅助文字** (`{colors.text-tertiary}` — rgba(255,255,255,0.50))：说明、标签
- **弱化文字** (`{colors.text-muted}` — rgba(255,255,255,0.35))：占位符、时间

### 边框与分割
- **细边框** (`{colors.border-subtle}` — rgba(255,255,255,0.08))：默认边框
- **标准边框** (`{colors.border-default}` — rgba(255,255,255,0.12))：悬浮状态
- **强调边框** (`{colors.border-accent}` — rgba(168,85,247,0.30))：选中、焦点
- **分割线** (`{colors.divider}` — rgba(255,255,255,0.06))：项目列表分隔

## Typography

### 字体系统
- **英文展示**：SF Pro Display — 用于大标题、Hero 文字
- **英文正文**：SF Pro Text — 用于正文、按钮、标签
- **中文**：PingFang SC — 用于中文内容

### 字号层次

| Token | 尺寸 | 字重 | 行高 | 字间距 | 用途 |
|-------|------|------|------|--------|------|
| `{typography.hero-title}` | 48px | 700 | 1.15 | -0.02em | Hero 大标题（渐变） |
| `{typography.section-title}` | 40px | 700 | 1.2 | -0.01em | 章节标题（英文） |
| `{typography.section-title-zh}` | 18px | 500 | 1.4 | 0.1em | 章节标签（中文） |
| `{typography.project-title}` | 32px | 700 | 1.2 | -0.01em | 项目标题 |
| `{typography.card-title}` | 24px | 600 | 1.3 | -0.01em | 卡片标题 |
| `{typography.body-large}` | 17px | 400 | 1.6 | - | 大段正文 |
| `{typography.body}` | 14px | 400 | 1.6 | - | 标准正文 |
| `{typography.caption}` | 11px | 500 | 1.4 | 0.02em | 标签、徽章 |
| `{typography.nav-link}` | 12px | 500 | 1 | 0.05em | 导航链接 |
| `{typography.button}` | 14px | 500 | 1 | 0.02em | 按钮文字 |

### 排版原则
- **负字间距**：大标题使用负字间距（-0.01em 到 -0.02em）营造紧凑感
- **大写转换**：导航、按钮、标签使用大写字母 + 加宽字间距
- **渐变文字**：Hero 标题使用渐变填充（白 → 紫）
- **中英文混排**：英文使用 SF Pro，中文使用 PingFang SC

## Spacing

### 间距系统（8pt Grid）
- **基础单位**：8px
- **结构间距**：16px, 24px, 32px, 40px
- **章节间距**：48px, 64px, 80px, 120px

| Token | 值 | 用途 |
|-------|-----|------|
| `{spacing.xxs}` | 4px | 极小间距 |
| `{spacing.xs}` | 8px | 紧凑间距 |
| `{spacing.sm}` | 12px | 小组件内边距 |
| `{spacing.md}` | 16px | 标准间距 |
| `{spacing.lg}` | 20px | 卡片内边距 |
| `{spacing.xl}` | 24px | 组件间距 |
| `{spacing.xxl}` | 32px | 大组件间距 |
| `{spacing.xxxl}` | 40px | 区块内间距 |
| `{spacing.section-sm}` | 48px | 小章节间距 |
| `{spacing.section-md}` | 64px | 中章节间距 |
| `{spacing.section-lg}` | 80px | 大章节间距 |
| `{spacing.section-xl}` | 120px | 页面级间距 |

## Shapes

### 圆角系统
| Token | 值 | 用途 |
|-------|-----|------|
| `{rounded.none}` | 0px | 无圆角 |
| `{rounded.xs}` | 8px | 小组件 |
| `{rounded.sm}` | 12px | 标签、小卡片 |
| `{rounded.md}` | 16px | 中等卡片、头像 |
| `{rounded.lg}` | 20px | **主圆角**，标准卡片 |
| `{rounded.xl}` | 24px | 大卡片 |
| `{rounded.pill}` | 999px | **胶囊按钮**、徽章 |
| `{rounded.full}` | 50% | 圆形元素 |

## Elevation & Depth

### 阴影系统
**原则**：轻微、柔和，避免强烈阴影

| Token | 值 | 用途 |
|-------|-----|------|
| `{shadows.sm}` | `0 2px 8px rgba(0,0,0,0.20)` | 轻微提升 |
| `{shadows.md}` | `0 4px 20px rgba(0,0,0,0.25)` | 标准阴影 |
| `{shadows.lg}` | `0 8px 30px rgba(0,0,0,0.30)` | 大阴影 |
| `{shadows.accent}` | `0 4px 20px rgba(168,85,247,0.15)` | 紫色发光 |
| `{shadows.accent-lg}` | `0 8px 30px rgba(168,85,247,0.25)` | 强紫色发光 |
| `{shadows.card}` | 复合阴影 | 卡片默认 |
| `{shadows.card-hover}` | 复合阴影 | 卡片悬浮 |

### 深度层级
1. **Flat**：无阴影，纯背景色区分
2. **Card**：轻微阴影 + 细边框
3. **Hover**：抬升 + 阴影增强
4. **Accent Glow**：紫色发光（焦点状态）

## Components

### 导航栏 (Navbar)
- **布局**：固定顶部，透明背景
- **高度**：80px
- **内容**：Logo（7 图标 + PORTFOLIO）| 导航链接（HOME, ABOUT ME, PROJECT）| CTA 按钮（CONTACT）
- **滚动行为**：可添加毛玻璃背景（backdrop-filter: blur(20px)）

### Hero 区域
- **结构**：大标题（渐变）+ 副标题 + CTA 按钮
- **标题**：48px，白到紫渐变
- **副标题**：17px，70% 透明度白色
- **CTA**：渐变胶囊按钮（EXPLORE）

### 卡片系统

**标准卡片** (`{component.card}`)
- 背景：微透明（rgba(255,255,255,0.03)）
- 边框：1px 细边框（8% 白色）
- 圆角：20px
- 内边距：20px
- 悬浮：背景变亮 + 抬升 4px + 阴影增强

**欢迎卡片** (`{component.card-welcome}`)
- 渐变背景（紫到粉的微透明）
- 强调边框
- 左右布局：文案 + 人物图

**特性卡片** (`{component.card-feature}`)
- 三列网格
- 图标 + 标题 + 描述
- 居中对齐

**关于我卡片** (`{component.about-card}`)
- 头像（圆角 + 紫色边框）
- 姓名（中文 + 英文）
- 简介 + 标签

**工作经历卡片** (`{component.experience-card}`)
- 公司 Logo
- 公司名（中文）
- 职位
- 日期

### 项目列表
- **结构**：编号 + 标题 + 图标 + 箭头
- **分隔线**：细分割线
- **悬浮**：箭头右移 + 变紫色
- **项目**：
  01 Brand AIGC Visuals
  02 Game Release Visuals  
  03 E-commerce Visuals
  04 Project Exercises

### Contact 区域
- **标题**：大标题（Ready to Build the Future Together?）
- **副标题**：说明文字
- **联系方式**：电话、邮箱、社交账号
- **CTA**：Say Hello 按钮
- **装饰**：右侧 3D 几何图形（蓝紫渐变）

## Animation

### 缓动函数
- **Smooth**：`cubic-bezier(0.16, 1, 0.3, 1)` — 标准平滑
- **Bounce**：`cubic-bezier(0.34, 1.56, 0.64, 1)` — 轻微弹性
- **Out**：`cubic-bezier(0, 0, 0.2, 1)` — 减速

### 动画时长
- Fast：0.15s — 微交互
- Normal：0.3s — 悬停效果
- Slow：0.5s — 入场动画
- Slower：0.8s — 大元素入场

### 入场动画
- **Fade Up**：从下方 20px 渐显，0.6s，smooth
- **Fade In**：纯渐显，0.4s，ease-out
- **Scale In**：从 0.95 缩放渐显，0.5s，smooth
- **延迟递增**：多个元素依次入场，间隔 0.1s

### 悬浮效果
- **按钮**：translateY(-1px) + 紫色发光阴影
- **卡片**：translateY(-4px) + 背景变亮 + 阴影增强
- **链接**：颜色变化/箭头右移
- **项目项**：箭头右移 4px + 变紫色

## Layout

### 容器
- **默认**：max-width 1200px，居中，padding 0 40px
- **窄版**：max-width 980px（文字区域）

### 网格系统
- **三列**：特性卡片、工作经历
- **响应式**：
  - Desktop：3 列
  - Tablet：2 列
  - Mobile：1 列

### 响应式断点
| 名称 | 宽度 | 变化 |
|------|------|------|
| sm | 640px | 手机布局 |
| md | 768px | 大手机/小平板 |
| lg | 1024px | 平板/小桌面 |
| xl | 1280px | 标准桌面 |
| xxl | 1536px | 大桌面 |

## Do's and Don'ts

### ✅ Do
- 使用深紫黑色背景（#0A0A0C → #12121A）
- 使用紫粉渐变（#A855F7 → #EC4899）作为唯一强调色
- 使用 20px 圆角作为卡片标准
- 使用 999px 圆角作为按钮标准
- 使用轻微柔和的阴影
- 使用负字间距营造紧凑感
- 保持大量留白
- 使用 SF Pro + PingFang SC 字体组合

### ❌ Don't
- 不要使用强科技感元素（机械纹理、电路图案）
- 不要过度使用毛玻璃效果
- 不要使用过度发光/高斯模糊
- 不要添加装饰性渐变背景
- 不要使用强烈阴影
- 不要混用多种强调色
- 不要使用圆角超过 20px 的卡片
- 不要缩小正文行高（保持 1.6）

## Usage Guide

### 编码前必读

在开始生成代码前：

1. **完整读取**本设计规范的每个章节
2. **严格遵循**配色方案（深紫黑 + 紫粉渐变）
3. **使用**提供的 CSS 变量和 Token
4. **遵守**禁止项清单
5. **确保**响应式布局符合规范
6. **使用** 8pt 间距系统
7. **使用** 20px 卡片圆角和 999px 按钮圆角

### Tailwind 配置参考

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-void': '#0A0A0C',
        'bg-primary': '#12121A',
        'bg-secondary': '#1A1A24',
        'accent-purple': '#A855F7',
        'accent-pink': '#EC4899',
      },
      borderRadius: {
        'card': '20px',
        'button': '999px',
      },
      fontFamily: {
        'display': ['SF Pro Display', 'PingFang SC', 'sans-serif'],
        'body': ['SF Pro Text', 'PingFang SC', 'sans-serif'],
      },
    },
  },
}
```

---

> **设计系统版本**：v1.0  
> **创建日期**：2025-05-17  
> **适用项目**：7 Portfolio 个人作品集网站  
> **设计风格**：高级极简、深色主题、紫粉渐变