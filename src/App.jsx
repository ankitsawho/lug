import './App.css';
import Background from './components/Background';
import Dock from './components/Dock';
import TopPanel from './components/TopPanel';
import Window from './components/Window';


function App() {
  return (
    <div className="app">
      <TopPanel />
      <Window />
      <Background />
      <Dock />
    </div>
  );
}

export default App;
