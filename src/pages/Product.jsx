import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = () => {
    const {products} = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  p-10 ">
            {
                products.map((product) => <ProductCard key={product} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Product;