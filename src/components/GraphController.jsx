import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import GraphOptions from "./GraphOptions";
import Graph from "./Graph";
import axios from 'axios';

const GraphController = () => {
    const [data, setData] = useState(undefined);

    const [category, setCategory] = useState("");
    const [product, setProduct] = useState("");
    const [brand, setBrand] = useState("");

    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [brandList, setBrandList] = useState([]);

    const [sales, setSales] = useState([]);

    const [canRender, setCanRender] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8000/api/options");
    //             setData(res.data["options"]);
    
    //             let _category = Object.keys(data)[0];
    //             let _product = Object.keys(data[_category])[0];
    //             let _brand = Object.keys(data[_category][_product])[0];
            
    //             useState(_category);
    //             useState(_product);
    //             useState(_brand);
            
    //             useState(Object.keys(data));
    //             useState(Object.keys(data[_category]));
    //             useState(Object.keys(data[_category][_product]));
            
    //             useState(data[_category][_product][_brand]);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     })();
    // }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/options");
                setData(res.data["options"]);
    
                // let _category = Object.keys(data)[0];
                // let _product = Object.keys(data[_category])[0];
                // let _brand = Object.keys(data[_category][_product])[0];
            
                // setCategory(_category);
                // setProduct(_product);
                // setBrand(_brand);
            
                // setCategoryList(Object.keys(data));
                // setProductList(Object.keys(data[_category]));
                // setBrandList(Object.keys(data[_category][_product]));
            
                // setSales(data[_category][_product][_brand]);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);

    useEffect(() => {
        if (data !== undefined) {
            let _category = Object.keys(data)[0];
            let _product = Object.keys(data[_category])[0];
            let _brand = Object.keys(data[_category][_product])[0];
        
            setCategory(_category);
            setProduct(_product);
            setBrand(_brand);
        
            setCategoryList(Object.keys(data));
            setProductList(Object.keys(data[_category]));
            setBrandList(Object.keys(data[_category][_product]));
        
            setSales(data[_category][_product][_brand]);

            setCanRender(true);
        }
    }, [data]);

    useEffect(() => {
        if (brand != "") {
            setSales(data[category][product][brand]);
        }
    }, [brand]);

    // const data = {
    //     "Ropa": {
    //         "Pantalón": {
    //             "Marca P 1": [300, 400, 500, 600],
    //             "Marca P 2": [200, 300, 400, 500]
    //         },
    //         "Remera": {
    //             "Marca R 1": [100, 500, 700, 200],
    //             "Marca R 2": [0, 400, 600, 100]
    //         }
    //     },
    //     "Comida": {
    //         "Cereales": {
    //             "Marca C 1": [200, 100, 600, 100],
    //             "Marca C 2": [100, 0, 500, 0]
    //         },
    //         "Frutas": {
    //             "Marca F 1": [500, 400, 300, 200],
    //             "Marca F 2": [400, 300, 200, 0]
    //         }
    //     }
    // }

    // if (data != undefined) {
    //     let _category = Object.keys(data)[0];
    //     let _product = Object.keys(data[_category])[0];
    //     let _brand = Object.keys(data[_category][_product])[0];
    
    //     const [category, setCategory] = useState(_category);
    //     const [product, setProduct] = useState(_product);
    //     const [brand, setBrand] = useState(_brand);
    
    //     const [categoryList, setCategoryList] = useState(Object.keys(data));
    //     const [productList, setProductList] = useState(Object.keys(data[_category]));
    //     const [brandList, setBrandList] = useState(Object.keys(data[_category][_product]));
    
    //     const [sales, setSales] = useState(data[_category][_product][_brand]);

    // }

    return (
        
        <Container>
            {canRender ? (
            <GraphOptions
                data={data}
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
        <Button
            onClick={() => console.log(sales)}
        />
        </Container>
    );
}

export default GraphController;