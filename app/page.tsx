import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      <footer className="site-footer">
        Designed and Built with{" "}
        <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">Claude Code</a>
        {" · "}
        Updated on 17th March 2026
      </footer>
    </>
  );
}
