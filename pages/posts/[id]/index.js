
import PostDetail from "@/components/PostList/PostDetail/PostDetails";
import { getStaticPaths } from "./getStaticPaths";
import { getStaticProps } from "./getStaticProps";
import { generateMetadata } from "./metadata";

export { getStaticPaths, getStaticProps };

export default function PostPage({ post }) {
    
    return (
        <div className="container mx-auto px-4 py-8">
            <PostDetail post={post} /> 
        </div>
    );
}

export const metadata = generateMetadata;
