# 面試作品集網站 — 建置指令（給 Claude Code）

## 專案目標

用 `channel-t-content.md` 的內容，做一個面試作品集網站，之後部署到 GitHub Pages。\*\*未來會加入第二個案例研究（mimicasa），架構要能支援多案例，不要把所有內容塞進單一頁面。\*\*這是獨立專案，跟 Ryan 正在開發的主要作品集網站（Next.js \+ GSAP）**完全分開**，不要共用 repo，也不需要框架、不需要建置流程（build step）——純 HTML/CSS/少量 JS 即可，愈簡單愈好，方便快速部署跟後續維護。

## 網站架構（多案例研究）

/index.html              → 登陸頁：簡短自我介紹 \+ 案例研究入口卡片（目前只有 Channel-T，之後加 mimicasa）

/channel-t/index.html    → Channel-T 完整案例研究（12 段內容，見下方）

/mimicasa/index.html     → 之後補上，先不用建立，但架構要預留

/assets/                 → 共用圖片資料夾，子資料夾依案例分（assets/channel-t/、assets/mimicasa/）

/style.css               → 共用樣式表（stone/sand 設計系統），登陸頁與各案例研究頁共用同一份

**登陸頁（`/index.html`）內容**：

- 簡短一段自我介紹（角色：UI/UX 設計 / 產品經理）  
- 案例研究卡片列表，目前只有一張：Channel-T（B2B SaaS 智能行程分銷平台），點擊進入 `/channel-t/`  
- 卡片可以用 Key Outcomes 裡的一兩句話當摘要，不用整個 S2 都搬過來  
- 極簡、不用花俏動效，這是入口頁，重點是讓人快速選擇要看哪個案例

**Channel-T 案例研究頁（`/channel-t/index.html`）**：完整 12 段內容，用 `channel-t-content.md` 填入，結構同下方規格。

## 技術規格

- 純靜態 HTML \+ CSS（+ 少量 vanilla JS 處理 nav 顯隱／平滑滾動即可，不用任何框架）  
- 不需要 Node、不需要套件管理、不需要建置指令——檔案寫好就能直接部署到 GitHub Pages  
- 中文語系：`<html lang="zh-Hant">`，中文字體使用系統字體 fallback（`"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif`），英文/數字用 Inter 或系統無襯線字體  
- CSS 抽成獨立的 `style.css`，讓登陸頁跟未來的 mimicasa 頁面都能直接引用，不用每個案例研究頁各自重複寫一份樣式

## 視覺系統（深色版，套用即可，不用重新設計）

:root {

  \--stone-950: \#0A0A0A;  /\* 主背景 \*/

  \--stone-900: \#141413;  /\* 次要區塊背景 \*/

  \--stone-800: \#1F1E1D;  /\* 卡片背景 \*/

  \--stone-700: \#3A3836;  /\* 邊框、分隔線 \*/

  \--stone-500: \#8B877F;  /\* 次要文字 \*/

  \--stone-300: \#C7C2B8;  /\* 主要內文文字 \*/

  \--stone-100: \#F5F2EA;  /\* 標題、高對比文字 \*/

  \--sand: \#C9B896;       /\* 強調色（單色，不用漸層） \*/

  \--sand-dark: \#A8966E;  /\* 強調色 hover 態 \*/

}

風格原則：

- 大留白、克制，不用鮮豔色塊、不用漸層背景、不用圓潤裝飾性 icon  
- 無圓角或極小圓角（呼應精密、工程感的調性）  
- 深色底、暖白/淺色文字，`sand` 只用在少數強調點（CTA、hover 邊框），不大面積使用  
- 不用傳統 drop-shadow 做立體感，改用邊框對比 \+ 背景層次區分（stone-950 → stone-900 → stone-800，越深代表層級越高）

## 頁面結構

單頁滾動網站，共 12 段內容（S1–S12，內容見 `channel-t-content.md`），依序排列：

1. **S1 專案主視覺**：大標題 \+ Value Proposition 一句話 \+ Role/Timeline，Hero 區塊，留白充足  
2. **S2 關鍵產出**：5 張卡片並排或直向排列  
3. **S3 專案概覽**：背景／角色／團隊組成／時程，用 2 欄 grid 呈現 metadata  
4. **S4 問題探索**：S4-01\~S4-06 六個子段落，用 `<h3>` 分隔  
5. **S5 專案限制**：S5-01\~S5-04 四個子段落  
6. **S6 產品決策**：S6-01\~S6-05 五個子段落  
7. **S7 UX 設計流程**：S7-01\~S7-03 三個子段落，內容較長，S7-02/S7-03 內部還有帶編號的小標題（01/02/03/04）  
8. **S8 UI 介面設計**：S8-01\~S8-03 三個子段落（依頁面分類：解析核對頁／行程管理頁／行程資訊頁）  
9. **S9 設計系統**：S9-01\~S9-07 七個子段落  
10. **S10 產品迭代**：S10-01\~S10-04 四個子段落  
11. **S11 商業驗證**：S11-01\~S11-04 四個子段落  
12. **S12 專案回顧**：S12-01\~S12-03 三個子段落 \+ 結尾的路徑總結

## 導覽（Nav）

- Sticky top nav，含錨點連結跳轉到 S2/S4/S6/S7/S8/S9/S10/S11/S12（不用每個都列，抓重點段落即可）  
- 半透明深色背景 \+ blur 效果  
- Mobile 版可以隱藏文字連結或收進漢堡選單

## 圖片處理（重要）

Ryan 會陸續補圖進來，網站要先把圖片容器規劃好：

- 所有圖片用 `<figure>` \+ `<img>` \+ `<figcaption>` 包裹  
- `img` 統一設定 `max-width: 100%; height: auto;` 響應式縮放  
- 加上 `loading="lazy"` 延遲載入  
- 每張圖預留有意義的 `alt` 文字（描述圖片內容，供 SEO 與無障礙使用）  
- **每張圖的 `<figcaption>` 都要包含這句提示文字：「示意重製圖，非原始產品畫面」**（可以跟其他圖說內容並列，例如：「消費者肖像、商業漏斗、關鍵指標三項工具示意圖　·　示意重製圖，非原始產品畫面」），用較小、較淡的樣式呈現（例如用 `--stone-500` 顏色），不用做成顯眼的浮水印  
- 目前先用檔名佔位（例如 `assets/channel-t/s7-01-ia-structure.png`），實際圖檔由 Ryan 之後補進 `assets/channel-t/` 資料夾

**確認要放圖片的段落**（共 13 處，其餘段落純文字即可，不用每段都塞圖）：

- S6-03（消費者肖像、商業漏斗、關鍵指標三項工具示意圖）  
- S7-01（資訊架構層級圖）  
- S7-03（Wireframe，行程上架與行程管理兩張線框示意圖）  
- S8-01（解析核對頁高擬真示意圖）  
- S8-02（行程管理頁高擬真示意圖）  
- S8-03（行程資訊頁高擬真示意圖）  
- S9-01（Core Style 色彩/字體示意圖）  
- S9-02（Design Token 階層示意圖）  
- S9-03（Component Library 元件列表示意圖）  
- S9-04（Design Guideline 規範示意圖）  
- S9-05（Design Pattern 表單驗證示意圖）  
- S9-06（UI States 各狀態示意圖）  
- S11-04（三次提案演進的路徑示意圖，非產品畫面，可用抽象流程圖表現）

## RWD 斷點

沿用 Ryan 主要作品集網站的規範：

| 裝置 | 寬度 | 左右 padding |
| :---- | :---- | :---- |
| Desktop | 1200px | 較寬留白 |
| Tablet | 810px | 中等留白 |
| Mobile | 390px | 較窄留白，單欄堆疊 |

Mobile 版：所有多欄 grid（例如 S3 的 metadata、S8 的雙圖並排）都要 fallback 成單欄堆疊；nav 文字連結在窄螢幕可收起。

## 部署

- 建立新的 GitHub repo（獨立於主要 portfolio repo）— 已建立：`portfolio-presentation`  
- 用 GitHub Pages 部署（repo 設定裡開啟 Pages，指向 main branch 的 root）  
- 部署後網址結構：`https://帳號.github.io/portfolio-presentation/`（登陸頁）、`https://帳號.github.io/portfolio-presentation/channel-t/`（Channel-T 案例研究）  
- 檔案結構越簡單越好，依上方「網站架構」規劃即可

## 內容來源

完整文字內容在 `channel-t-content.md`，直接依照裡面 S1–S12 的段落順序與標題填入對應區塊，文字不需要改寫，已經是定稿版本（含 NDA 審查修正）。  
