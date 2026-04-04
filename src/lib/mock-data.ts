import type { User, Post, Category } from "@/types";

export const mockUser: User = {
  id: 1,
  name: "Julian Vane",
  username: "julian",
  email: "julian@meogle.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  bio: "건축적 미학과 90년대 초반의 컴퓨팅 에스테틱, 그리고 느린 디지털 소비의 철학에 집착합니다. 웹의 주변부에서 글을 씁니다.",
  location: "London, UK",
  readerCount: 12400,
  role: "user",
  label: "Author & Curator",
  createdAt: "2023-01-01T00:00:00Z",
  updatedAt: "2024-03-14T00:00:00Z",
};

export const mockAuthors: User[] = [
  mockUser,
  {
    id: 2,
    name: "Elena Vance",
    username: "elena",
    email: "elena@meogle.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    bio: "디지털 프런티어의 에디토리얼 리드. 기술과 문화의 교차점을 탐구합니다.",
    location: "Seoul, KR",
    readerCount: 8900,
    role: "user",
    label: "Editorial Lead",
    createdAt: "2023-03-15T00:00:00Z",
    updatedAt: "2024-10-24T00:00:00Z",
  },
  {
    id: 3,
    name: "Marcus Chen",
    username: "marcus",
    email: "marcus@meogle.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    bio: "미니멀리즘과 동양 미학의 융합을 추구하는 디자이너이자 작가.",
    location: "Tokyo, JP",
    readerCount: 6200,
    role: "user",
    label: "Design Writer",
    createdAt: "2023-06-01T00:00:00Z",
    updatedAt: "2024-09-15T00:00:00Z",
  },
  {
    id: 4,
    name: "Sofia Berg",
    username: "sofia",
    email: "sofia@meogle.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    bio: "건축과 디지털 공간의 경계를 탐험하는 큐레이터.",
    location: "Berlin, DE",
    readerCount: 4100,
    role: "user",
    label: "Curator",
    createdAt: "2023-08-20T00:00:00Z",
    updatedAt: "2024-11-01T00:00:00Z",
  },
  {
    id: 5,
    name: "Daniel Park",
    username: "daniel",
    email: "daniel@meogle.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    bio: "느린 기술과 의도적 디지털 소비에 대해 씁니다.",
    location: "Portland, US",
    readerCount: 3800,
    role: "user",
    label: "Tech Essayist",
    createdAt: "2023-09-10T00:00:00Z",
    updatedAt: "2024-10-20T00:00:00Z",
  },
  {
    id: 6,
    name: "Ines Song",
    username: "ines",
    email: "ines@meogle.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    bio: "타이포그래피와 시각 문화에 대한 에세이를 씁니다.",
    location: "Paris, FR",
    readerCount: 5300,
    role: "user",
    label: "Visual Essayist",
    createdAt: "2023-04-05T00:00:00Z",
    updatedAt: "2024-12-01T00:00:00Z",
  },
];

export const mockCategories: Category[] = [
  { id: "art", name: "Art", slug: "art", icon: "palette" },
  { id: "technology", name: "Technology", slug: "technology", icon: "cpu" },
  { id: "design", name: "Design", slug: "design", icon: "pen-tool" },
  { id: "culture", name: "Culture", slug: "culture", icon: "globe" },
  { id: "philosophy", name: "Philosophy", slug: "philosophy", icon: "book-open" },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "브루탈리스트 웹: 디지털 장수(Longevity)를 위한 제언",
    slug: "brutalist-web-longevity",
    content: "",
    excerpt:
      "왜 우리는 둥근 모서리와 화려한 그라데이션에 집착할까요? 브루탈리즘 건축의 원칙이 어떻게 더 정직하고 지속 가능하며, 영속적인 디지털 경험을 구축하는 데 도움이 되는지 탐구합니다.",
    category: "Architecture",
    coverImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop",
    author: "Julian Vane",
    authorId: 1,
    publishedAt: "2024-03-14T00:00:00Z",
    tags: ["Minimalism", "Editorial"],
    status: "published",
    views: 2340,
    likes: 187,
    readTime: 8,
    createdAt: "2024-03-14T00:00:00Z",
    updatedAt: "2024-03-14T00:00:00Z",
  },
  {
    id: 2,
    title: "과잉 연결 시대의 아날로그 의식",
    slug: "analog-rituals",
    content: "",
    excerpt:
      "만년필의 촉각적 피드백, 필름 카메라의 느린 작동음, 종이 신문을 읽는 의도적인 행위. 아날로그적 제약이 우리의 창의적 결과물을 어떻게 개선하는지 살펴봅니다.",
    category: "Culture",
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop",
    author: "Julian Vane",
    authorId: 1,
    publishedAt: "2024-02-28T00:00:00Z",
    tags: ["Analog", "Culture"],
    status: "published",
    views: 1890,
    likes: 142,
    readTime: 10,
    createdAt: "2024-02-28T00:00:00Z",
    updatedAt: "2024-02-28T00:00:00Z",
  },
  {
    id: 3,
    title: "단순함은 도덕적 선택이다",
    slug: "simplicity-moral-choice",
    content: "",
    excerpt:
      "정보 과부하의 세상에서 덜어내는 행위는 단순한 미적 취향 그 이상입니다. 그것은 우리의 주의력과 지적 자율성을 되찾기 위한 방법입니다.",
    category: "Philosophy",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    author: "Julian Vane",
    authorId: 1,
    publishedAt: "2024-01-12T00:00:00Z",
    tags: ["Philosophy", "Minimalism"],
    status: "published",
    views: 3120,
    likes: 256,
    readTime: 6,
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  {
    id: 4,
    title: "기계 속의 유령: 새로운 디지털 미니멀리즘을 항해하다",
    slug: "ghost-in-the-machine",
    content: `알고리즘이 지배하는 소음의 시대, 디지털의 침묵을 추구하는 행위는 이제 가장 고귀한 사치가 되었습니다. 우리는 끊임없는 연결의 굴레 속에서 인터페이스를 도구가 아닌 환경으로 받아들이며 살아가고 있습니다. 우리가 머무는 디지털 공간의 건축 방식은 우리의 집중력의 깊이를 결정짓지만, 슬프게도 대개의 구조물은 사색보다는 산만함을 위해 설계되었습니다.

## 의도의 건축 (The Architecture of Intent)

최근 부상하는 '레트로-디지털' 미학은 단순히 과거에 대한 향수가 아닙니다. 그것은 기능적인 반란입니다. 화려한 그라데이션, 둥근 버튼, 그리고 시선을 끄는 애니메이션 등 현대 SaaS 인터페이스의 장식성을 걷어냄으로써 우리는 웹의 본질적인 유틸리티로 회귀합니다. 이것이 바로 큐레이터의 디자인입니다. 의도적이고, 간결하며, 권위가 느껴지는 공간 말입니다.

> "진정한 미니멀리즘은 무언가의 부재가 아니라, 가장 적절한 정도의 존재다."

이 새로운 캔버스를 항해하며 디자이너의 역할은 '관심의 상인'에서 '공간의 창조자'로 변화합니다. 우리는 디지털 세계에서도 고급스러운 종이 잡지처럼, 콘텐츠가 숨을 쉬고 독자가 생각에 잠길 수 있는 장소를 마련해야 합니다. 이는 표준화된 그리드 패턴을 거부하고, 습관이 아닌 목적에 따라 시선을 유도하는 비대칭적인 레이아웃을 탐구하는 과정을 요구합니다.`,
    excerpt:
      "알고리즘이 지배하는 소음의 시대, 디지털의 침묵을 추구하는 행위는 이제 가장 고귀한 사치가 되었습니다.",
    category: "Technology",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    author: "Elena Vance",
    authorId: 2,
    publishedAt: "2024-10-24T00:00:00Z",
    tags: ["Minimalism", "Philosophy"],
    status: "published",
    views: 4560,
    likes: 312,
    readTime: 12,
    series: "디지털 프런티어",
    createdAt: "2024-10-24T00:00:00Z",
    updatedAt: "2024-10-24T00:00:00Z",
  },
  {
    id: 5,
    title: "디지털 매거진의 영혼에 닿는 타이포그래피",
    slug: "digital-magazine-typography",
    content: "",
    excerpt:
      "활자의 무게, 자간의 숨결, 행간의 여백. 타이포그래피가 디지털 매거진의 정체성을 어떻게 형성하는지 탐구합니다.",
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop",
    author: "Marcus Chen",
    authorId: 3,
    publishedAt: "2024-09-15T00:00:00Z",
    tags: ["Typography", "Design"],
    status: "published",
    views: 1780,
    likes: 98,
    readTime: 7,
    createdAt: "2024-09-15T00:00:00Z",
    updatedAt: "2024-09-15T00:00:00Z",
  },
  {
    id: 6,
    title: "AI와 창의성: 기계가 시를 쓸 수 있을까",
    slug: "ai-creativity-poetry",
    content: "",
    excerpt:
      "인공지능이 예술의 영역으로 진입하면서 우리는 '창의성'의 본질에 대해 다시 질문해야 합니다.",
    category: "Art",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    author: "Sofia Berg",
    authorId: 4,
    publishedAt: "2024-11-01T00:00:00Z",
    tags: ["AI", "Art", "Philosophy"],
    status: "published",
    views: 5230,
    likes: 421,
    readTime: 15,
    createdAt: "2024-11-01T00:00:00Z",
    updatedAt: "2024-11-01T00:00:00Z",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return mockPosts.find((post) => post.slug === slug);
}

export function getPostsByAuthor(username: string): Post[] {
  const author = mockAuthors.find((a) => a.username === username);
  if (!author) return [];
  return mockPosts.filter((post) => post.authorId === author.id);
}

export function getUserByUsername(username: string): User | undefined {
  return mockAuthors.find((a) => a.username === username);
}
