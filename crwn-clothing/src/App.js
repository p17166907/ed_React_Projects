import { Routes, Route, Outlet} from 'react-router-dom'
//Components
import Home from './components/routes/home.component'
///SCSS

const Navigation = () => 
{
	return(
		<div>
			<div>
				<h1>This is the navigation bar</h1>
			</div>
			{/* to be able to persist this component on the browser to a specified path we use the ->> <Outlet/> */}
			<Outlet/>
		</div>
	)
}

const  App = () => {
  	return(
		<Routes>
			{/* nav and home page persisted when path = '/' */}
			<Route path='/' element={ <Navigation /> }>
				<Route index element={<Home/>}/>
			</Route>
		</Routes>
  	);
}

export default App;
