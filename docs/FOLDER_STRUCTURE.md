# Meogle 폴더 구조

> Figma 목업 기반 Next.js 15 App Router 폴더 구조 가이드

---

## 라우트 구조

| URL | 페이지 | 설명 |
|-----|--------|------|
| `/` | 랜딩/홈 | - |
| `/[username]` | 블로그 메인 | 소개글, 카테고리(다중선택), 게시글 그리드 |
| `/[username]?category=a,b` | 카테고리 필터 | 쿼리: 여러 카테고리 OR 조건 |
| `/[username]?tag=React` | 태그 필터 | 해당 태그 게시글만 |
| `/[username]/liked` | 좋아요한 글 | **내 프로필일 때만** 표시/접근 |
| `/[username]/posts/[slug]` | 아티클 상세 | MD 본문, 이미지, CRUD, 좋아요, 댓글/대댓글 |
| `/people` | 피플 | 작성자 탐색, 인기 에세이 |
| `/(dashboard)/*` | 대시보드 | 글 작성/수정, 프로필 관리 |

---

## 전체 폴더 구조

```
meogle/
├── src/
│   ├── app/
│   │   ├── (explore)/                  # 탐색/아카이브 (헤더+푸터, 사이드바 없음)
│   │   │   ├── layout.tsx
│   │   │   └── people/
│   │   │       └── page.tsx           # 작성자 탐색, 인기 에세이
│   │   │
│   │   ├── (blog)/                    # 공개 블로그 뷰 (헤더+사이드바)
│   │   │   ├── layout.tsx             # 블로그 레이아웃 (Header, Sidebar)
│   │   │   └── [username]/
│   │   │       ├── page.tsx           # 블로그 메인 (소개, 카테고리 다중선택, 포스트 그리드)
│   │   │       ├── liked/
│   │   │       │   └── page.tsx       # 좋아요한 글 (내 프로필일 때만)
│   │   │       └── posts/
│   │   │           └── [slug]/
│   │   │               └── page.tsx   # 아티클 상세 (MD, 이미지, CRUD, 좋아요, 댓글/대댓글)
│   │   │
│   │   ├── (dashboard)/                # 대시보드 (글 관리)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── posts/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx
│   │   │   └── profile/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                   # 랜딩
│   │
│   ├── components/
│   │   ├── ui/                        # shadcn/ui, 기본 UI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── avatar.tsx
│   │   │   └── ...
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── header-auth.tsx    # 헤더 인증 (GitHub Login 버튼 / My Profile 링크)
│   │   │   │   └── github-icon.tsx    # GitHub 공식 SVG 아이콘
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── header.tsx         # 로고, 프로필, 검색, 네비 (목업 3, 4)
│   │   │   │   ├── search-bar.tsx
│   │   │   │   ├── navigation.tsx     # 홈, Frontend, Backend, AI
│   │   │   │   ├── sidebar.tsx        # 작성자, 카테고리, 인기글 (목업 3, 4)
│   │   │   │   ├── footer.tsx
│   │   │   │   ├── logo.tsx           # Meogle 로고 (그라데이션)
│   │   │   │   └── help-icon.tsx
│   │   │   │
│   │   │   ├── posts/
│   │   │   │   ├── post-card.tsx      # 블로그 포스트 카드 (카테고리 색상, 태그)
│   │   │   │   ├── post-list.tsx
│   │   │   │   ├── post-detail.tsx    # 아티클 상세 (MD, 이미지, CRUD)
│   │   │   │   ├── post-meta.tsx      # 날짜, 조회, 댓글, 좋아요
│   │   │   │   ├── post-form.tsx
│   │   │   │   ├── post-editor.tsx
│   │   │   │   ├── markdown-content.tsx  # MD 렌더링 (react-markdown 등)
│   │   │   │   └── like-button.tsx
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── category-chips.tsx   # 카테고리 필터 (다중 선택)
│   │   │   │   ├── tag-cloud.tsx       # 태그 클릭 → 해당 게시글 필터
│   │   │   │   ├── author-profile-card.tsx
│   │   │   │   ├── category-list.tsx
│   │   │   │   ├── popular-posts.tsx   # 좋아요순 인기글
│   │   │   │   ├── intro-section.tsx   # 프로필 소개글
│   │   │   │   └── empty-state.tsx    # 빈 상태 (게시글 없음, 좋아요 없음)
│   │   │   │
│   │   │   ├── comments/
│   │   │   │   ├── comment-list.tsx
│   │   │   │   ├── comment-item.tsx
│   │   │   │   ├── comment-thread.tsx   # 대댓글 들여쓰기/재귀
│   │   │   │   └── comment-form.tsx
│   │   │   │
│   │   │   └── search/
│   │   │       ├── search-bar.tsx
│   │   │       └── search-results.tsx
│   │   │
│   │   └── providers/
│   │       └── query-provider.tsx
│   │
│   ├── hooks/
│   │   ├── api/
│   │   │   ├── use-posts.ts
│   │   │   ├── use-auth.ts
│   │   │   ├── use-profiles.ts
│   │   │   ├── use-users.ts
│   │   │   ├── use-comments.ts
│   │   │   ├── use-likes.ts
│   │   │   └── use-liked-posts.ts
│   │   └── ui/
│   │       ├── use-modal.ts
│   │       ├── use-theme.ts
│   │       └── use-debounce.ts
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── auth.ts
│   │   │   ├── posts.ts
│   │   │   ├── profiles.ts
│   │   │   └── users.ts
│   │   ├── auth/
│   │   │   ├── config.ts
│   │   │   └── utils.ts
│   │   ├── utils.ts
│   │   ├── validations.ts
│   │   ├── constants.ts
│   │   ├── category-colors.ts         # 카테고리별 배경/텍스트 색상 맵
│   │   └── query-client.ts
│   │
│   ├── stores/
│   │   ├── auth-store.ts
│   │   ├── profile-store.ts
│   │   ├── ui-store.ts
│   │   └── posts-store.ts
│   │
│   └── types/
│       └── index.ts
│
├── public/
│   ├── images/
│   │   ├── avatars/
│   │   ├── posts/
│   │   └── logos/
│   └── icons/
│       └── github.svg                 # GitHub Octocat
│
└── docs/
    ├── STYLE_GUIDE.md
    └── FOLDER_STRUCTURE.md
```

---

## 목업별 컴포넌트 매핑

### 헤더 인증

| 요소 | 컴포넌트 |
|------|----------|
| GitHub Login 버튼 (비로그인) | `HeaderAuth` → GitHub OAuth 직접 호출 |
| My Profile 링크 (로그인) | `HeaderAuth` → `/{username}` 이동 |
| GitHub 아이콘 | `GitHubIcon` (공식 SVG) |

### 목업 3: 블로그 목록

| 요소 | 컴포넌트 |
|------|----------|
| 헤더 전체 | `Header` (로고, 프로필, 검색, 네비) |
| 블로그 제목/설명 | 페이지 |
| 카테고리 칩 | `CategoryChips` |
| 포스트 카드 | `PostCard` |
| 사이드바 | `Sidebar` (AuthorProfileCard, CategoryList, PopularPosts) |

### 목업 4: 아티클 상세

| 요소 | 컴포넌트 |
|------|----------|
| 헤더 | `Header` (동일) |
| 목록으로 링크 | `PostDetail` 내부 |
| 카테고리 태그 | `Tag` (tag-category 스타일) |
| 제목, 메타, 공유 | `PostDetail` |
| 본문 | `PostDetail` + 마크다운 렌더러 |
| 사이드바 | `Sidebar` (동일) |

---

## 폴더별 역할

| 폴더 | 설명 |
|------|------|
| `(explore)` | 탐색/아카이브 (헤더+푸터, 사이드바 없음) |
| `(blog)` | 공개 블로그 (헤더+사이드바 공통) |
| `(dashboard)` | 글 작성/수정, 프로필 관리 |
| `components/ui` | shadcn, Avatar, Tag 등 기본 UI |
| `components/features/auth` | 헤더 인증 (GitHub Login / My Profile) |
| `components/features/layout` | Header, Sidebar, Logo |
| `components/features/blog` | 카테고리, 작성자 카드, 인기글 |
| `components/features/posts` | PostCard, PostDetail, PostForm |

---

## 네이밍 컨벤션

| 구분 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 파일 | kebab-case | `post-card.tsx` |
| 훅 파일 | kebab-case | `use-posts.ts` |
| 컴포넌트명 | PascalCase | `PostCard` |
| 훅명 | camelCase | `usePosts` |

---

## 데이터 흐름 & 권한

| 기능 | 권한 | 비고 |
|------|------|------|
| 프로필 진입 | 누구나 | `/[username]` 공개 |
| 좋아요한 글 | 본인만 | `/[username]/liked` → `username === currentUser` 일 때만 |
| 글 CRUD | 본인 글만 | 수정/삭제는 작성자만 |
| 댓글/대댓글 | 로그인 사용자 | 작성, 수정, 삭제 |
| 좋아요 | 로그인 사용자 | 토글 |

---

## Supabase 연동 참고

- 로그인: Supabase Auth (GitHub OAuth)
- 프로필: Supabase DB (profiles 테이블)
- 포스트: Supabase DB (posts, categories, tags)
- 댓글: posts_comments (parent_id로 대댓글)
- 좋아요: post_likes (user_id, post_id)
