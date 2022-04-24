import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GraphOptions from "./GraphOptions";
import Graph from "./Graph";

const GraphController = () => {
    const data = {
        "Ropa": {
            "Pantalón": {
                "Marca P 1": [300, 400, 500, 600],
                "Marca P 2": [200, 300, 400, 500]
            },
            "Remera": {
                "Marca R 1": [100, 500, 700, 200],
                "Marca R 2": [0, 400, 600, 100]
            }
        },
        "Comida": {
            "Cereales": {
                "Marca C 1": [200, 100, 600, 100],
                "Marca C 2": [100, 0, 500, 0]
            },
            "Frutas": {
                "Marca F 1": [500, 400, 300, 200],
                "Marca F 2": [400, 300, 200, 0]
            }
        }
    }

    let _category = Object.keys(data)[0];
    let _product = Object.keys(data[_category])[0];
    let _brand = Object.keys(data[_category][_product])[0];

    const [category, setCategory] = useState(_category);
    const [product, setProduct] = useState(_product);
    const [brand, setBrand] = useState(_brand);

    const [categoryList, setCategoryList] = useState(Object.keys(data));
    const [productList, setProductList] = useState(Object.keys(data[_category]));
    const [brandList, setBrandList] = useState(Object.keys(data[_category][_product]));

    const [sales, setSales] = useState(data[_category][_product][_brand]);

    useEffect(() => {
        setSales(data[category][product][brand]);
    }, [brand]);

    return (
        <Container>
            <GraphOptions
                data={data}
                category={category} setCategory={setCategory}
                product={product} setProduct={setProduct}
                brand={brand} setBrand={setBrand}
                categoryList={categoryList} setCategoryList={setCategoryList}
                productList={productList} setProductList={setProductList}
                brandList={brandList} setBrandList={setBrandList}
            />

        <Graph
            sales={sales}
        />
        </Container>
    );
}

export default GraphController;