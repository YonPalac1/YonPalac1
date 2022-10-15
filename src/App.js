import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './layout/Home';
import Examples from './layout/Examples';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div>
    <AppProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/YonPalac1/" />
        <Route element={<Examples />} path="/projects-examples" />
      </Routes>
      </BrowserRouter>
    </AppProvider>
    </div>
  );
}

export default App;
