import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
     <Home></Home>
     <Meals></Meals>
    </div>
  );
}

export default App;
