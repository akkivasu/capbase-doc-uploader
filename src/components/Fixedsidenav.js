import React, {useContext} from 'react'
import {DocscomplContext} from '../contexts/DocscomplContext';
import {DocsreqContext} from '../contexts/DocsreqContext';

const Fixedsidenav = () => {
    const {docscompl} = useContext(DocscomplContext);
    const {docsreq} = useContext(DocsreqContext);
    const presentDocName = docsreq[docscompl.presentIndex].title;
    return (
        <>
            <div className = 'fixed-sidenav'>
    <p style = {{position: 'relative', top: '50%'}}>Drag-n-drop your <span style = {{color: '#059eda'}}>{presentDocName}</span></p>
            </div>
        </>
    )
}

export default Fixedsidenav;