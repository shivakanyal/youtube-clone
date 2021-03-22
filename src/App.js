import "./App.css";
import Header from "./components/Header/header";
import RecommandedVideos from "./components/RecommandedVideos/recommandedVideos";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components-container">
        <Sidebar />
        <RecommandedVideos />
      </div>
    </div>
  );
}

export default App;
