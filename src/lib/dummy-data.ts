import type { Profile, Post, Comment, Category } from "@/types"

export const DUMMY_PROFILES: Profile[] = [
  {
    id: 1,
    username: "kimjinmyeong",
    name: "김진명",
    description: "개발자이자 여행을 좋아하는 블로거",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kim",
    postCount: 12,
    visitCount: 22338,
  },
  {
    id: 2,
    username: "shimwooseok",
    name: "심우석",
    description: "AX개발자로 일상과 감성을 기록합니다",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=shim",
    postCount: 8,
    visitCount: 15200,
  },
  {
    id: 3,
    username: "ominsang",
    name: "오민상",
    description: "백엔드 개발자, 인프라에 관심이 많습니다",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=omin",
    postCount: 5,
    visitCount: 8900,
  },
]

export const DUMMY_CATEGORIES: Category[] = [
  { id: "all", name: "전체", slug: "all", count: 12 },
  { id: "frontend", name: "Frontend", slug: "frontend", count: 4 },
  { id: "backend", name: "Backend", slug: "backend", count: 3 },
  { id: "ux", name: "UX", slug: "ux", count: 2 },
  { id: "ai", name: "AI", slug: "ai", count: 2 },
  { id: "infra", name: "Infra", slug: "infra", count: 1 },
]

export const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    slug: "react-server-components-guide",
    title: "React Server Components 완벽 가이드",
    excerpt:
      "React Server Components(RSC)는 서버에서만 렌더링되는 컴포넌트로, 번들 사이즈를 줄이고 초기 로딩 속도를 개선합니다.",
    content: `# React Server Components 완벽 가이드

## Server Components란?

Server Components는 서버에서만 렌더링되는 React 컴포넌트입니다. 클라이언트로 JavaScript를 전송하지 않아 번들 사이즈를 크게 줄일 수 있습니다.

## 주요 특징

- **Zero bundle size**: 클라이언트에 JS를 보내지 않음
- **직접 DB 접근**: 서버에서만 실행되므로 DB, 파일시스템 등 직접 접근 가능
- **보안**: API 키, 시크릿 등을 서버에만 유지

## 사용 예시

\`\`\`tsx
async function BlogPost({ slug }: { slug: string }) {
  const post = await db.posts.findUnique({ where: { slug } })
  return <article>{post.content}</article>
}
\`\`\`

[Learn React](https://react.dev)에서 더 알아보세요.`,
    category: "frontend",
    author: "김진명",
    authorId: 1,
    authorUsername: "kimjinmyeong",
    publishedAt: "2026-02-19",
    tags: ["React", "Next.js", "Server Components"],
    status: "published",
    views: 2341,
    likes: 128,
    commentCount: 28,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    createdAt: "2026-02-19T10:00:00Z",
    updatedAt: "2026-02-19T10:00:00Z",
  },
  {
    id: 2,
    slug: "chatgpt-api-chatbot",
    title: "ChatGPT API로 AI 챗봇 만들기",
    excerpt:
      "OpenAI ChatGPT API를 활용해 간단한 AI 챗봇을 구현하는 방법을 소개합니다.",
    content: "# ChatGPT API로 AI 챗봇 만들기\n\n본문 내용...",
    category: "ai",
    author: "김진명",
    authorId: 1,
    authorUsername: "kimjinmyeong",
    publishedAt: "2026-02-18",
    tags: ["ChatGPT", "AI", "OpenAI"],
    status: "published",
    views: 2987,
    likes: 95,
    commentCount: 15,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    createdAt: "2026-02-18T14:00:00Z",
    updatedAt: "2026-02-18T14:00:00Z",
  },
  {
    id: 3,
    slug: "nodejs-performance",
    title: "Node.js 성능 최적화 가이드",
    excerpt:
      "Node.js 애플리케이션의 성능을 개선하기 위한 실전 팁과 베스트 프랙티스를 정리했습니다.",
    content: "# Node.js 성능 최적화\n\n본문 내용...",
    category: "backend",
    author: "김진명",
    authorId: 1,
    authorUsername: "kimjinmyeong",
    publishedAt: "2026-02-17",
    tags: ["Node.js", "Performance", "Backend"],
    status: "published",
    views: 1523,
    likes: 67,
    commentCount: 12,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    createdAt: "2026-02-17T09:00:00Z",
    updatedAt: "2026-02-17T09:00:00Z",
  },
  {
    id: 4,
    slug: "design-system-basics",
    title: "디자인 시스템 기초",
    excerpt:
      "일관된 UI를 위한 디자인 시스템 구축의 기본 개념과 구현 방법을 알아봅니다.",
    content: "# 디자인 시스템\n\n본문 내용...",
    category: "ux",
    author: "김진명",
    authorId: 1,
    authorUsername: "kimjinmyeong",
    publishedAt: "2026-02-16",
    tags: ["Design System", "UX", "Tailwind"],
    status: "published",
    views: 987,
    likes: 45,
    commentCount: 8,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    createdAt: "2026-02-16T11:00:00Z",
    updatedAt: "2026-02-16T11:00:00Z",
  },
]

export const DUMMY_COMMENTS: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "박지훈",
    authorId: 10,
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    content: "RSC에 대해 잘 정리해주셨네요! 특히 Zero bundle size 부분이 인상적이었습니다.",
    likes: 5,
    createdAt: "2026-02-19T12:30:00Z",
    updatedAt: "2026-02-19T12:30:00Z",
    replies: [
      {
        id: 2,
        postId: 1,
        author: "김진명",
        authorId: 1,
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kim",
        content: "감사합니다! 추가로 궁금한 점 있으면 말씀해주세요.",
        parentId: 1,
        likes: 2,
        createdAt: "2026-02-19T13:00:00Z",
        updatedAt: "2026-02-19T13:00:00Z",
      },
    ],
  },
  {
    id: 3,
    postId: 1,
    author: "이수진",
    authorId: 11,
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    content: "Next.js 15에서 RSC가 기본이 되었죠. 실무에서 적용해보니 확실히 체감됩니다.",
    likes: 3,
    createdAt: "2026-02-19T14:00:00Z",
    updatedAt: "2026-02-19T14:00:00Z",
  },
]

export const DUMMY_TAGS = [
  "React",
  "Next.js",
  "Node.js",
  "Performance",
  "UX",
  "ChatGPT",
  "Tailwind",
  "Design System",
  "Server Components",
]
