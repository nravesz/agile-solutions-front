import React, { useState } from "react";
import { Container } from "react-bootstrap";
import GraphOptions from "./GraphOptions";

const GraphController = () => {
    const data = {
        "Ropa": {
            "Pantalón": {
                "Marca P 1": [100, 80, 30, 50],
                "Marca P 2": [90, 70, 20, 40]
            },
            "Remera": {
                "Marca R 1": [90, 20, 20, 30],
                "Marca R 2": [80, 10, 10, 20]
            }
        },
        "Comida": {
            "Cereales": {
                "Marca C 1": [50, 40, 60, 50],
                "Marca C 2": [40, 30, 50, 40]
            },
            "Frutas": {
                "Marca F 1": [80, 50, 60, 100],
                "Marca F 2": [70, 40, 50, 90]
            }
        }
    }

    return (
        <Container>
            <GraphOptions
                data={data}
            />
        </Container>
    );
}

export default GraphController;