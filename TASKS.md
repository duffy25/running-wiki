# 项目改进任务清单

## 高优先级

- [x] 添加 favicon（public 目录为空，但 BaseLayout 引用了 /favicon.svg）
- [x] 侧边栏动态化（当前硬编码，与 siteConfig.ts 不同步）
- [x] 删除硬编码重复页面（running.astro / marathon-training.astro / running-injury-prevention.astro）
- [x] 统一路由到 Content Collections 动态路由

## 中优先级

- [x] 启用 Content Collections（src/content 目录未使用）
- [x] 添加文章 TOC 目录导航（长文章阅读体验差）
- [x] 暗色模式切换（CSS 已定义变量，缺少切换按钮）
- [x] 替换占位内容（guides 页面）
- [x] 删除 api.astro（跑步知识站不需要 API 参考）
- [x] 删除 getting-started.astro，内容合并至跑步指南文章

## 低优先级

- [x] 搜索功能
- [x] SEO 优化（Open Graph、sitemap、robots.txt）
- [ ] 添加更多跑步文章（当前仅 3 篇）
- [ ] 添加图片支持（跑步姿势示意图、装备图等）
- [ ] 国际化支持（中英文双语）
