export default function Docs({ params }: { params: { slug?: string[] } }) { 
    if (!params.slug || params.slug.length === 0) { 
        return <h1>Welcome to Docs Page</h1>; 
    } 

    if (params.slug.length === 2) { 
        return <h1>Viewing docs of {params.slug[0]} and concept of {params.slug[1]}</h1>; 
    } else if (params.slug.length === 1) { 
        return <h1>Viewing docs of {params.slug[0]}</h1>; 
    } 

    return <h1>Welcome to Docs Page</h1>; 
}
