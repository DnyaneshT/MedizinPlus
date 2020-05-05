import React, { useState, useEffect } from 'react';


const ProductPage=({match})=>{
    const category = match.params.category;

    const [productInfo, setProductInfo] = useState({ pname: "",category:"", price:10, quantity:100 });
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/products/${category}`);
            const body = await result.json();
            setProductInfo(body);
            console.log(body)
        }
        fetchData();
    }, [category]);

    return(
        <>
            <h1>{productInfo.pname}</h1>
            <h1>{productInfo.category}</h1>
            <h1>{productInfo.price}</h1>
            <h1>{productInfo.quantity}</h1>
            
        </>
    )
}

/*
const ProductPage=({match})=>{
    const category = match.params.category;

    const [productInfo, setProductInfo] = useState({ upvotes: 0, comments: [] });
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${category}`);
            const body = await result.json();
            setProductInfo(body);
            console.log(body)
        }
        fetchData();
    }, [category]);

    return(
        <>
            <h1>{productInfo.upvotes}</h1>
            <h1>{productInfo.category}</h1>
            <h1>
                {productInfo.comments.map((comment, key) => (
                    <div className="comment" key={key}>
                        <h4>{comment.username}</h4>
                        <p>{comment.comments}</p>
                    </div>
                ))}
            </h1>
            
        </>
    )
}
*/


export default ProductPage;