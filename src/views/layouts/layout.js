import Sidebar from "../../components/module/Sidebar";

const Layout = () =>
  `<div class="container">
      <nav class="sidebar">${Sidebar()}</nav>
      <main class="main">
        <header class="header"></header>
        <main class="content"></main>
      </main>
    </div>`;

export default Layout;
