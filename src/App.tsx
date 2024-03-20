import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';
import myDocumentsDefault from "../data.json" // This data will be used as a default data set if there is none that exists in local storage


function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [myDocuments, setMyDocuments] = useState<Array<{id:string, createdAt:string, name:string, content:string}>>(myDocumentsDefault);
  const [currentDocument, setCurrentDocument] = useState<{id:string, createdAt:string, name:string, content:string}>(myDocumentsDefault[0]);
  const [markdown, setMarkdown] = useState<string>("# Welcome to Markdown");
  
  const updateMarkdown = (value: string) => {
    setMarkdown(value);
  }

  const openSidebar = () => {
    setIsSidebar(true);
  }

  const closeSideBar = () => {
    setIsSidebar(false);
  }

  // const getMyDocuments = () => {
  //   // We want to check if local storage save exists, if so we will use myDocuments from local storage rather than the default.
  //   if(localStorage.getItem("myDocuments") !== null) return localStorage.getItem("myDocuments");
  //   // If it does not have a local storage then we want to create a new local storage save using the default data.
    
  // }

  const openDocument = (id: string) => {
    let document = (myDocuments.find((element) => element.id === id));

    if(document?.content || document?.content === "") {
      setMarkdown(document.content); // Blank content ("") won't load so I have to check for blanks.
      setCurrentDocument(document);
    }
  }

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar myDocuments={myDocuments} openDocument={openDocument}/>
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
  )
};

export default App
