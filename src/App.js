import { Allroutes } from "./routes/Allroutes";
import {Header ,Footer } from "./assests/components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;