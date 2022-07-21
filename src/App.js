import { Button } from 'antd';
import 'App.css';

function App() {
  return (
    <div>
      <button>
        hello react.
      </button>
      <Button type="primary" onClick={ () => console.log("hello!") }>
        Hello, Antd.
      </Button>
    </div>
  );
}

export default App;
