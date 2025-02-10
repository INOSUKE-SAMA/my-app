import { notFound } from "next/navigation";

export default function ProductDetails({ params }: { params: { productId: string } }) {
    if(parseInt(params.productId)>10000){
            notFound();
        }
    return (
        <p>Product Details {params.productId}</p>
    );
}
