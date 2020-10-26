import React from "react";
import { Container, Row, Col, Grid } from "react-bootstrap";

const Footer = () => (
  <div className="footer">
    <Container fluid>
        <Row style={{textAlign: 'center'}}>
            <Col><i class="fa fa-twitter" aria-hidden="true"></i></Col>
            <Col><i class="fa fa-linkedin" aria-hidden="true"></i></Col>
            <Col><i class="fa fa-facebook" aria-hidden="true"></i></Col>
            <Col><i class="fa fa-spotify" aria-hidden="true"></i></Col>
        </Row>
    </Container>
  </div>
);

export default Footer;