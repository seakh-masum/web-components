import './App.css';
import { MyComponent, SkButton } from 'react-library';

function App() {
  return (
    <div className="App">
      <MyComponent first="Sk" last="Masum" />
      <SkButton label="Click Me" type="button" disabled={false} />
    </div>
  );
}

export default App;