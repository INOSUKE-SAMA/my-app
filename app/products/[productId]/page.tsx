export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <p>Product Details {params.productId}</p>
    );
}
