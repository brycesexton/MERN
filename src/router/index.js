import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { useState } from 'react'
import styles from './AppRouter.module.scss';
import { getUser } from '../utilities/users-service';
import AuthPage from '../pages/AuthPage/AuthPage';
import NavBar from '../components/NavBar';

const AppRouter = () => {
	const [user, setUser] = useState(getUser())
	return (
		<Router>
			<main className={styles.App}>
			{/* <NavBar/> */}
			{
				user ?
			<>

			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={
						<Component 
							page={key} 
							user={user}
							setUser={setUser}
						/>
						}
					></Route>
				))}
				<Route path='/*' element={<Navigate to="/orders/new"/>}/>
			</Routes>
			</>
			:
		<AuthPage setUser={setUser}/>
		}
		</main>
		</Router>
	);
};

export default AppRouter;
