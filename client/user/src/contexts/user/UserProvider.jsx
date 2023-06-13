import React, { createContext, useContext, useReducer } from 'react';
import userReduce from './userReducer';
import Axios from '../../utility/Axios';
import t from '../../utility/types';
import handleApiErr from '../../utility/handleApiErr';

const userContext = createContext();

export const useUser = () => useContext(userContext);

function UserProvider({ children }) {
	const initialState = {
		user: null,
		isLoading: false,
		token: null,
		message: null,
	};

	const [state, dispatch] = useReducer(userReduce, initialState);

	const createUser = async (data) => {
		try {
			const res = await Axios.post('/user/register', { ...data });
			dispatch({
				type: t.CREATE_USER,
				payload: res.data,
			});
		} catch (err) {
			handleApiErr(dispatch, err);
		}
	};

	const loginUser = async (data) => {
		try {
			const res = await Axios.post('/user/login', { ...data });
			dispatch({
				type: t.LOGIN_USER,
				payload: res.data,
			});
		} catch (err) {
			handleApiErr(dispatch, err);
		}
	};

	const loadUser = async () => {
		try {
			const res = await Axios.get('/user/profile');
			dispatch({
				type: t.LOAD_USER,
				payload: res.data,
			});
		} catch (err) {
			handleApiErr(dispatch, err);
			localStorage.setItem('TOKEN', '');
		}
	};

	return (
		<userContext.Provider
			value={{
				...state,
				createUser,
				loginUser,
				loadUser,
			}}
		>
			{children}
		</userContext.Provider>
	);
}

export default UserProvider;
