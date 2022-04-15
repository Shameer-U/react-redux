import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log(products);
    //using promises
    // const fetchProducts =  () => {
    //     let headers = new Headers();
    //     headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //      headers.append('Access-Control-Allow-Credentials', 'true');
    //                                 const response =  fetch("https://fakestoreapi.com/products")
    //                                 .then(res => res.json())
    //                                 .then(
    //                                         json=>dispatch(setProducts(json))
    //                                 );
    // };

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products")
    //                                 .catch((err) => {
    //                                     console.log("Err", err);
    //                                 });
    //     console.log('response', response);
    //     dispatch(setProducts(response.data));
    // }

    // useEffect(() => {
    //     fetchProducts(); 
    // }, []);

    useEffect(() => {
        dispatch(fetchProducts()); 
    }, []);

    return (
        <div className="container row">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;