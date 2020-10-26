import React, {useState, useContext} from 'react';
// import DocscomplContextProvider from '../contexts/DocscomplContext';
import {DocsreqContext} from '../contexts/DocsreqContext';
import {DocscomplContext} from '../contexts/DocscomplContext';
import {Col, Row, Container} from 'react-bootstrap';
import check from '../assets/check.png';
import trash from '../assets/trash-alt-solid.svg';
import upload from '../assets/cloud-computing.png';

const Doclist = () => {
    const {docsreq} = useContext(DocsreqContext);
    const {docscompl} = useContext(DocscomplContext);
    return (
        <>
            <Container>
            {docsreq.map((doc, num) => {
                const slno = num + 1;
                if (doc.title == docsreq[docscompl.presentIndex].title) {
                 return (
                    <div className='doc-info'>
                        <Row>
                            <Col sm='1'>
                                <div className='sl-badge'>{slno}</div>
                            </Col>
                            <Col md="auto" style={{width: '50%', color: 'red', fontSize: 'x-large'}}>
                                {doc.title}
                            </Col>
                            <Col md="auto">
                            <img src = {upload} style = {{width:'25px'}}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {doc.desc}
                            </Col>
                        </Row>
                        <hr/>
                    </div> 
                 )
                }
                else {
                    if (num == 0 || num == 1 || num == 2) {
                    return (
                    <div className='doc-info'>
                        <Row>
                            <Col sm='1'>
                            <img src = {check} style = {{width:'35px'}}/>
                            </Col>
                            <Col md="auto" style={{width: '50%', color: 'black', fontSize: 'x-large'}}>
                                {doc.title}
                            </Col>
                            <Col md="auto">
                            <img src = {trash} style = {{width:'15px'}}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {doc.desc}
                            </Col>
                        </Row> 
                        <hr/>
                    </div>
                    )
                    }
                    else {
                        return (
                            <div className='doc-info'>
                                <Row>
                                    <Col sm='1'>
                                        <div className='sl-badge'>{slno}</div>
                                    </Col>
                                    <Col md="auto" style={{width: '50%', color: 'black', fontSize: 'x-large'}}>
                                        {doc.title}
                                    </Col>
                                    <Col md="auto">
                                    <img src = {upload} style = {{width:'25px'}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {doc.desc}
                                    </Col>
                                </Row> 
                                <hr/>
                            </div>
                            )
                    }
                }
            })}
            </Container>
        </>
    )
}

export default Doclist;

