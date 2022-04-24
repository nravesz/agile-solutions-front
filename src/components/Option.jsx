import React, { useState } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import "./Option.css"

const Option = ({title}) => {
    const [selected, setSelected] = useState(1);

    return (
        <Stack direction="horizontal" className="containter">
            <Container className="text-container">
                {title}:
            </Container>
            <Form.Select
                className="form"
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Stack>
    )
}

export default Option;