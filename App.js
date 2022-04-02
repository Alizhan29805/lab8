
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent'; 
import Mainn from './Mainn';
import Sidebar from './Sidebar';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="User"/>
          <aside>
            <Sidebar/>
          </aside>
      </header>

      <main>
        <Mainn/>
      </main>

      <footer className="App-footer">
        <Ccomponent/>
          <nav>
            <Nav/>
          </nav>
      </footer>
    </div>
  );
}

export default App;
