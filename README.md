1. 我們該如何執行完成的 package

- npm install
- npm start

2. 專案的架構、Web 的架構邏輯

> 這個專案的架構主要分為幾個部分：

- src/const 存放常數
- src/types 存放類型定義
- src/contexts 存放 React Context 相關的定義
- src/hooks 存放 React 自訂 Hooks
- src/helper 存放輔助函式
- src/components 存放 React 組件
- src/pages 存放 React 頁面組件

> 網站的架構邏輯是採用 React Router 實現，包含以下幾個頁面：

- HeroListPage：英雄列表頁面，列出所有英雄
- HeroProfilePage：英雄資料頁面，顯示選擇英雄的詳細資料

3. 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介
   這個專案使用到的第三方 library 如下：

- axios: 用於發送 HTTP 請求
- tailwindcss: 一個 CSS 框架，使用 CSS class 組件化設計
- react-router-dom: React 的路由套件，用於實現單頁應用（SPA）

4. 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

- 針對複雜的邏輯、算法進行解釋
- 但如果有用 Typescript 就會寫比較少

5. 在這份專案中你遇到的困難、問題，以及解決的方法

- 事先規劃出完整的資料夾結構
- 要實作被選取的英雄卡片時要怎實作，後面決定要 router 抓變數
- API 取得的圖片網址有點問題，加上圖片錯誤處理
- 設計 custom hook 取得第一次的資料方便引入變數和頁面共用，增加易讀性
- 加上假資料，以免 API 壞掉無畫面
