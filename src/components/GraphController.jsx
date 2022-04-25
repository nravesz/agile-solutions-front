import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import GraphOptions from "./GraphOptions";
import Graph from "./Graph";
import axios from 'axios';

const GraphController = () => {
    const [options, setOptions] = useState(undefined);

    const [category, setCategory] = useState("");
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");

    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [brandList, setBrandList] = useState([]);

    const [sales, setSales] = useState([]);

    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/options");
                setOptions(res.data["options"]);

            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

    useEffect(() => {
        if (options !== undefined) {
            let _category = Object.keys(options)[0];
            let _product = Object.keys(options[_category])[0];
            let _brand = options[_category][_product][0];
        
            setCategory(_category);
            setProduct(_product);
            setBrand(_brand);
        
            setCategoryList(Object.keys(options));
            setProductList(Object.keys(options[_category]));
            setBrandList(options[_category][_product]);

            setCanRender(true);
        }
    }, [options]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/sales", {
                    params: {
                        "category": category,
                        "product": product,
                        "brand": brand
                    }
                });
                setSales(res.data["sales"]);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, [brand]);

    return (
        
        <Container>
            {canRender ? (
            <GraphOptions
                data={options}
                category={category} setCategory={setCategory}
                product={product} setProduct={setProduct}
                brand={brand} setBrand={setBrand}
                categoryList={categoryList} setCategoryList={setCategoryList}
                productList={productList} setProductList={setProductList}
                brandList={brandList} setBrandList={setBrandList}
            />
            ) : <></> }
            {canRender ? (
                <Graph
                    sales={sales}
                />
                    ) : <></>}
        </Container>
    );
}

export default GraphController;