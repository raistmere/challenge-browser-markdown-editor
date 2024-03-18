import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';
import data from "../../../data.json" // This data will be used as a default data set if there is none that exists in local storage


function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("# Welcome to Markdown");
  
  const updateMarkdown = (value: string) => {
    setMarkdown(value);
  }

  const openSidebar = () => {
    console.log("Open Sidebar");
    setIsSidebar(true);
  }

  const closeSideBar = () => {
    setIsSidebar(false);
  }


  useEffect(() => {

  },[])

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar />
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
  )
};

export default App
