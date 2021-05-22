import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Wedgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {
        !user ? (
          <Login/>
        ) : (
          <>
            <Header/>
            <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Wedgets/>
            </div>
          </>
        )
      }

    </div>
  );
}

export default App;
