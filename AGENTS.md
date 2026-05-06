# Project Background

这是一个 Next.js App Router 静态导出项目，用来展示汽车洗护店「热心网友洗护中心」。项目使用 TypeScript 和 Tailwind CSS，最终通过 `next build --webpack` 生成静态 `out/`。

## Brand And Business

- 店名：热心网友洗护中心
- 业务类型：汽车洗护、精洗、内饰深洁、漆面护理、镀膜养护
- 门店地址：江苏省南京市秦淮区大明路276号
- 营业时间：周一至周日 09:30 - 21:00
- 品牌气质：现代、干净、专业，但保留「热心网友」这个名字带来的亲近感
- 主色：青绿色用于行动按钮和品牌高亮，深色用于导航与首屏压暗背景，少量暖黄色用于提示和 logo 点缀

## Current Files

- `app/layout.tsx`：页面元信息和根布局
- `app/page.tsx`：首页组合入口
- `app/components/`：按页面区块拆分的 React 组件
- `app/globals.css`：Tailwind 入口、全局变量、表单基础样式和 CSS 地图样式
- `public/assets/logo.svg`：汽车洗护风格矢量 logo，用于导航和地图定位点
- `next.config.mjs`：配置 `output: "export"`

## Page Structure

首页当前包含这些主要区域：

- 固定顶部导航：品牌 logo、项目、套餐、流程、门店、预约洗护
- 首屏 hero：洗车泡沫背景图、品牌标题、预约按钮、关键数据
- 服务项目：外观精洗、内饰深洁、漆面护理
- 套餐价格：通勤精洗、全车焕新、热心网友镀膜
- 标准流程：车况确认、分区清洁、护理保护、灯光质检
- 门店区域：CSS 绘制的静态地图卡片，中心定位点使用 `/assets/logo.svg`
- 预约表单：Client Component，本地前端提交反馈，不会发送真实请求
- 页脚：版权和 Unsplash 图片来源

## Map Notes

门店左侧地图不是第三方地图 iframe，也不依赖地图 API。它是用 HTML/CSS 绘制的静态地图视觉：

- 地图容器类名：`.shop-map`
- 定位点类名：`.brand-pin`
- 定位点 logo：`/assets/logo.svg`
- 地图按钮链接到高德地图搜索地址

如果以后要接入真实地图，优先保留当前视觉作为无网络或 API 不可用时的 fallback。

## Asset Notes

当前页面使用远程 Unsplash 图片作为洗车和内饰场景图。页脚已经列出图片来源。新增图片时要同步补充来源或改用本地素材。

logo 是汽车洗护风格图标：水滴、车身线条、泡沫、青绿色和暖黄色点缀。页面实际引用的是 `public/assets/logo.svg`，不要误删。

## Implementation Preferences

- 保持静态导出优先，不要引入需要服务器运行时的功能，除非用户明确要求。
- 样式主要用 Tailwind class，复杂伪元素和 CSS 地图相关样式保留在 `app/globals.css`。
- 不要添加 API routes、Server Actions、数据库或真实表单提交接口，除非用户明确要求。
- 修改店名、地址、联系方式时，要同步检查 metadata、导航、hero、门店信息、地图卡片、套餐选项、页脚和预约表单选项。
- 保持移动端排版可读，尤其注意 hero 标题、导航品牌名、地图地址卡片和价格卡片。
- `npm run build` 使用 `next build --webpack`，因为当前环境中 Next 16 的 Turbopack 构建会因内部端口绑定被沙箱拦截。

## Commands

```text
npm run dev
npm run build
```

重点检查：

- 导航 logo 是否显示
- 首屏标题是否仍然自然换行
- 门店地图是否显示 logo 定位点和正确地址
- 预约表单提交后是否出现确认提示
- 移动端宽度下文字和按钮是否不重叠
