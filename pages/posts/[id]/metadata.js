
export default function generateMetadata({ params }) {

    const { id } = params;
    const title = `Post ${id} - My Blog`;
    const description = `Read more about post ${id}. Here's the content...`;

    return {
        title,
        description, 
        openGraph: {
            title,
            description, 
            type: 'article', 
        },
        twitter: {
            title,
            description,
        },
    };
}
