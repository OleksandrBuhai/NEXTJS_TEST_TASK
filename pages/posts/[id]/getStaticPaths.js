
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() }, 
    }));

    return {
        paths,
        fallback: true, 
    };
}
