import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log('ProductComponent', products);
    //const { id, title } = products[0];
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="col-md-4" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card" >
                        <img src={image}  className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h5 className="card-title">{price}</h5>
                            <h5 className="card-title">{category}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return <>{renderList}</>;

};

export default ProductComponent;