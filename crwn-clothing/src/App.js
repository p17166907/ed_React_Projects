import { Routes, Route} from 'react-router-dom'
//Components
import Home from './components/routes/home.component'
///SCSS


const  App = () => {
  	return(
		<Routes><Route path='/home' element={ <Home /> }> </Route></Routes>
  	);
}

export default App;
