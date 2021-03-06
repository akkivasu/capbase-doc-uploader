import React, {useState, createContext} from 'react';

export const DocsreqContext = createContext();

const DocsreqContextProvider = (props) => {
    const [docsreq, setDocsreq] = useState([
        {"title": "Form-1A", "desc": "The Form-1A provides the legal basis of ownership of an entity."},
        {"title": "Form-2X", "desc": "The Form-2X provides information about the nature of proprietary entities within a firm."},
        {"title": "Form-17B", "desc": "The Form-17B helps create a fiscal legal obligation between the enterprise and the State."},
        {"title": "Form-3A", "desc": "The Form-3A provides the legal basis of limited liability."},
        {"title": "Form-6S", "desc": "The Form-6S ensures environment-friendly practices."},
        {"title": "Form-2K", "desc": "The Form-2K provides the legal basis of ownership of an entity."},
        {"title": "Form-21F", "desc": "The Form-21F provides the legal basis of ownership of an entity."},
        {"title": "Form-7E", "desc": "The Form-7E provides the legal basis of ownership of an entity."},
        {"title": "Form-11B", "desc": "The Form-11B provides the legal basis of ownership of an entity."},
        {"title": "Form-9C", "desc": "The Form-9C provides information about the nature of proprietary entities within a firm."},
        {"title": "Form-14JJ", "desc": "The Form-14JJ provides the legal basis of ownership of an entity."},
        {"title": "Form-17X", "desc": "The Form-17X provides the legal basis of ownership of an entity."},
        {"title": "Form-32G", "desc": "The Form-32G provides the legal basis of ownership of an entity."},
        {"title": "Form-7D", "desc": "The Form-7D provides the legal basis of ownership of an entity."},
        {"title": "Form-77Q", "desc": "The Form-77Q provides the legal basis of ownership of an entity."},
        {"title": "Form-9Z", "desc": "The Form-9Z provides the legal basis of ownership of an entity."}
    ]);
    return (
        <DocsreqContext.Provider value = {{docsreq}}>
            {props.children}
        </DocsreqContext.Provider>
    )
}

export default DocsreqContextProvider;