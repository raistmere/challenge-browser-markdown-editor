import './App.css';
import Header from "./components/header/Header.tsx";
import Editor from "./components/editor/Editor.tsx";
import Preview from "./components/preview/Preview.tsx";
import Sidebar from './components/sidebar/Sidebar.tsx';

function App() {

  return (
    <div id="APP" className='sidebar-open'>
      {/* Sidebar will push everything to the right when it is open */}
      <Sidebar />
      <header>
        <Header />
      </header>
      <main>
        <Editor />
        {/* <Preview /> */}
      </main>
    </div>
  )
}

export default App
