import logo from './logo.svg';
import './App.css';
import Shop from './component/Shop/Shop';
import Data from './component/Data/Data';

function App() {
  return (
    <div>
      <h1 className='page-name'>Stationary Corner</h1>
      <Shop></Shop>
      <Data></Data>
    </div>
  );
}

export default App;
