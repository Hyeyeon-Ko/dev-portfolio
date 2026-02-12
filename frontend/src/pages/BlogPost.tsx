import { useParams, useNavigate, Link } from "react-router-dom";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostSidebar from "../components/blog/BlogPostSidebar";
import { getPostDetailById, BLOG_POSTS } from "../constants/blog/mockBlog";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = id ? parseInt(id, 10) : NaN;
  const post = Number.isNaN(postId) ? undefined : getPostDetailById(postId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-500 mb-6">포스트를 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-primary font-semibold hover:underline">
          블로그 목록으로
        </Link>
      </div>
    );
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <BlogPostContent
            post={post}
            onPrev={prevPost ? () => navigate(`/blog/${prevPost.id}`) : undefined}
            onNext={nextPost ? () => navigate(`/blog/${nextPost.id}`) : undefined}
          />
        </div>
        <div className="lg:col-span-1">
          <BlogPostSidebar author={post.author} relatedPosts={post.relatedPosts ?? []} />
        </div>
      </div>
    </div>
  );
}
