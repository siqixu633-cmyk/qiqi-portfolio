# Website Requirements

--------------------------------------------------

# 1. Project Overview

项目名称：

Qiqi Portfolio Website


项目类型：

个人设计师作品集网站。


项目用途：

用于求职展示、
作品展示、
个人专业形象表达。


网站主要发送对象：

- 面试官
- HR
- UI / UX 团队
- 游戏行业团队
- 海外发行团队
- 创意与品牌团队


核心目标：

通过高质量视觉表达、
完整项目展示、
高级感交互体验、
以及良好的阅读节奏，

展示个人：

- UI设计能力
- 视觉审美
- 系统化设计思维
- AIGC探索能力
- 游戏发行与运营视觉经验
- 海外营销视觉能力


--------------------------------------------------

# 2. Website Positioning

网站定位：

个人设计师作品集网站。


网站用途：

用于求职展示、
作品呈现、
以及个人专业形象表达。


目标观感：

网站需要让面试官快速感受到：

- 专业性
- 设计能力
- 项目完整度
- 个人审美判断
- 视觉表达能力


详细视觉规则：

请严格参考：

design-rules.md


--------------------------------------------------

# 3. Technical Stack

技术栈：

- Next.js
- TypeScript
- Tailwind CSS


部署平台：

Vercel


网站类型：

静态网站。


代码要求：

- 结构清晰
- 易维护
- 组件化
- 响应式
- 动画性能良好


禁止：

- 使用复杂后端
- 使用重型数据库
- 使用复杂工程结构
- 使用低性能动画


--------------------------------------------------

# 4. Development Principles

开发原则：

必须严格按照 Figma 高保真开发。


核心原则：

1. 高保真优先
2. 视觉一致性优先
3. 阅读体验优先
4. 加载性能优先
5. 组件化优先


--------------------------------------------------

# 5. Design Fidelity Principles

必须严格还原：

- 间距
- 字号
- 字重
- 圆角
- 阴影
- 留白
- 对齐关系
- 信息层级


禁止：

- 擅自修改布局
- 擅自增加设计元素
- 擅自改变视觉比例
- 擅自替换字体
- 擅自增加复杂效果


如果开发实现与设计稿冲突：

以 Figma 设计稿为准。


--------------------------------------------------

# 6. Website Structure

网站默认页面结构：

1. Navbar
2. Hero Section
3. About Section
4. Projects Section
5. Contact + Footer Section


网站整体结构：

单页面滚动结构。


说明：

Projects Section 包含：

- 默认项目卡片状态
- hover交互状态
- 项目封面展开状态
- 项目详情展示状态


项目详情内容：

不作为默认独立 section 展示。

项目详情需要基于：

Projects Section 的 interaction 状态进入。


详细规则：

请严格参考：

- interaction-rules.md
- animation-rules.md


--------------------------------------------------

# 7. Layout Principles

Desktop Design Frame：

1920px


Content Max Width：

1460px


说明：

1460px 为 Figma 设计稿中的实际内容容器宽度。


布局原则：

- 内容区域整体居中
- 保持大留白
- 保持视觉呼吸感
- 保持阅读节奏
- 保持高级感版式


禁止：

- 内容铺满整个屏幕
- 文字行宽过长
- 卡片间距混乱
- 元素过于拥挤


如果实现效果与设计稿冲突：

以 Figma 设计稿为准。


--------------------------------------------------

# 8. Responsive Development

需要完整响应式开发。


Breakpoints：

Desktop：
1920px

Tablet：
768px

Mobile：
390px


Responsive Goals：

- 保持信息层级
- 保持视觉节奏
- 保持阅读舒适
- 保持移动端体验完整


禁止：

- 元素重叠
- 横向滚动
- 字体过小
- 布局崩坏


详细规则：

请严格参考：

responsive-rules.md


--------------------------------------------------

# 9. Visual System

详细视觉规则：

请严格参考：

design-rules.md


包括：

- Typography
- Color
- Radius
- Shadow
- Spacing
- Layout Rhythm
- Visual Tone


--------------------------------------------------

# 10. Interaction System

详细交互规则：

请严格参考：

interaction-rules.md


包括：

- Hover Logic
- Click Logic
- Card Interaction
- Navigation Interaction
- Project Detail Interaction


--------------------------------------------------

# 11. Animation System

详细动画规则：

请严格参考：

animation-rules.md


包括：

- Motion Style
- Transition Timing
- Easing
- Scroll Animation
- Hover Animation
- Project Transition Animation


--------------------------------------------------

# 12. Project Section Goals

Projects Section 为网站核心视觉区域。


--------------------------------------------------

# Projects Structure

Projects Section 默认展示：

4个项目卡片。


默认状态：

用户进入页面时，

显示：

- 4个项目卡片
- 保持统一布局
- 保持统一比例
- 保持高级感留白
- 保持阅读节奏


项目卡片需要：

- 强视觉封面
- 明确视觉层级
- 清晰 hover 状态
- 保持统一交互逻辑


--------------------------------------------------

# Interaction Structure

Projects Section 采用：

三层交互结构。


--------------------------------------------------

# Layer 1 — Default Project State

默认项目状态：

页面初始状态下：

显示：

4个项目卡片。


用户操作：

Hover Project Card


Hover效果：

- 卡片轻微上浮
- 阴影轻微增强
- 图片轻微缩放
- 保持克制与高级感


禁止：

- 大范围位移
- 强科技感动画
- 炫技 hover


--------------------------------------------------

# Layer 2 — Project Cover Expand State

用户点击项目卡片后：

项目封面区域：

使用下滑展开形式。


重要：

不是弹窗。


展开方式：

- 在当前页面内部展开
- 使用 vertical expand interaction
- 保持页面滚动连续性
- 不打断阅读节奏


展开后显示：

大尺寸项目封面图。


重要说明：

项目封面图内部：

已经包含：

- 项目标题
- 项目基础介绍
- 项目标签


开发时：

必须直接使用设计稿中的完整封面图。

禁止：

额外重复生成：

- 标题文字
- 描述文字
- 标签模块


封面图展示要求：

- 保持完整比例
- 不裁切
- 不变形
- 保持原始留白
- 保持原始视觉节奏


封面图右下角：

需要固定：

View More Button。


View More Button Requirements：

- 位于封面图右下角
- 保持高级感
- 不遮挡核心视觉
- hover状态轻量
- 保持统一交互逻辑


动画要求：

- smooth expand
- smooth height transition
- fade in content
- 动画节奏缓慢克制


禁止：

- modal popup
- 全屏跳转
- 强动画
- 页面闪烁
- 自动生成额外文案模块


--------------------------------------------------

# Layer 3 — Project Detail Modal State

用户点击：

View More Button

后：

进入项目详情展示状态。


项目详情：

使用 Modal Popup 形式。


Modal Requirements：

- 居中显示
- 背景遮罩
- 保持高级感
- 保持阅读舒适度
- 保持良好滚动体验


项目详情内容：

来自：

assets/project-detail/

中的项目细节图。


开发时：

必须严格读取：

项目 detail 素材文件。


项目详情展示方式：

- 支持纵向滚动
- 保持图片完整展示
- 保持阅读节奏
- 保持良好图片间距


禁止：

- 图片裁切
- 图片拉伸
- 强制铺满屏幕
- 复杂切换动画


--------------------------------------------------

# Project Detail Interaction Rules

Modal Open：

- fade in
- opacity transition
- smooth scale


Modal Close：

- smooth fade out


背景：

- 添加 dim overlay
- 保持页面聚焦感


用户关闭方式：

- close button
- ESC key
- click overlay


--------------------------------------------------

# Project Content Goals

项目内容需要体现：

- 项目背景
- 设计目标
- 设计策略
- 视觉表达
- 设计思考
- 最终效果


项目展示重点：

强调：

- 视觉表达能力
- 系统性
- 设计逻辑
- 高完成度


--------------------------------------------------

# Visual Tone

Projects Section 整体需要：

- 高级
- 克制
- 精致
- 国际化
- 保持设计感


禁止：

- 廉价科技感
- 炫技动画
- 杂乱信息层级
- 过强视觉噪音


--------------------------------------------------

# 13. Performance Requirements

网站需要：

- 页面加载快速
- 动画流畅
- 图片优化
- 良好滚动性能


禁止：

- 大型视频背景
- 高频动画
- 复杂实时渲染
- 性能消耗型效果


--------------------------------------------------

# 14. SEO Requirements

需要：

- 基础 SEO
- favicon
- Open Graph
- 页面标题
- Meta Description


网站需要：

适合公开访问与分享。


--------------------------------------------------

# 15. Accessibility Requirements

需要保证：

- 基础可读性
- 清晰信息层级
- 良好按钮点击区域
- 合理文字对比度


--------------------------------------------------

# 16. Development Workflow

开发方式：

逐模块开发。


推荐开发顺序：

1. Navbar
2. Hero Section
3. About Section
4. Projects Section Default State
5. Projects Section Hover State
6. Projects Cover Expand State
7. Projects Detail Modal State
8. Contact + Footer Section
9. Responsive Layout
10. Animation Polish
11. Final Visual Polish


开发规则：

每个模块：

必须完成高保真还原后，
再进入下一个模块。


Projects Section 需要分阶段开发：

1. 默认项目卡片状态
2. hover交互状态
3. 项目封面展开状态
4. 项目详情弹窗状态


禁止：

直接将项目详情做成默认独立页面。


--------------------------------------------------

# 17. Development Priority

开发优先级：

Priority 1：

高保真还原


Priority 2：

响应式体验


Priority 3：

交互体验


Priority 4：

动画细节


Priority 5：

代码优化


--------------------------------------------------

# 18. Final Goal

最终目标：

创建一个：

- 高级
- 专业
- 高完成度
- 国际化
- 高保真

的个人设计师作品集网站。


网站需要：

让面试官在短时间内：

感受到：

- 专业能力
- 设计思维
- 审美能力
- 系统性
- 未来潜力
- 创意表达能力