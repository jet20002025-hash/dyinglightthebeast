# Dying Light: The Beast Wiki - Content Guidelines

> **⚠️ 重要声明**: 这是一个**粉丝创作的概念网站**。"Dying Light: The Beast"目前**不是**Techland官方宣布的真实游戏项目。

This document provides guidelines for creating and maintaining content for the Dying Light: The Beast Wiki.

## 📋 项目性质说明

这是一个**粉丝创作的概念网站**，所有内容均基于对Dying Light系列的推测和想象创作。内容创作应遵循以下原则：

- **概念性**: 基于现有Dying Light系列的推测和想象
- **一致性**: 保持与Dying Light世界观的一致性
- **创新性**: 在合理范围内进行概念创新
- **娱乐性**: 以娱乐和概念展示为主要目的

## 🎨 概念创作规范

### 内容标记要求

所有内容文件必须在front matter中包含概念标记：

```yaml
concept_note: "⚠️ 概念设计内容 - 基于粉丝推测创作"
```

### 免责声明格式

每个主要内容页面都应包含以下格式的免责声明：

```markdown
> **⚠️ 概念设计内容**: 本内容基于对Dying Light系列的推测和想象创作，展示概念性的游戏设计和世界观设定。
```

### 创作原则

1. **基于现有系列**: 所有概念都应基于Dying Light 1和2的现有设定
2. **合理推测**: 避免过于偏离原系列的核心元素
3. **创新平衡**: 在保持一致性的同时允许合理创新
4. **明确标记**: 所有内容都应明确标记为概念设计

## Content Types

### 1. Quests

**File Location**: `content/quests/`
**Template**: Use existing quest files as templates

**Required Front Matter**:
```yaml
---
title: "Quest Name"
description: "Brief quest description for SEO"
date: 2024-01-01
type: "quest"
categories: ["main-story", "side-quest", "community"]
difficulty: "easy" # easy, medium, hard, nightmare
tags: ["tutorial", "beginner", "combat", "stealth"]
featured_image: "/images/quests/quest-name.jpg"
---
```

**Content Structure**:
- Quest objectives
- Step-by-step walkthrough
- Tips and strategies
- Rewards
- Related quests

### 2. Items

**File Location**: `content/items/`
**Template**: Use existing item files as templates

**Required Front Matter**:
```yaml
---
title: "Item Name"
description: "Item description for SEO"
date: 2024-01-01
type: "weapon" # weapon, blueprint, consumable, equipment
categories: ["melee", "ranged", "medical", "utility"]
rarity: "common" # common, uncommon, rare, epic, legendary
stats:
  damage: 45
  durability: 80
  speed: "medium"
tags: ["beginner", "reliable", "craftable"]
featured_image: "/images/items/item-name.jpg"
---
```

**Content Structure**:
- Item stats and description
- How to obtain
- Upgrades and modifications
- Combat tips
- Best use cases

### 3. Characters

**File Location**: `content/characters/`
**Template**: Use existing character files as templates

**Required Front Matter**:
```yaml
---
title: "Character Name"
description: "Character description for SEO"
date: 2024-01-01
type: "character"
role: "ally" # ally, enemy, merchant, survivor
categories: ["scientist", "quest-giver", "trader"]
location: "Tower Safe House"
tags: ["important", "story-critical", "friendly"]
featured_image: "/images/characters/character-name.jpg"
---
```

**Content Structure**:
- Character background
- Role in the story
- Location and services
- Quest involvement
- Tips for interaction

### 4. Skills

**File Location**: `content/skills/`
**Template**: Use existing skill files as templates

**Required Front Matter**:
```yaml
---
title: "Skill Name"
description: "Skill description for SEO"
date: 2024-01-01
type: "skill"
category: "survivor" # survivor, agility, power, night-hunter
tier: 1
cost: 1
prerequisites: []
tags: ["utility", "detection", "combat", "stealth"]
---
```

**Content Structure**:
- Skill description and effects
- Skill progression tiers
- How to use
- Tips and strategies
- Best combinations

### 5. Locations

**File Location**: `content/map/`
**Template**: Use existing location files as templates

**Required Front Matter**:
```yaml
---
title: "Location Name"
description: "Location description for SEO"
date: 2024-01-01
type: "location"
category: "safe-house" # safe-house, merchant, danger-zone, resource
importance: "critical" # low, medium, high, critical
tags: ["hub", "main-base", "merchants"]
coordinates:
  x: 150
  y: 200
featured_image: "/images/locations/location-name.jpg"
---
```

**Content Structure**:
- Location details and services
- Available NPCs and merchants
- Safety information
- Tips for visitors
- Related locations

## Writing Guidelines

### General Rules

1. **Accuracy**: All information must be verified in-game
2. **Clarity**: Use clear, concise language
3. **Consistency**: Follow established formatting patterns
4. **Completeness**: Include all relevant information
5. **Currency**: Keep content updated with game patches

### Language and Tone

- **Professional**: Maintain a professional, informative tone
- **Accessible**: Write for players of all skill levels
- **Engaging**: Make content interesting and useful
- **Objective**: Present facts without bias

### Formatting

1. **Headings**: Use proper heading hierarchy (H1, H2, H3)
2. **Lists**: Use bullet points for easy scanning
3. **Code**: Use backticks for game terms and commands
4. **Links**: Link to related content when relevant
5. **Images**: Include relevant images with alt text

### SEO Considerations

1. **Titles**: Use descriptive, keyword-rich titles
2. **Descriptions**: Write compelling meta descriptions
3. **Keywords**: Include relevant keywords naturally
4. **Structure**: Use proper heading structure
5. **Links**: Include internal links to related content

## Image Guidelines

### Image Requirements

1. **Format**: Use JPG for photos, PNG for graphics
2. **Size**: Optimize for web (max 1920px width)
3. **Quality**: High quality, clear images
4. **Alt Text**: Always include descriptive alt text
5. **Naming**: Use descriptive, lowercase filenames

### Image Locations

- **Quest Images**: `static/images/quests/`
- **Item Images**: `static/images/items/`
- **Character Images**: `static/images/characters/`
- **Location Images**: `static/images/locations/`
- **General Images**: `static/images/`

### Image Optimization

1. **Compression**: Compress images for web
2. **WebP**: Consider using WebP format
3. **Lazy Loading**: Images are lazy-loaded by default
4. **Responsive**: Images scale for different screen sizes

## Content Maintenance

### Regular Updates

1. **Game Patches**: Update content when game is patched
2. **New Content**: Add new quests, items, and characters
3. **Community Feedback**: Incorporate user suggestions
4. **Bug Fixes**: Correct any errors or outdated information

### Quality Control

1. **Review Process**: All content should be reviewed
2. **Testing**: Test all links and references
3. **Consistency**: Ensure formatting consistency
4. **Accuracy**: Verify all information is correct

### Community Contributions

1. **Guidelines**: Provide clear contribution guidelines
2. **Review**: Review all community contributions
3. **Credit**: Give proper credit to contributors
4. **Feedback**: Provide constructive feedback

## Technical Considerations

### Markdown Syntax

1. **Headers**: Use `#` for headers
2. **Bold**: Use `**text**` for bold
3. **Italic**: Use `*text*` for italic
4. **Links**: Use `[text](url)` for links
5. **Images**: Use `![alt](url)` for images

### Front Matter

1. **YAML**: Use proper YAML syntax
2. **Quotes**: Quote strings with special characters
3. **Lists**: Use proper list syntax
4. **Dates**: Use ISO date format (YYYY-MM-DD)
5. **Booleans**: Use true/false for boolean values

### Hugo Shortcodes

1. **Figure**: Use `{{< figure >}}` for images with captions
2. **Ref**: Use `{{< ref >}}` for internal links
3. **Relref**: Use `{{< relref >}}` for relative links
4. **Include**: Use `{{< include >}}` for reusable content

## Best Practices

### Content Creation

1. **Research**: Thoroughly research before writing
2. **Outline**: Create an outline before writing
3. **Draft**: Write a draft first, then refine
4. **Review**: Review and edit before publishing
5. **Test**: Test all functionality before deploying

### User Experience

1. **Navigation**: Make content easy to find
2. **Search**: Ensure content is searchable
3. **Mobile**: Test on mobile devices
4. **Loading**: Optimize for fast loading
5. **Accessibility**: Ensure accessibility compliance

### Performance

1. **Images**: Optimize all images
2. **Code**: Minimize custom code
3. **Caching**: Use appropriate caching
4. **CDN**: Use CDN for static assets
5. **Monitoring**: Monitor site performance

---

**Need Help?** Check the [main README](README.md) or open an issue on GitHub.
