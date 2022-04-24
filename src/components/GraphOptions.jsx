import React, { useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import Option from "./Option";
import "./GraphOptions.css";

const GraphOptions = ({
    data,
    category, setCategory, categoryList, setCategoryList,
    product, setProduct, productList, setProductList,
    brand,  setBrand, brandList, setBrandList
    }) => {

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
                    title={"Category"}
                    products={categoryList}
                    selected={category}
                    setSelected={setCategory}
                />
                <Option 
                    title={"Product"}
                    products={productList}
                    selected={product}
                    setSelected={setProduct}
                />
                <Option 
                    title={"Brand"}
                    products={brandList}
                    selected={brand}
                    setSelected={setBrand}
                />
            </Stack>
        </Container>
    );
}

export default GraphOptions;