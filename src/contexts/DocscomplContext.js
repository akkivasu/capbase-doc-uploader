import React, {createContext, useState} from 'react';

export const DocscomplContext = createContext();

const DocscomplContextProvider = (props) => {
    const [docscompl, setDocscompl] = useState(
    {'presentIndex': 3,
     'titlesCompl': ['Form-1A', 'Form-2X', 'Form-17B'] });
    
    const addTitleCompl = (title) => {
        const newdocscompl = {...docscompl};
        newdocscompl.titlesCompl.push(title);
        setDocscompl(newdocscompl);
    }

    const setPresentIndex = (index) => {
        const newdocscompl = {...docscompl};
        newdocscompl.presentIndex = index;
        setDocscompl(newdocscompl);
    }

    return (
        <DocscomplContext.Provider value = {{docscompl, addTitleCompl, setPresentIndex}}>
            {props.children}
        </DocscomplContext.Provider>
    )
}

export default DocscomplContextProvider;