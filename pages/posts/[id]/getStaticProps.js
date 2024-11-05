export async function getStaticProps({ params }) {
    
    const { id } = params; 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        return {
            notFound: true, 
        };
    }
    
    const post = await res.json(); 
    return {
        props: { post }, 
        revalidate: 10, 
    };
}
