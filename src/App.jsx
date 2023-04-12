import { Routes, Route } from 'react-router-dom'
import Users from './components/requests/Users'
import Posts from './components/requests/Posts'
import Photos from './components/requests/Photos'
import AllContent from './components/allContent/AllContent'
import LogIn from './components/logIn/LogIn'
// import Layout from './components/Layout/Layout'



function App() { 
    return (
		<>
			<Routes>
				{/* <Route path='/' element={<Layout/>}> */}
					<Route path='/' element={<LogIn/>}/>
					<Route path='content' element={<AllContent/>}>
						<Route path='users' element={<Users />}/>
						<Route path='posts' element={<Posts />}/>
						<Route path='photos' element={<Photos />}/>
					</Route>
				{/* </Route> */}
			</Routes>
		</>
    )
}


export default App
