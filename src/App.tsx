import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';
import myDocumentsDefault from "../data.json" // This data will be used as a default data set if there is none that exists in local storage


type Document = {
  id:string,
  createdAt:string,
  name:string,
  content:string
};


function App() {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [myDocuments, setMyDocuments] = useState<Array<Document>>(myDocumentsDefault);
  const [currentDocument, setCurrentDocument] = useState<Document>(myDocumentsDefault[0]);
  const [markdown, setMarkdown] = useState<string>("# Welcome to Markdown");
  
  const updateMarkdown = (value: string) => {
    setMarkdown(value);
  };

  const openSidebar = () => {
    setIsSidebar(true);
  };

  const closeSideBar = () => {
    setIsSidebar(false);
  };

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
  };

  const createNewDocument = () => {
    let newDocument:Document = {id:(crypto.randomUUID).toString(), createdAt: "00-00-0000", name:"new-document.md", content:""};
    setMyDocuments((prev) => [...prev, newDocument]);
  };

  const changeDocumentName = (value: string) => {
    let updateDocument: Document = currentDocument;
    let newMyDocuments: Document[] = [];
    updateDocument.name = value;
    myDocuments.forEach((document) => {
      if(document.id === updateDocument.id) {
        newMyDocuments.push(updateDocument);
      }
      else {
        newMyDocuments.push(document);
      }
      
    });

    setMyDocuments(newMyDocuments);
  }

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar myDocuments={myDocuments} openDocument={openDocument} createNewDocument={createNewDocument}/>
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name} changeDocumentName={changeDocumentName}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name} changeDocumentName={changeDocumentName}/>
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={markdown} updateMarkdown={updateMarkdown}/>
            <Preview markdown={markdown}/>
          </main>
        </div>
  )
};

export default App;
