import { Allroutes } from './routes/Allroutes';
import './App.css';
import { Header,Footer } from './components';
function App() {
  return (
    <div className="App dark">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
