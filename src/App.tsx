import './App.css';
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx";

function App() {

  return (
    <div id="APP">
      <header>
        <Header />
      </header>
      <main>
        <Editor />
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
