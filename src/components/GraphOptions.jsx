import React, { useEffect, useState } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import Option from "./Option";
import "./GraphOptions.css";

const GraphOptions = ({data}) => {

    let _category = Object.keys(data)[0];
    let _product = Object.keys(data[_category])[0];
    let _brand = Object.keys(data[_category][_product])[0];

    const [category, setCategory] = useState(_category);
    const [product, setProduct] = useState(_product);
    const [brand, setBrand] = useState(_brand);

    const [categoryList, setCategoryList] = useState(Object.keys(data));
    const [productList, setProductList] = useState(Object.keys(data[_category]));
    const [brandList, setBrandList] = useState(Object.keys(data[_category][_product]));

    useEffect(() => {
        setProduct(Object.keys(data[category])[0]);
        setProductList(Object.keys(data[category]));
    }, [category])

    useEffect(() => {
        setProductList(Object.keys(data[category]));
        setBrand(Object.keys(data[category][product])[0]);
    }, [product])

    useEffect(() => {
        setBrandList(Object.keys(data[category][product]));
    }, [brand])

    return (
        <Container>
            <Stack
                direction="horizontal"
                className="graph-options-container"
            >
                <Option 
                    title={"Categoria"}
                    products={categoryList}
                    selected={category}
                    setSelected={setCategory}
                />
                <Option 
                    title={"Producto"}
                    products={productList}
                    selected={product}
                    setSelected={setProduct}
                />
                <Option 
                    title={"Marca"}
                    products={brandList}
                    selected={brand}
                    setSelected={setBrand}
                />
            </Stack>
            <Button
                onClick = {() => console.log(category, product, Object.keys(data[category][product]))}
            />
        </Container>
    );
}

export default GraphOptions;