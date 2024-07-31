// src/App.js
import ModalComponent from "./components/ModalComponent/ModalComponent";
import PostList from "./components/PostList/PostList";
import { CRUDProvider } from "./context/CRUDContext";

function App() {
  return (
    <CRUDProvider>
      <div className="App">
        <PostList />
        <ModalComponent />
      </div>
    </CRUDProvider>
  );
}

export default App;
