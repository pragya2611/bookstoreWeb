import '../src/styles/global.scss';
import HeaderComponent from './components/header/header.component';
import { PageConstants } from './core/constants';

function App() {
  const title = PageConstants.title;
  return (
    <div className="App">
      <HeaderComponent title={title}></HeaderComponent>
    </div>
  );
}

export default App;
