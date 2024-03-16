import './App.css';
import { useState } from 'react';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';

function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("# Welcome to Markdown");

  
  const updateMarkdown = (value: string) => {
    setMarkdown(value);
  }

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar />
          <header>
            <Header />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview />
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview />
          </main>
        </div>
  )
};

export default App
