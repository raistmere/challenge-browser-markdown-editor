import './App.css';
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx";
import Preview from "./components/Preview/Preview.tsx";

function App() {

  return (
    <div id="APP">
      <header>
        <Header />
      </header>
      <main>
        {/* <Editor /> */}
        <Preview />
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
