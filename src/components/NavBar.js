import { Link } from 'react-router-dom';
import Logo from '../components/Logo/Logo';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{/* {props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))} */}
			<Logo  className='logo-class'/>
		</nav>
	);
};

export default NavBar;
