import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './MyNavbar';
import PreNav from './PreNav';
import Mycarousel from './Mycarousel';
import Myseparator from './Myseprator';
import Mycard from './Mycard';
import FooterNav from './FooterNav';

function App() {
  return (
    <div className="App">
      <PreNav></PreNav>
      <MyNavbar></MyNavbar>
      <Mycarousel></Mycarousel>
      <Myseparator></Myseparator>
      <Mycard></Mycard>
      <FooterNav></FooterNav>
    </div>
  );
}

export default App;
