import t from '../../utility/types';

const userReduce = (state, { type, payload }) => {
	switch (type) {
		case t.CREATE_USER:
		case t.LOGIN_USER:
			if (payload.data.token) localStorage.setItem('TOKEN', payload.data.token);
			return {
				...state,
				...payload.data,
				message: payload.message,
			};

		case t.LOAD_USER:
			return {
				...state,
				...payload.data,
				message: payload.message,
			};

		case t.ERROR:
			return {
				...state,
				...payload,
			};

		case t.REMOVE_ERROR:
			return {
				...state,
				message: '',
			};

		default:
			break;
	}
};

export default userReduce;
