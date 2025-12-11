LUMIÈRE SPA 官方網站產品需求文件 (PRD)

|

| 項目 | 內容 |
| 專案名稱 | LUMIÈRE SPA 頂級美胸按摩官網 |
| 版本 | V1.0 |
| 狀態 | 原型開發完成 / 準備進入量產 |
| 目標受眾 | 25-50歲注重生活品質、隱私與胸部保養的女性客群 |

1. 專案背景與目標 (Background & Objectives)

1.1 背景

LUMIÈRE SPA 是一個定位為「頂級、私密、專業」的美胸按摩品牌。為了在數位通路上傳遞其高端的品牌形象，需要一個具備雜誌質感、視覺優美且響應式體驗極佳的官方網站。

1.2 核心目標

品牌形象塑造：透過大氣的留白、襯線字體與高品質攝影，建立「奢華」與「專業」的品牌印象。

優化預約轉換：在首頁提供直覺的懸浮預約選單（Desktop）與底部固定按鈕（Mobile），降低預約門檻。

響應式體驗：針對手機與桌機提供不同的操作體驗（如：手機版選單收合、內容堆疊方式調整）。

2. 用戶角色 (User Personas)

| 角色 | 描述 | 主要需求 |
| 都會白領 (Jessica) | 30歲，工作繁忙，重視效率與隱私。 | 希望能快速了解療程內容與價格，並能直接線上預約，不喜歡繁瑣的電話溝通。 |
| 產後媽媽 (Amanda) | 35歲，產後胸部下垂，尋求專業修復。 | 需要詳細的療程說明來建立信任感，重視環境是否舒適放鬆。 |
| 精緻名媛 (Sophie) | 28歲，重視美感與體驗。 | 被優美的網站視覺吸引，在意品牌是否具備高級感與獨特性。 |

3. 功能需求 (Functional Requirements)

3.1 導覽與結構 (Navigation & Structure)

全站容器 (Container)：

Desktop：網站內容應包覆在一個帶有大圓角（40px）與陰影的白色卡片容器中，背景為淺米色 (#F2F0EB)，模擬高級展示架效果。

Mobile：取消外層容器邊距，內容全螢幕滿版呈現。

導覽列 (Navbar)：

Logo：Playfair Display 字體，包含品牌名稱與副標語。

Desktop 選單：半透明毛玻璃效果，懸浮於 Hero Image 上方，包含「品牌、療程、會員、聯絡」與「立即預約」按鈕。

Mobile 選單：漢堡選單 (Hamburger Menu)，點擊後展開全螢幕黑色遮罩選單。

3.2 首頁主視覺 (Hero Section)

背景：高品質情境圖，需疊加深色漸層遮罩以確保文字可讀性。

文案：使用 Cormorant Garamond 與 Playfair Display 字體混排，強調「Awaken Your Inner Beauty」。

互動元件：

Desktop：底部懸浮式預約搜尋欄（橫向排列），包含「療程選擇」、「分店選擇」、「日期選擇」與圓形箭頭按鈕。需具備跨區塊（破格）的視覺效果。

Mobile：隱藏懸浮搜尋欄，改用底部固定懸浮按鈕 (Sticky Bottom Bar) 引導預約。

3.3 內容區塊 (Content Sections)

品牌理念 (Our Philosophy)：

佈局：左右穿插佈局（Zig-Zag）。Desktop 為左圖右文，Mobile 為上圖下文。

圖片：特殊的圓角處理（上方大圓角、下方小圓角），並包含裝飾性的「畫中畫」小圖。

獨家療程 (Signature Treatment)：

佈局：Desktop 為右圖左文，Mobile 為上文下圖（或圖文堆疊）。

特色：圖片需為正圓形或橢圓形遮罩，並附帶懸浮標籤（如：Essential Oil）。

列表：使用圓點列表展示療程特點（如：疏通乳腺、改善副乳）。

數據與見證 (Stats & Social Proof)：

佈局：雜誌風格排版。Desktop 為橫向三欄分割，Mobile 為垂直堆疊。

內容：展示服務人次、滿意度、執業年資。

互動：滑鼠懸停 (Hover) 時背景變色，數字顏色變化。

3.4 頁尾與行動呼籲 (Footer & CTA)

CTA區塊：非對稱式設計，左側為情境圖，右側為深色背景文字區。

Footer：極簡風格，包含版權宣告與社群連結 (Instagram, Facebook, Line)。

4. UI/UX 設計規範 (Design Guidelines)

4.1 色彩計畫 (Color Palette)

| 用途 | 色碼 | 說明 |
| 背景色 (外) | #F2F0EB | 淺米灰，用於桌面版外層背景 |
| 背景色 (內) | #FAFAFA | 極致白，用於主要內容卡片 |
| 文字主色 | #171717 (Neutral-900) | 深黑，用於標題與強調文字 |
| 文字副色 | #737373 (Neutral-500) | 灰色，用於內文 |
| 品牌強調色 | #FB7185 (Rose-400) | 玫瑰金/粉，用於按鈕 Hover、強調字、圖示 |
| 深色背景 | #171717 | 午夜黑，用於 Hero Section 與 CTA 區塊 |

4.2 字體規範 (Typography)

標題 (Headings)：Playfair Display (Google Fonts) - 優雅的襯線體，用於大標題與數字。

內文 (Body)：Cormorant Garamond (Google Fonts) - 具備古典氣質的襯線體，用於長文案。

功能性文字 (UI)：Sans-serif (系統預設) - 用於導覽列、按鈕、標籤，確保易讀性。

4.3 視覺效果 (Visual Effects)

Glassmorphism：導覽列與預約搜尋欄需使用 backdrop-filter: blur() 營造毛玻璃質感。

Shadows：主容器與懸浮元件需使用大範圍柔和陰影 (shadow-2xl)。

Transitions：所有按鈕與連結需有 0.3s 的 ease-in-out 過渡效果。

Animations：進入畫面時，文字與圖片需有輕微的 Slide Up 或 Fade In 動畫。

5. 技術規格 (Technical Specifications)

前端框架：React.js (Create React App 或 Next.js)

樣式庫：Tailwind CSS (用於快速切版與響應式控制)

圖示庫：Lucide React (輕量級 SVG 圖示)

字體載入：Google Fonts API (Playfair Display, Cormorant Garamond)

圖片資源：Unsplash (需進行壓縮與 WebP 格式轉換以優化效能)

6. 待辦事項 (Roadmap)

$$已完成$$

 首頁 UI 原型設計與 RWD 實作。

$$進行中$$

 預約表單功能串接 (需定義後端 API 或使用第三方預約系統)。

$$待辦$$

 製作「關於我們」、「服務價目表」等內頁。

$$待辦$$

 會員登入系統與歷史訂單查詢。