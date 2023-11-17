
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100" style={{height:'100vh'}}>
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded bg-light text-dark'>      
          <h1>Counter Application</h1>
          <Counter/>
      </div>

    </div>
  );
}

export default App;
 