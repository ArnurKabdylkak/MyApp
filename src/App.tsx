import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import { AppProvider} from './AppContext';
import ComponentA from './ComponentA';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute 
                path="/dashboard" 
                element={<Dashboard />} 
              />
            } 
          />
          <Route path="/componentA" element={<ComponentA />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
export default App;
