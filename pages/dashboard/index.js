import PostList from '@/components/PostList/PostList';
import { getServerSideProps } from '@/utils/getServerSidePostsProps';

export { getServerSideProps }

export default function Dashboard({ posts }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <PostList posts={posts} /> 
        </div>
    );
}
