import { Routes, Route } from 'react-router-dom';
import {Home} from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import {SignIn} from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      {/* This Route component specifies that the Home component should be rendered when the URL path matches the parent Route component's path attribute of '/ */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

