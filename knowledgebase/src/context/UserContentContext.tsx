import React, {createContext, useReducer, useContext, ReducerState} from 'react';

export type UserContentState = {
    userID: string;
};
export enum UserContentActionTypes  {userID='userID'}

export type UserContentActions =
    | {
    type: UserContentActionTypes.userID;
    userID: string;
}


const initialState: UserContentState = {
    userID:'user_20200419151555871926'
}

// By setting the typings here, we ensure we get intellisense in VS Code
const initialUserContentContext: { UserContentState: UserContentState; setUserContentState: React.Dispatch<UserContentActions> } = {
    UserContentState: initialState,
    // will update to the reducer we provide in UserContentProvider
    setUserContentState: () => {}
};

// No need to export this as we use it internally only
const UserContentContext = createContext(initialUserContentContext);

const reducer = (state: UserContentState, action: UserContentActions) => {
    switch (action.type) {

        case 'userID':
            return {
                userID: action.userID
            };
        default:
            return state;
    }
};

interface UserContentProviderProps {
    children: any;
}


export function UserContentProvider({ children }: UserContentProviderProps) {
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer,initialState);

    // rename the useReducer result to something more useful
    const UserContentState = state;
    const setUserContentState = dispatch;

    // pass the state and reducer to the context, dont forget to wrap the children
    return <UserContentContext.Provider value={{ UserContentState, setUserContentState }}>{children}</UserContentContext.Provider>;
}

export const useUserContentState = () => useContext(UserContentContext);