import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>; // Ensure params is awaited
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params; // Await params before using

    if (!productId) {
        return { title: "Product Not Found" };
    }

    return {
        title: `Samsung ${productId}`,
    };
};

export default async function ProductDetails({ params }: { params: { productId: string } }) {
    return <p>Product Details {params.productId}</p>;
}
