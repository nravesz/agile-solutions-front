import React, { useState } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import "./Option.css"

const Option = ({title, products}) => {
    const [selected, setSelected] = useState(products[0]);

    function renderOptions() {
        const optionsToRender = [];
        for (let i = 0; i < products.length; i++) {
            optionsToRender.push(
                <option
                    key={i}
                    value={products[i]}
                >
                    {products[i]}
                </option>
            )
        }
        return optionsToRender;
    }

    return (
        <Stack direction="horizontal" className="containter">
            <Container className="text-container">
                {title}:
            </Container>
            <Form.Select
                className="form"
                onChange={(e) => setSelected(e.target.value)}
            >
                {renderOptions()}
            </Form.Select>
        </Stack>
    )
}

export default Option;