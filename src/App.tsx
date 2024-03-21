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

  // This method handles opening a document
  const openDocument = (id: string) => {
    let document = (myDocuments.find((element) => element.id === id));

    if(document?.content || document?.content === "") {
      setCurrentDocument(document);
    }
  };

  // This method handles creating a new document and adding it to myDocuments
  const createNewDocument = () => {
    let newDocument:Document = {id:(crypto.randomUUID).toString(), createdAt: "00-00-0000", name:"new-document.md", content:""};
    setMyDocuments((prev) => [...prev, newDocument]);
  };

  // This method handles changing the current document name
  const changeDocumentName = (value: string) => {
    let updateDocument: Document = {...currentDocument};
    updateDocument.name = value;
    setCurrentDocument(updateDocument);
  }

  // This method handles updating the markdown of the currentDocument
  const updateMarkdown = (value: string) => {
    let updateDocument: Document = {...currentDocument};
    updateDocument.content = value;
    setCurrentDocument(updateDocument);
  };

  // This method handles saving the changes that are applied to the currentDocument and updating myDocuments
  const saveDocumentChanges = () => {
    let updateDocument: Document = currentDocument;
    let newMyDocuments: Document[] = [];
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

  // This method handles deleting the currentDocument from myDocuments
  // If we need a deletDocument by ID then we can make a new method that handles that.
  const deleteCurrentDocument = () => {

  }

  return (
    isSidebar
      ? <div id="APP" className='sidebarActive'>
          <Sidebar myDocuments={myDocuments} openDocument={openDocument} createNewDocument={createNewDocument}/>
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name} 
              changeDocumentName={changeDocumentName} saveDocumentChanges={saveDocumentChanges}
            />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={currentDocument.content} updateMarkdown={updateMarkdown}/>
            <Preview markdown={currentDocument.content}/>
          </main>
        </div>
      : <div id="APP">
          <header>
            <Header isSidebar={isSidebar} openSidebar={openSidebar} closeSidebar={closeSideBar} documentName={currentDocument.name} 
              changeDocumentName={changeDocumentName} saveDocumentChanges={saveDocumentChanges}
            />
          </header>
          <main className={isPreview ? "previewActive" : ""}>
            <Editor markdown={currentDocument.content} updateMarkdown={updateMarkdown}/>
            <Preview markdown={currentDocument.content}/>
          </main>
        </div>
  )
};

export default App;
