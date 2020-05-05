import React from 'react';

const ProductSection=({ categoryName, upvotes, setArticleInfo })=>{
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/learn-node/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        console.log(body)
    }
    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Add Upvote</button>
        </div>
    );
}

export default ProductSection;