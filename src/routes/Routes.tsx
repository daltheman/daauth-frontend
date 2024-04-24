import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



import Users from '../pages/Users';
import AuthProvider from '../AuthProvider';

const Routes: React.FC = () => {
    return (
        <>
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
            </Routes>
            </>
    );
};

export default Routes;