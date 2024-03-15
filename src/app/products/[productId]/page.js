import React from 'react';

export function generateMetadata({params}) {
    let id=params.productId;

    return {
        title:"Product "+id,
        description:"Product "+id + " description"
    }
}

function Page({params}) {
    return (
        <div className="container my-5">
            <h1>Product detail page {params.productId}</h1>
        </div>
    );
}

export default Page;