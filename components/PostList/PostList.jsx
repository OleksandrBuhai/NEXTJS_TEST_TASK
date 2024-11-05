import Link from 'next/link';

const PostList = ({ posts }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts?.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`}>
                        <div className="h-[15rem]  bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PostList;
