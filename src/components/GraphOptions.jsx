import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
//import { Container } from "reactstrap";
import Option from "./Option";
import "./GraphOptions.css";

const GraphOptions = () => {
    return (
        <Stack
            direction="horizontal"
            className="graph-options-container"
        >
            <Option />
            <Option />
            <Option />
        </Stack>
        // <Container className="container">
        //     <Row className="justify-content-md-center">
        //         <Col>
        //             <Option />
        //         </Col>
        //         <Col>
        //             <Option />
        //         </Col>
        //         <Col>
        //             <Option />
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default GraphOptions;