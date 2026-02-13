import type { FC } from "react";
import { HeartIcon, MessageCircleIcon } from "./BlogIcons";
import CodeBlock from "./CodeBlock";
import type { PostDetail } from "../../types/blog";

type Props = {
  post: PostDetail;
  onPrev?: () => void;
  onNext?: () => void;
};

const BlogPostContent: FC<Props> = ({ post, onPrev, onNext }) => {
  const { author, category, date, readTime, title, subtitle, likeCount, commentCount, tags } = post;

  return (
    <article className="lg:pr-12">
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 font-medium">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tight">
          {category}
        </span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-slate-900 leading-[1.15] mb-8">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-primary">{subtitle}</span>
          </>
        )}
      </h1>

      <div className="flex items-center justify-between mb-12 py-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full ring-2 ring-primary/20"
          />
          <div>
            <div className="font-bold text-slate-800">{author.name}</div>
            <div className="text-sm text-gray-400">{author.title}</div>
          </div>
        </div>

        {/* 다른 버튼으로 대체 예정 */}
        {/* <div className="flex gap-2">
          <button
            type="button"
            className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors border border-gray-100 shadow-sm"
            aria-label="공유"
          >
            <ShareIcon />
          </button>
          <button
            type="button"
            className="p-2.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors border border-gray-100 shadow-sm"
            aria-label="북마크"
          >
            <BookmarkIcon />
          </button>
        </div> */}
      </div>

      <div className="max-w-none text-base">
        <p className="text-gray-600 leading-relaxed mb-8">
          React 19에서 도입되는 컴파일러와 액션 API가 가져올 개발자 경험의 변화에 대해 정리했습니다. 더 이상{" "}
          <code className="text-primary bg-primary/10 px-1 rounded font-semibold">useMemo</code>를
          남발하지 않아도 되는 날이 올까요?
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
          리액트 컴파일러: 메모이제이션의 종말
        </h2>
        <p className="text-gray-600 mb-6">
          그동안 리액트 개발자들은 성능 최적화를 위해{" "}
          <code className="bg-gray-100 px-1 rounded font-mono text-sm">useMemo</code>와{" "}
          <code className="bg-gray-100 px-1 rounded font-mono text-sm">useCallback</code>을 수동으로
          관리해야 했습니다. 하지만 React 19의 &apos;Forget&apos; 컴파일러는 이 과정을 자동화합니다.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-slate-700 bg-primary/5 py-6 rounded-r-xl">
          &quot;가장 좋은 코드는 작성하지 않아도 되는 코드입니다. 컴파일러가 우리의 의도를 파악하고
          최적화할 수 있다면, 우리는 비즈니스 로직에 더 집중할 수 있습니다.&quot;
        </blockquote>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">새로운 액션 API</h2>
        <p className="text-gray-600">
          데이터 변형(Mutation)을 처리하는 방식이 비약적으로 발전했습니다.{" "}
          <code className="text-primary bg-primary/10 px-1 rounded font-semibold">useActionState</code>
          와 같은 훅을 통해 폼 제출 상태, 에러 처리, 그리고 낙관적 업데이트를 훨씬 간결하게 작성할 수
          있게 되었습니다.
        </p>

        <CodeBlock />

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">결론</h2>
        <p className="text-gray-600 mb-12">
          React 19은 단순한 버전 업데이트를 넘어, 리액트가 지향하는 &apos;추상화된 복잡성&apos;을
          완성해가는 과정입니다. 프레임워크가 더 똑똑해질수록 우리의 도구는 더 투명해질 것입니다.
        </p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-slate-100 text-slate-500 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between p-8 bg-white rounded-3xl border border-gray-100 shadow-sm mb-20">
        <div className="flex gap-6">
          <button
            type="button"
            className="flex items-center gap-2.5 text-slate-500 hover:text-rose-500 transition-colors group"
          >
            <HeartIcon className="group-hover:fill-rose-500 group-hover:stroke-rose-500" />
            <span className="font-bold">{likeCount}</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors"
          >
            <MessageCircleIcon />
            <span className="font-bold">{commentCount}</span>
          </button>
        </div>
        <div className="flex gap-4 text-sm font-bold text-gray-400">
          <button type="button" onClick={onPrev} className="hover:text-primary transition-colors">
            이전 글
          </button>
          <button type="button" onClick={onNext} className="hover:text-primary transition-colors">
            다음 글
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;
