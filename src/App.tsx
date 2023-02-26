
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import {GlobalStyle} from  './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </>
  );
}

export default App;
