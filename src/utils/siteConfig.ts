const config = {
  siteTitle: "跑步知识站",
  siteDescription: "从入门到进阶的完整跑步指南",
  navLinks: [
    { label: "首页", href: "/" },
    { label: "快速开始", href: "/docs/getting-started" },
    { label: "使用指南", href: "/docs/guides" },
    { label: "跑步文章", href: "/docs/articles" },
    { label: "API 参考", href: "/docs/api" },
  ],
  sidebarLinks: {
    docs: [
      { label: "快速开始", href: "/docs/getting-started" },
      { label: "使用指南", href: "/docs/guides" },
      { label: "API 参考", href: "/docs/api" },
    ],
    articles: [
      { label: "跑步指南", href: "/docs/running" },
      { label: "损伤预防", href: "/docs/running-injury-prevention" },
      { label: "马拉松训练", href: "/docs/marathon-training" },
    ],
    resources: [
      { label: "常见问题", href: "/#faq" },
      { label: "更新日志", href: "/#changelog" },
    ],
  },
};

export default config;
