
import './App.css';
import LeftComponent from './component/LeftComponent';
import CenterComponent from './component/CenterComponent';
import RightComponent from './component/RightComponent';
function App() {
  return (
    <div className="App flex justify-items-center">
      <LeftComponent/>
      <CenterComponent/>
      <RightComponent/>
    </div>
  );
}

export default App;
