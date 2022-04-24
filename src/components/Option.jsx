import React, { Fragment } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import "./Option.css"

const Option = ({title}) => {
    return (
        <Stack direction="horizontal" className="containter">
            <Container className="text-container">
                {title}:
            </Container>
            <Form.Select className="form">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Stack>
    )
}

export default Option;