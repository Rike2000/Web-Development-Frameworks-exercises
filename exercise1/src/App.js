import './App.css';
import Header from './components/Header';
import Newest from './components/Newest';
import Menu from './components/Menu';
import News from './components/News';
import Most_read from './components/Most_read';

function App() {
  return (

    <div>
      <Header/>
      <Menu/>
      <Newest topic='ULKOMAAT' body='Jotakin ulkomaista'/>
      <Newest topic='KORONATILANNE' body='Tartunnat laskussa'/>
      <Newest topic='MAINOS' body='Sed eu nibh venenatis turpis condimentum faucibus. Quisque blandit ante vitae libero convallis fringilla'/>
      <div className='main'>
      <News/>
      <Most_read/>
      </div>
      
      
    </div>
  

  );
}

export default App;
