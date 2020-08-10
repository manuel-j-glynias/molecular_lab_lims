import React, {createContext, useReducer, useContext, ReducerState} from 'react';

export type EditorContentState = {
    isEditor: boolean;
};
export enum EditorContentActionTypes  {isEditor='isEditor'}

export type EditorContentActions =
    | {
    type: EditorContentActionTypes.isEditor;
    isEditor: boolean;
}


const initialState: EditorContentState = {
    isEditor:false
}

// By setting the typings here, we ensure we get intellisense in VS Code
const initialEditorContentContext: { EditorContentState: EditorContentState; setEditorContentState: React.Dispatch<EditorContentActions> } = {
    EditorContentState: initialState,
    setEditorContentState: () => {}
};

// No need to export this as we use it internally only
const EditorContentContext = createContext(initialEditorContentContext);

const reducer = (state: EditorContentState, action: EditorContentActions) => {
    switch (action.type) {

        case 'isEditor':
            return {
                isEditor: action.isEditor
            };
        default:
            return state;
    }
};

interface EditorContentProviderProps {
    children: any;
}


export function EditorContentProvider({ children }: EditorContentProviderProps) {
    // @ts-ignore
    const [state, dispatch] = useReducer(reducer,initialState);

    // rename the useReducer result to something more useful
    const EditorContentState = state;
    const setEditorContentState = dispatch;

    // pass the state and reducer to the context, dont forget to wrap the children
    return <EditorContentContext.Provider value={{ EditorContentState, setEditorContentState }}>{children}</EditorContentContext.Provider>;
}

export const useEditorContentState = () => useContext(EditorContentContext);