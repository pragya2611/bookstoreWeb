import '../src/styles/global.scss';
import HeaderComponent from './components/header/header.component';
import { PageConstants } from './core/constants';

function App() {
  const title = PageConstants.title;
  return (
    <div className="App">
      <HeaderComponent title={title}></HeaderComponent>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
