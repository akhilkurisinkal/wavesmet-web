import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppProvider } from './AppContext';
import RoutePath from './RoutePath';
function App() {
  return (
    <AppProvider>
      <div id="app" className="App">
        <BrowserRouter>
          <RoutePath/>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}
export default App;
