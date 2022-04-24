import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
//import { Container } from "reactstrap";
import Option from "./Option";
import "./GraphOptions.css";

const GraphOptions = () => {
    const categoria = ["Ropa", "Comida", "Tecnología"];
    const productos = {
        "Ropa": ["Pantalón", "Remera", "Zapatillas"],
        "Comida": ["Cereales", "Pastas", "Frutas"],
        "Tecnología": ["Mouse", "Monitor", "Teclado"]
    }

    return (
        <Stack
            direction="horizontal"
            className="graph-options-container"
        >
            <Option title={categoria[0]}/>
            <Option title={categoria[1]}/>
            <Option title={categoria[2]}/>
        </Stack>

    );
}

export default GraphOptions;