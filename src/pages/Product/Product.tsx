import {Await, useLoaderData} from "react-router-dom";
import type {Product as ProductProps} from "../../interfaces/product.interface.ts";
import {Suspense} from "react";

export const Product = () => {
    const data = useLoaderData() as ProductProps

    return (
        <div>
            <Suspense fallback={'Loading...'}>
                <Await resolve={data} >
                    Product - {data.name}
                </Await>
            </Suspense>
        </div>
    );
};