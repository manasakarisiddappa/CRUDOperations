// src/App.js
import { Provider } from "react-redux";
import ModalComponent from "./components/ModalComponent/ModalComponent";
import PostList from "./components/PostList/PostList";
import { CRUDProvider } from "./context/CRUDContext";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <CRUDProvider>
        <div className="App">
          <PostList />
          <ModalComponent />
        </div>
      </CRUDProvider>
    </Provider>
  );
}

export default App;
