import logo from './logo.svg';
import './App.css';
import { AppParentContainer, GlobalStyled } from './AppSC';
import Main from './page/Main';

function App() {
  return (
    <AppParentContainer>
      <GlobalStyled />
      <Main />
    </AppParentContainer>
  );
}

export default App;
