# Dying Light: The Beast Wiki - Fan Concept Website

> **⚠️ 重要声明**: 这是一个**粉丝创作的概念网站**。"Dying Light: The Beast"**不是**Techland官方宣布的真实游戏项目。

## 📋 项目说明

这是一个**粉丝创作的概念网站**，展示了对"Dying Light: The Beast"游戏的想象和概念设计。所有内容均基于对Dying Light系列的推测和想象创作，仅供娱乐和概念展示用途。

### 🎯 项目目的

- **概念展示**: 展示粉丝对Dying Light系列未来发展的想象
- **技术演示**: 展示Hugo静态网站构建技术
- **社区交流**: 为Dying Light粉丝提供讨论平台
- **学习项目**: 作为Web开发和内容管理的学习项目

### ⚠️ 重要提醒

- **非官方项目**: 这不是Techland官方的游戏项目
- **概念设计**: 所有游戏内容都是基于推测的概念设计
- **仅供娱乐**: 内容仅供娱乐和概念展示用途
- **关注官方**: 请关注Techland官方渠道获取真实游戏信息

## 🛠️ 技术栈

- **静态网站生成器**: Hugo
- **主题**: 自定义Dying Light主题
- **部署**: Cloudflare Pages
- **搜索**: Lunr.js客户端搜索
- **样式**: 自定义CSS
- **脚本**: 原生JavaScript

## 📁 项目结构

```
dyinglightthebeast-wiki/
├── content/                    # Markdown内容文件
│   ├── _index.md              # 主页
│   ├── quests/                # 任务指南
│   ├── items/                 # 物品数据库
│   ├── characters/             # 角色档案
│   ├── skills/                # 技能树
│   └── map/                   # 地图位置
├── themes/                     # Hugo主题
│   └── dying-light-theme/     # 自定义主题
├── static/                     # 静态资源
├── public/                     # 构建输出
└── hugo.toml                  # Hugo配置
```

## 🚀 本地开发

### 前置要求

- Hugo (extended version)
- Node.js (for development tools)

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/dyinglightthebeast-wiki.git
cd dyinglightthebeast-wiki
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
hugo server
```

4. 访问 http://localhost:1313

### 构建命令

```bash
# 开发构建
hugo

# 生产构建
hugo --minify

# 测试构建
npm run test-build
```

## 📝 内容管理

### 内容类型

- **任务 (Quests)**: 游戏任务指南
- **物品 (Items)**: 武器、蓝图、消耗品
- **角色 (Characters)**: NPC和敌人档案
- **技能 (Skills)**: 技能树和能力
- **位置 (Locations)**: 地图和地点信息

### 内容创建指南

请参考 [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) 了解详细的内容创建规范。

### 重要提醒

所有内容都必须包含适当的免责声明，明确这是概念设计内容。

## 🔍 功能特性

- **响应式设计**: 支持移动端和桌面端
- **搜索功能**: 基于Lunr.js的客户端搜索
- **SEO优化**: 完整的SEO元标签和结构化数据
- **快速加载**: 优化的静态资源
- **易于维护**: 模块化的内容结构

## 🚀 部署

### 自动部署

项目使用GitHub Actions自动部署到Cloudflare Pages：

1. 推送到main分支
2. GitHub Actions自动构建
3. 部署到Cloudflare Pages
4. 自动更新网站

### 手动部署

```bash
# 构建
hugo --minify

# 部署到Cloudflare Pages
# 上传public/目录内容
```

## 🤝 贡献指南

### 如何贡献

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

### 贡献内容

- 新的概念设计内容
- 改进现有内容
- 修复错误
- 改进网站功能

### 内容要求

- 必须包含适当的免责声明
- 基于Dying Light系列的合理推测
- 保持内容一致性
- 遵循项目规范

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## ⚠️ 免责声明

- 这是一个**粉丝创作的概念网站**
- "Dying Light: The Beast"**不是**官方游戏
- 所有内容都是基于推测的概念设计
- 仅供娱乐和概念展示用途
- 请关注Techland官方渠道获取真实游戏信息

## 🔗 相关链接

- [Techland官方网站](https://techland.net/)
- [Dying Light官方](https://dyinglightgame.com/)
- [Dying Light 2官方网站](https://dyinglight2.com/)
- [项目GitHub仓库](https://github.com/yourusername/dyinglightthebeast-wiki)

## 📞 联系方式

- **项目维护者**: [Your Name]
- **邮箱**: [your.email@example.com]
- **GitHub**: [@yourusername]

---

**最后更新**: 2025年1月3日  
**项目状态**: 活跃开发中  
**版本**: 1.0.0