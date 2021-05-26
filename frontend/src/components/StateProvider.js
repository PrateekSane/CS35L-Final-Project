import React, { useReducer } from 'react';

const initialState = { user: null };
const Ctx = React.createContext(initialState);

const StateProvider = (props) => {
	const [state, dispatch] = useReducer(
		(state, action) => {
			// write actions here
			if (action.type === 'SET_USER') {
				return {
					...state,
					user: action.user,
				};
			}
			return state;
		},
		initialState
	);

	return (
		<Ctx.Provider value={{ state, dispatch }}>{props.children}</Ctx.Provider>
	);
};

export { Ctx, StateProvider };
