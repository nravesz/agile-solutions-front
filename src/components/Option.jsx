import React, { Fragment } from "react";
import { Container, Form, Stack } from "react-bootstrap";
import "./Option.css"

const Option = () => {
    return (
        // <Container className="containter">
        //     <p>Categoría</p>
        //     <Form.Select aria-label="Default select example">
        //         <option value="1">One</option>
        //         <option value="2">Two</option>
        //         <option value="3">Three</option>
        //     </Form.Select>
        // </Container>
        // <Stack direction="horizontal" gap={1}>
        //     <Fragment>
        //         <p className="text">Categoría</p>
        //     </Fragment>
        //     <Form.Select aria-label="Default select example">
        //         <option value="1">One</option>
        //         <option value="2">Two</option>
        //         <option value="3">Three</option>
        //     </Form.Select>
        // </Stack>
        <Stack direction="horizontal" className="containter">
            <Container className="text-container">
                Categoria:
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