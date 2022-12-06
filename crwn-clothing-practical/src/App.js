import {Routes, Route} from 'react-router-dom'
import {Navigation} from './routes/navigation/navigation.component'

export const App = () => {
  return(
  <>
    <Routes>
      <Route path ='/' element ={<Navigation/>}/>
    </Routes>
  </>
  );
}

