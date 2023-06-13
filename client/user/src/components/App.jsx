import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserRoutes from './UserRoutes';
import { useUser } from '../contexts/user/UserProvider';

function App() {
	const { loadUser } = useUser();

	useEffect(() => {
		if (localStorage.TOKEN) loadUser();
	}, []);

	return (
		<>
			<UserRoutes />
			<ToastContainer />
		</>
	);
}

export default App;
