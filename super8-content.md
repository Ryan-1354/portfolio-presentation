# Super8 Assignment — 網站文字內容與排版

> 本文件整理自 `index.html` 的實際上線內容，作為搬移到其他專案的文字／排版來源。
> 頁面為單頁網站、桌機優先，左側固定 anchor 導覽 + 右側主內容；768px 以下改單欄堆疊。
> 顏色與字體數值統一來自同資料夾 `tokens.json`（單一真實來源），此處不重複列出數值。

---

## 頁面基本設定

- 語言：`zh-Hant`
- 標題（`<title>`）：Super8 Assignment — Product Designer
- 字體：僅載入 tokens.json fallback 指定的替代字體（Inter / Fraunces），不載入 Anthropic 專屬字體
- 排版角色（typographic roles）：
  - `t-hero` — Serif，Hero 標題
  - `t-section` — Serif，章節大標
  - `t-heading` — Serif，卡片／小節標題
  - `t-body` — Sans，內文
  - `t-small` — Sans，小字內文
  - `t-label` — Sans，全大寫 UI 標籤

---

## 側邊 / 頂部導覽（Sidenav）

**Brand 區**
- Kicker（小標籤）：`Super 8 Studio · Product Designer`
- 站名（連回 `#top`）：`Super8 Assignment`
- 作者：`Ryan Wu`

**行動版目錄按鈕**：`目錄`

**內容導覽（nav-group 標題）**：`內容導覽`

| 編號 | 導覽項 | Anchor |
| :--- | :--- | :--- |
| 01 | Assignment Topic | `#topic` |
| 02 | Problem Framing | `#framing` |
| 03 | Design Proposal | `#proposal` |
| 04 | AI Collaboration | `#ai` |

---

## Hero / Metadata（`#top`）

**主標題（t-hero）**

> 如果要讓使用者更容易開始一個任務，你會改善什麼？

**引言（lead）**

> 觀察對象：Claude.ai 網頁版（desktop web），登入後 Chat 頁面。作業內容涵蓋 Problem Framing、Design Proposal 與 AI Collaboration 三大部分，本次選擇以網站形式呈現。

**Metadata 方格（meta-grid，2 欄）**

| 欄位 | 內容 |
| :--- | :--- |
| 專案名稱 | Super8 Assignment |
| 應徵職位 | Super 8 Studio Product Designer |
| 觀察對象 | Claude.ai 網頁版（desktop web），登入後 Chat 頁面 |
| 作業要求 | Problem Framing + Design Proposal + AI Collaboration 三大內容，形式不限，本次選擇網站呈現 |

---

## 01 — Assignment Topic（`#topic`）

**章節標題（eyebrow）**：`01 — Assignment Topic`
**大標**：`題目原文`

**引用區塊（quote）**

> 假設你是 Claude 的 Product Designer，請觀察 Claude 網頁版（claude.ai）登入後的 Chat 頁面體驗，思考：
>
> 「如果要讓使用者更容易開始一個任務，你會改善什麼？」

---

## 02 — Problem Framing（`#framing`）

**章節標題（eyebrow）**：`02 — Problem Framing`
**大標**：`問題定義`

### 2.1 工作流程

有序步驟（ol.steps）：

1. 一手經驗＋二手資料分析
2. 問題定義
3. 競品分析（ChatGPT、Gemini、Grok）

### 2.2 一二手資料分析

**卡片（card-grid 2 欄）**

**卡片一 — 一手觀察**
- 副標：實際操作 claude.ai 後的直觀感受
- 條列：
  - 若使用者沒有特定目標任務，一打開網頁版，左側 side panel 有兩個問題：一是功能項目多，且還分了 Home／Code 兩種層級，缺乏清楚的分類邏輯；二是視覺權重與右側 chat interface 相當接近，使用者容易不知道該從哪裡開始。這兩點都在無形中增加了使用者的認知負荷。
  - 當前資訊架構把 Chat、Cowork、Design、Code 四大功能的使用者認知層級切得相當破碎，缺乏一致且容易理解的層級安排，使用者難以直覺判斷這四者之間的關係與各自的入口位置。

**卡片二 — 二手資料蒐集**
- 副標：透過主流 AI 模型協助進行二手資料蒐集：
- prompt：
  - 針對 Claude.ai 網頁版（desktop web），研究以下產品設計題目：「如果要讓使用者更容易開始一個任務，你會改善什麼？」請透過網路搜尋，找出真實使用者與 UX / Product Design 社群對 Claude.ai「開始一個任務」體驗的主要抱怨與摩擦。

**各模型回覆整理（table）**

| ChatGPT | Gemini | Claude |
| :--- | :--- | :--- |
| 空白聊天框讓人不知道從哪開始（blank canvas problem） | 空白輸入框癱瘓、起手難度高（Blank Canvas Syndrome） | 空白輸入框＝空白畫布焦慮（The Blank Prompt Problem） |
| 知道要做什麼但不知道怎麼 prompt | 上下文斷裂、強迫開新對話循環 | 能力不夠可被發現（less discoverable capabilities） |
| 不知道 Claude 能為自己的工作做什麼 | Projects 與記憶機制入口太深 | 沒有可重複使用的 prompt 起點 |
| 開始前被 signup／pricing／desktop app 流程打斷 | 多檔案／多素材啟動前置步驟繁瑣 | 切換模型會開新對話，打斷任務 |
| 功能越來越多，不知道從 Chat、Projects、Artifacts 哪個入口開始 | — | Returning user 沒有明確的接續入口 |

**跨模型高頻痛點收斂為四類（ol.steps）**

1. 空白聊天框讓人不知道從哪裡開始
2. 不知道工具能為自己的任務做什麼／不知道怎麼下第一句 prompt
3. 任務中斷、上下文遺失、回訪使用者沒有接續入口
4. 多重入口／模式選擇困惑（Chat／Projects／Cowork／Artifacts 該從哪開始）

**實際檢驗，逐項比對現況產品（ol.steps）**

1. Claude 對首次使用者的目標任務已有引導設計，並非完全的空白輸入框
2. 經過引導步驟後，Claude 會直接產出 prompt 供使用者使用
3. Project 功能的設計本質上就是「讓回訪使用者延續工作」的體現，只是這個核心價值沒有被凸顯、也沒有清楚傳達給使用者
4. Side panel 功能繁多且資訊架構複雜，增加使用者認知負荷

**問題定義**

痛點 1、2，Claude 已提出解法（引導步驟＋自動產出 prompt），不再是最值得優先處理的問題。

因此，鎖定以下兩個問題進行 redesign：

**問題卡片（card-grid 2 欄，problems）**

**問題 1 — 回訪使用者沒有接續入口**
- 具體現象：Project 功能的核心目的之一，就是延續使用者未完成的工作，只是被放在資訊層級複雜的 side panel 裡，沒有被凸顯成使用者一眼就能感知的體驗。
- 為什麼優先：如果能提升 Projects 功能的使用率，將有效提升使用者的回訪頻率與留存率，進而帶動付費會員轉換率——直接支持商業目標，不只是體驗層面的優化。

**問題 2 — Side panel 功能繁多且資訊架構複雜，增加使用者認知負荷**
- 具體現象：具體現象有二：一是左側 side panel 與右側 chat interface 視覺層級相當接近，使用者難以直覺判斷該從哪裡開始工作；二是 Design／Cowork／Chat／Code 四大功能之間的資訊層級安排邏輯並不一致。
- 為什麼優先：理順資訊層級能降低使用者找到 Project 入口的門檻，與問題 1（延續工作卡）分別從不同情境提升 Project 的使用率——問題 1 服務已經有近期紀錄的使用者，問題 2 服務需要主動尋找的使用者。兩者加總，有助於提升使用者的回訪頻率與留存率，進而帶動付費會員轉換率，直接支持商業目標。

**觀察到但選擇不在這次解決的問題（ol.steps）**

1. 「強迫開新對話造成上下文斷裂」，確實是實際操作產品時也觀察到的真實痛點。但此痛點發生在任務執行過程中，而非開始任務的當下，與本次題目聚焦的範圍不同，屬於觀察到但選擇不在這次解決的問題，故排除。
2. 多階段提問確定使用者任務目標並提供更準確 prompt，是實際觀察到、可以更個人化引導新使用者下 prompt 的方法。但過多的提問流程會形成新的摩擦阻力，相對於本次優先聚焦的「凸顯 Project 核心價值」而言，效益含有較多不確定性，故多階段提問留待後續迭代評估。

### 2.3 競品分析

**分析項目**：回訪使用者任務延續設計、資訊架構安排　**參考競品**：ChatGPT、Gemini、Grok

**回訪使用者延續工作（card）**

ChatGPT、Grok、Gemini 皆有對標 Claude Project 的延續工作設計，分別是 Projects、Projects、Notebook，但也都沒有讓使用者更直接感受到「快速延續先前工作」——延續機制存在，但核心價值跟功能可見度都沒有被更明顯地呈現給使用者。

**不同模式的清楚定位與資訊架構（card-grid）**

- **ChatGPT**：Chat 與 Work 作為 primary navigation；Codex 為獨立產品，點擊後跳轉離開，入口放在 side panel 主選單最後一個。
- **Gemini**：扁平資訊架構，所有產品線與相關功能入口都放在 side panel 主選單；本身另有 CLI（Gemini CLI）與繪圖工具（Google Stitch），但皆為獨立產品，未將功能入口放入 Gemini。
- **Grok**：兩層資訊架構，聊天、製圖、自動化等功能放在 side panel 主選單；Build 模式（對標 Cowork）則透過 chat composer 切換、以任務目的引導使用者。

---

## 03 — Design Proposal（`#proposal`）

**章節標題（eyebrow）**：`03 — Design Proposal`
**大標**：`設計方案`

### 3.1 Redesign 項目

有序步驟（ol.steps）：

1. Chat Interface 加入延續工作卡片
2. Side panel 資訊架構重整

### 3.2 工作流程

有序步驟（ol.steps）：

1. 透過 Flow Chart 梳理目前使用 Projects 功能的使用者操作步驟，以及規劃迭代後的使用者操作流程及邏輯細節
2. Claude.ai 首頁 Redesign Mockup
3. 建立基礎設計系統（Design Token、Typography System、Component Library）
4. 重構 Side Panel 資訊架構

### 3.3 延續工作卡片

**提示卡（note-card）**

以下素材已附上預覽，點擊預覽圖或「查看 Figma」按鈕可開啟 Figma 檔案查看完整內容。

**素材：延續工作卡片 UI（figure）**
- 圖片：`assets/core-ui.png`
- Alt：claude.ai 首頁精稿：Sidebar 分組整併，主畫面上方加入「延續工作」卡片列，下方保留通用 chips
- 圖說：延續工作卡片精稿
- Figma 連結：https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=49-1840&t=znqStOemTebuqfZd-1

**取捨說明（tradeoff）**

- **視覺引導**
  讓 chat interface 與 side panel 之間有明顯的顏色落差，先把畫面切成兩個大區塊，使用者不會一次就要接收所有資訊；接著透過 chat composer 較高明度的背景色，將使用者的視覺自然引導到「該從這裡開始工作」。使用者會自然地往上查看是否有遺漏的資訊，透過這樣的視覺引導，視線依序落在 chat composer、Chat／Cowork 切換 tab，最後是延續工作卡片。
- **延續工作卡片**
  Chat composer 上方加入三張延續工作卡片，提供快速延續工作的入口，點擊後直接前往對應的對話。
- **情境式引導**
  三張卡片下方顯示 Project 功能引導文案；若卡片中已包含屬於 Project 的對話，則不顯示，讓引導文案只在真正需要的情境下出現。

**素材：Before / After Flow Chart（figure tall）**
- 圖片：`assets/flow-before-after.png`
- Alt：加入延續工作卡的 Before / After 流程圖：Before 需多層點擊尋找對話，After 由首頁延續工作卡片直接接續
- 圖說：迭代前後使用者進入 Project 功能流程
- Figma 連結：https://www.figma.com/board/4iiDqI47Yi5BGPhb3rloxF/super8?node-id=20-702&t=uwOnSeeDaUhTME2b-1

**設計決策（tradeoff）**

- **建立情境，再引導使用者接觸功能**
  現有設計雖然已經有一步進入 Project 內任一對話的路徑——左側 side panel 第一層即會展開該 Project 底下所有對話——但並沒有把 Project 這個核心功能放在適當的情境下呈現給使用者。如果使用者不曾主動探索或理解這個功能，接觸到它的機會其實不高。因此，我的設計順序是先建立「快速延續工作」的情境，再讓使用者在這個情境裡自然接觸到 Project 功能：具體做法是在 chat interface 放入延續工作卡片，建立起「快速回顧近期工作」的情境，接著在同一區塊加入引導文案與按鈕，順勢引導使用者進一步認識並使用 Project 功能。
- **Project 引導文案的顯示時機**
  若卡片中已經有任一則屬於 Project 的對話，代表使用者已經知道 Project 這個功能，引導文案不顯示。這個判斷避免對已經熟悉 Project 的使用者重複教育，也讓這個引導元件只在真正有效的情境（使用者尚未接觸過 Project）下出現，不會變成每次都存在、逐漸被使用者忽略的固定裝飾。
- **為什麼設定 48 小時？**
  48 小時並非精確科學數字，是**待驗證的初始假設起始值**。設定門檻的目的是篩掉太舊、與「馬上要接續」無關的對話；48 小時涵蓋「今天回來」與「隔一天回來」兩種最常見的接續情境。上線後應以實際使用資料做 A/B 測試，重新校準這個數字。
- **為什麼用時間排序、不用語意判斷？**
  若改用語意判斷「這個任務是否已完成」，代表每次使用者打開首頁，系統都要重新爬過所有對話並跑一次推論——每一次都是一次額外的網路請求與推論時間，與「更容易開始一個任務」這個前提直接相違背。
- **為什麼不只顯示 Project 內的 Chat？**
  不預先假設或預測使用者會用哪種方式完成任務（一般聊天或是 Project 內聊天），統一用最後活動時間排序，保留設計彈性，也保留日後回測與調整的空間。

### 3.4 資訊架構重構

**提示卡（note-card）**

以下素材已附上預覽，點擊預覽圖或「查看 Figma」按鈕可開啟 Figma 檔案查看完整內容。

**素材：Side Panel 資訊架構 Before / After（figure tall）**
- 圖片：`assets/ia-before-after.png`
- Alt：claude.ai Side Panel 資訊架構 Before / After：Before 扁平無分組且 Projects 重複，After 分為 Workspace 與 Other products 兩群並移除重複入口
- 圖說：Before / After claude.ai Side Panel 資訊架構
- Figma 連結：https://www.figma.com/board/4iiDqI47Yi5BGPhb3rloxF/super8?node-id=20-701&t=2xH6dvYUVHNuIrm4-1

**設計決策（tradeoff）**

- **扁平化資訊架構**
  原本兩層架構（Home／Code 各自獨立、各帶一套子選單），改為單一層的扁平架構——預設即是 Chat／Cowork，並將 Design、Code 的入口放進 Sidebar，完整呈現四大功能並存的結構。同時，把「工作實際不發生在 chat interface」的功能（Design、Code）獨立出來，與 Chat／Cowork 做出區隔。
- **釐清操作功能的歸屬**
  在單一層架構下，New、Artifact、Scheduled 更明確地隸屬於 Chat／Cowork 的操作功能，讓 Sidebar 與 chat interface 之間的關係更清楚、更容易理解。
- **視覺分區呈現三大群組**
  在單層架構下，透過視覺間隔明確劃分出三個群組——操作功能（New、Artifact、Scheduled）、專案與一般聊天記錄列表、其他功能（Design、Code、Account menu）。

**素材：Side Panel Redesign Mockup · Before / After（figure tall）**
- 圖片：`assets/side-panel-before-after.png`
- Alt：claude.ai Side Panel Redesign Mockup Before / After：Before 為現況扁平 Sidebar，After 加入 Projects/Chats and tasks 分組與 Home/Code 分頁的重整版面
- 圖說：Side Panel Redesign Mockup · Before / After
- Figma 連結：https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=49-1840&t=znqStOemTebuqfZd-1

**設計決策（tradeoff）**

- **主選單 Projects 入口拿掉，只留清單版本：** 清單版本本身已包含抵達 Project 總覽頁的功能，也直接支持「回訪使用者延續工作」這個目的，兩個入口保留其一即可，不需要重複
- **Customized 拿掉：** 與 Account 選單內的 Setting 功能重複，拿掉以保持 Sidebar 簡潔，不刪減任何實際功能
- **Design、Code 固定於 Sidebar 底部：** 這兩個產品線本質上是獨立的執行環境，不與 Chat／Cowork 共用底層邏輯，固定在底部、與上方跨模式共用的 Workspace 群組做出明確的視覺區隔

### 3.5 基礎設計系統

**基礎 Design Token（摘要，完整數值見 Figma）（ul.plain）**

- **Primitive 層：** neutral（9 階）、blue（3 階）、green/red/amber（各 2 階）、coral（2 階）
- **System 層：** Surface（3 階）、Text（3 階）、Border（1 階）、Role×5 組（Accent/Success/Danger/Warning/Brand）
- **分層邏輯：** primitive 換色即可整套換膚，system 語意名稱不須跟著變動

**System 層語意色（swatch，由 JS 依 tokens.json 產生）**

依序顯示以下 token 色票：
`surface-0`、`surface-1`、`surface-2`、`border`、`text-primary`、`text-secondary`、`text-muted`、`fill-accent`、`fill-accent-hover`、`bg-accent-soft`、`fill-success-text`、`fill-danger-text`、`fill-warning`、`fill-brand`、`fill-brand-hover`

**素材：基礎顏色 Design Token 參考（figure）**
- 圖片：`assets/design-token-reference.png`
- Alt：Figma Variables 面板：system 層 color token 對應 primitive（fill-brand→coral、surface→neutral、text→neutral 各階）
- 圖說：基礎顏色 Design Token 參考（Figma system 層 variables）· 完整數值見 Figma
- Figma 連結：https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=29-336&t=znqStOemTebuqfZd-1&view=variables

**素材：基礎 Component Library（figure tall）**
- 圖片：`assets/component-library.png`
- Alt：基礎 Component Library：List Item（hover／selected 態）、輸入框、Chat/Cowork 切換、chips、延續工作卡、確定按鈕、icon 色階
- 圖說：基礎 Component Library
- Figma 連結：https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=29-346&t=znqStOemTebuqfZd-1

### 3.6 成功指標（工具假設為 GA4）

**表一：延續工作卡片**

| 指標 | 定義 | 量測方式 | 性質 |
| :--- | :--- | :--- | :--- |
| 卡片點擊率 | `card_click`（點擊時觸發）÷ `card_impression`（卡片顯示時觸發） | GA4 事件埋點，直接可行 | 核心成功指標 |
| 卡片點擊後的對話存活率 | 埋 `message_sent` 事件，判斷卡片點擊後 5 分鐘內是否有新訊息送出 | GA4 事件埋點，直接可行 | 核心成功指標 |
| 新對話開啟率下降幅度 | 埋 `new_chat_click` 事件，比較改版前後每日／每週開啟數。若下降幅度超過原始假設門檻（暫定四成，待實際數據調整），代表卡片位置或視覺權重可能蓋過了通用入口 | GA4 事件埋點，直接可行 | 護欄指標，非成功指標，用於監控副作用 |

**表二：資訊架構重整**

| 指標 | 定義 | 量測方式 | 性質 |
| :--- | :--- | :--- | :--- |
| 抵達主要工作的總點擊數與路徑 | `sidebar_click` 埋在每個可點擊項目上，帶參數紀錄點擊項目，計算抵達 New／Projects／Design／Code 等主要工作入口的總點擊數與路徑 | GA4 埋原始事件，搭配 GA4 路徑分析報表計算，非自動產出 | 核心成功指標 |

---

## 04 — AI Collaboration（`#ai`）

**章節標題（eyebrow）**：`04 — AI Collaboration`
**大標**：`AI 協作`

### 4.1 AI 參與部分

本次專案中，AI 主要協助兩類工作：二手資料分析與成功指標規劃。二手資料分析部分，透過跨模型交叉查詢，快速蒐集業界對 claude.ai「開始任務」體驗的既有討論，作為問題篩選的起點；成功指標部分，AI 協助將「如何知道方案上線後有變好」這個抽象問題，拆解成可實際落地的量測邏輯——例如將指標分成「埋事件即可算出」與「需另建 GA4 路徑分析報表計算」兩種可行性等級，並個別定義每個指標對應的事件命名與判斷邏輯。這些建議加快了從構想到可執行量測方案的速度，但最終是否採用，仍需回到我自己對設計目標與商業脈絡的判斷。

### 4.2 AI 哪些建議你接受或沒有接受？為什麼？

我先依照題目範圍（是否影響「開始一個任務」）與嚴重程度（是否直接影響商業目標，即付費會員轉換率）對蒐集到的使用者痛點進行分類與篩選，最終收斂到四個痛點。接著實際到 claude.ai 逐一測試這四個痛點是否仍然存在，發現 AI 提供的資料有不即時的問題——四個痛點中，有兩個其實已經被 Claude 官方解決（首次使用者引導、prompt 生成）。這說明即便 AI 能大幅提高資料蒐集與分類的效率，設計者仍必須親自做事實查核，不能直接把 AI 的分析結果當作現況依據。

### 4.3 AI 真正影響設計結果的過程

AI 並沒有改變我最初想解決的問題方向，但補足了我在產品設計時，因缺乏工程背景而容易忽略的技術盲區。例如延續工作卡片的判斷邏輯，我原本的設計是讓 Claude 理解對話上下文，主動判斷哪些對話屬於「真正未完成的工作」，藉此決定卡片內容。但與 Claude 討論後，AI 不建議這個做法——理由是每次使用者打開首頁，系統都必須把所有對話重新爬過一次並跑一次語意判斷，這代表每次都要多一次網路請求與推論時間，反而違背「讓使用者更容易開始一個任務」的設計目標；相對地，單純用最後活動時間排序，不需要額外推論，最能支持這個目標。我認同這個理由邏輯成立，但也認為這個判斷需要被驗證，而非直接當作定論——因此在成功指標裡加入卡片點擊率與點擊後對話存活率兩項，用來實際檢驗「單純用時間排序」是否真的能有效協助使用者延續任務。

### 4.4 設計師的判斷

兩個 redesign 痛點的篩選、以及後續迭代設計方向的每一次收斂，最終都是由我自己判斷決定的。但在每一次判斷之前，我都會先跟 AI 完整闡述自己的思考脈絡與取捨理由，讓 AI 針對我的邏輯提出質疑或反例，確保決策過程中沒有太嚴重的思考盲區。AI 在這個過程中扮演的角色比較像是一個會反問、會挑戰假設的對話對象，而不是一個直接給答案的工具——最終每一個設計決策，仍然是我自己對題目、商業脈絡與使用者需求綜合判斷後拍板的。

---

## 素材與連結清單

| 素材 | 檔案 | Figma 連結 |
| :--- | :--- | :--- |
| 延續工作卡片精稿 | `assets/core-ui.png` | https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=49-1840&t=znqStOemTebuqfZd-1 |
| 迭代前後進入 Project 流程 | `assets/flow-before-after.png` | https://www.figma.com/board/4iiDqI47Yi5BGPhb3rloxF/super8?node-id=20-702&t=uwOnSeeDaUhTME2b-1 |
| Side Panel 資訊架構 Before / After | `assets/ia-before-after.png` | https://www.figma.com/board/4iiDqI47Yi5BGPhb3rloxF/super8?node-id=20-701&t=2xH6dvYUVHNuIrm4-1 |
| Side Panel Redesign Mockup | `assets/side-panel-before-after.png` | https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=49-1840&t=znqStOemTebuqfZd-1 |
| 基礎顏色 Design Token 參考 | `assets/design-token-reference.png` | https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=29-336&t=znqStOemTebuqfZd-1&view=variables |
| 基礎 Component Library | `assets/component-library.png` | https://www.figma.com/design/gBdJlyEcW9GNYL4Urf5Zmc/Assignment?node-id=29-346&t=znqStOemTebuqfZd-1 |

Figma 按鈕圖示：`assets/figma_original.svg`
