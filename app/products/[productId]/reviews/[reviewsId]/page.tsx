export default function ReviewDetails({ params }: { 
    params: { 
        reviewsId: string; 
        productId: string 
    } 
}) {
    return (
        <h1>Review {params.reviewsId} for product {params.productId}</h1>
    );
}
