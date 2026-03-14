# 폴더 구조 규칙

> 상세 구조와 목업 매핑은 `docs/FOLDER_STRUCTURE.md` 참조

## 라우트 그룹

| 그룹 | 역할 |
|------|------|
| `(auth)` | 로그인, 프로필 선택 |
| `(blog)` | 공개 블로그 (헤더+사이드바 레이아웃) |
| `(dashboard)` | 글 작성/수정, 프로필 관리 |

## 컴포넌트 배치

| 디렉토리 | 내용 |
|----------|------|
| `components/ui/` | shadcn/ui 기본 UI (Button, Card 등) |
| `components/features/{도메인}/` | 도메인별 컴포넌트 (auth, posts, blog, comments, layout, search) |
| `components/providers/` | React Context/Provider |
| `hooks/api/` | TanStack Query 기반 API 훅 (`use-posts.ts` 등) |
| `hooks/ui/` | UI 유틸 훅 (`use-modal.ts`, `use-debounce.ts` 등) |
| `lib/api/` | axios 기반 API 클라이언트 |
| `lib/auth/` | 인증 설정·유틸 |
| `stores/` | Zustand 스토어 |
| `types/` | 공유 타입 정의 |

## 네이밍 컨벤션

| 구분 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 파일 | kebab-case | `post-card.tsx` |
| 훅 파일 | kebab-case | `use-posts.ts` |
| 컴포넌트명 | PascalCase | `PostCard` |
| 훅명 | camelCase | `usePosts` |