import { Allroutes } from './routes/Allroutes';
import './App.css';
import { Header } from './components/Header';
function App() {
  return (
    <div className="App dark">
      <Header>
     <Allroutes />
      </Header>
    </div>
  );
}

export default App;
