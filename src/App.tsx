import './App.css';
import { useState } from 'react';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';

function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);
  const [isPreview, setIsPreview] = useState<boolean>(false);

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar />
          <header>
            <Header />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor />
            <Preview />
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor />
            <Preview />
          </main>
        </div>
  )
};

export default App
