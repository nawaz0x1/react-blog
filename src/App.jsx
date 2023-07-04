import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import Write from './routes/write';
import { UserContextProvider } from './contexts/userContext';
import Article from './routes/article';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="login" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="write" element={<Write />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
