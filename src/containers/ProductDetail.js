import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                                    .catch((err) => {
                                        console.log("Err", err);
                                    });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
           dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div className="container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ):(
            <div className="col-md-4">
                <div className="card" >
                    <img src={image}  className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-title">{price}</h5>
                        <h5 className="card-title">{category}</h5>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default ProductDetail;