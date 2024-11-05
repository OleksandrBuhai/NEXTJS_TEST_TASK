import Link from "next/link";

const PostDetail = ({ post }) => {

    if (!post) {
        return (
            <div className="container mx-auto px-6 py-10">
                <h2 className="text-red-500 text-center">Post not found</h2>
                <Link href="/dashboard" className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 shadow hover:shadow-lg">
                    Back to Posts
                </Link>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white py-4 px-6">
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.body}</p>
                    <Link 
                        href="/dashboard" 
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 shadow hover:shadow-lg"
                    >
                        Back to Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
