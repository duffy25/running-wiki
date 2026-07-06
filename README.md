# Run Docs - 跑步知识文档站

从入门到进阶的完整跑步指南，基于 Astro 构建。

## 内容

- **跑步指南** - 装备选择、热身拉伸、训练计划
- **损伤预防** - 常见损伤成因、预防与康复训练
- **马拉松训练** - 系统化训练计划、配速策略、比赛指南

## 特性

- 📝 Markdown 优先 — Content Collections 内容管理
- 🎨 响应式设计 — 适配桌面和移动端
- ⚡ 静态站点 — 快速加载，SEO 友好
- 🌗 暗色模式 — 自动检测系统偏好
- 📖 文章目录 — 自动生成 TOC 导航

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
run-docs/
├── src/
│   ├── content/articles/   # Markdown 文章
│   ├── components/         # 组件
│   ├── layouts/            # 页面布局
│   ├── pages/              # 路由页面
│   ├── styles/             # 样式
│   └── utils/              # 工具函数
├── public/                 # 静态资源
└── astro.config.mjs        # Astro 配置
```

## 部署

构建后的静态文件在 `dist/` 目录，可部署到：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

MIT
