# 📁 Blog Frontend 프로젝트 구조 가이드(삭제예정)

> Next.js 15 + TypeScript + Tailwind CSS 기반 블로그 프론트엔드 프로젝트 구조 가이드

## 🎯 프로젝트 개요

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태관리**: Zustand
- **데이터페칭**: TanStack Query
- **HTTP 클라이언트**: Axios
- **UI 컴포넌트**: shadcn/ui
- **코드 품질**: ESLint + Prettier

## 📂 권장 폴더 구조

```
blog-frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                   # 인증 관련 페이지 그룹
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/              # 대시보드 페이지 그룹
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── posts/
│   │   │   │   ├── page.tsx          # 포스트 목록
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── page.tsx      # 포스트 상세
│   │   │   │   │   └── edit/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── create/
│   │   │   │       └── page.tsx
│   │   │   └── profile/
│   │   │       └── page.tsx
│   │   ├── api/                      # API 라우트
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   └── logout/
│   │   │   │       └── route.ts
│   │   │   ├── posts/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   └── users/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/                   # 재사용 가능한 컴포넌트
│   │   ├── ui/                       # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   ├── features/                 # 기능별 컴포넌트
│   │   │   ├── auth/
│   │   │   │   ├── login-form.tsx
│   │   │   │   ├── register-form.tsx
│   │   │   │   └── auth-button.tsx
│   │   │   ├── posts/
│   │   │   │   ├── post-card.tsx
│   │   │   │   ├── post-list.tsx
│   │   │   │   ├── post-editor.tsx
│   │   │   │   ├── post-detail.tsx
│   │   │   │   └── post-form.tsx
│   │   │   ├── comments/
│   │   │   │   ├── comment-list.tsx
│   │   │   │   ├── comment-item.tsx
│   │   │   │   └── comment-form.tsx
│   │   │   ├── search/
│   │   │   │   ├── search-bar.tsx
│   │   │   │   └── search-results.tsx
│   │   │   └── layout/
│   │   │       ├── header.tsx
│   │   │       ├── sidebar.tsx
│   │   │       ├── footer.tsx
│   │   │       └── navigation.tsx
│   │   └── providers/                 # Context Providers
│   │       ├── auth-provider.tsx
│   │       ├── theme-provider.tsx
│   │       └── query-provider.tsx
│   ├── hooks/                        # 커스텀 훅
│   │   ├── api/                       # API 관련 훅
│   │   │   ├── use-posts.ts
│   │   │   ├── use-auth.ts
│   │   │   ├── use-users.ts
│   │   │   └── use-comments.ts
│   │   └── ui/                        # UI 관련 훅
│   │       ├── use-modal.ts
│   │       ├── use-theme.ts
│   │       └── use-debounce.ts
│   ├── lib/                          # 유틸리티 및 설정
│   │   ├── api/                       # API 클라이언트
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   ├── auth.ts
│   │   │   ├── posts.ts
│   │   │   └── users.ts
│   │   ├── auth/                      # 인증 관련
│   │   │   ├── config.ts
│   │   │   └── utils.ts
│   │   ├── utils.ts                   # 일반 유틸리티
│   │   ├── validations.ts             # Zod 스키마
│   │   ├── constants.ts                # 상수
│   │   └── query-client.ts            # TanStack Query 설정
│   ├── stores/                        # Zustand 스토어
│   │   ├── auth-store.ts
│   │   ├── ui-store.ts
│   │   ├── posts-store.ts
│   │   └── comments-store.ts
│   └── types/                         # TypeScript 타입
│       ├── api.ts
│       ├── auth.ts
│       ├── posts.ts
│       ├── comments.ts
│       └── index.ts
├── public/                           # 정적 파일
│   ├── images/
│   │   ├── avatars/
│   │   ├── posts/
│   │   └── logos/
│   ├── icons/
│   └── favicon.ico
├── docs/                             # 프로젝트 문서
│   ├── api.md
│   ├── deployment.md
│   └── contributing.md
├── tests/                            # 테스트 파일
│   ├── __mocks__/
│   ├── components/
│   ├── hooks/
│   └── utils/
├── .env.local                        # 환경 변수
├── .env.example                      # 환경 변수 예시
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 컴포넌트 구조 가이드

### **1. UI 컴포넌트 (`components/ui/`)**
- shadcn/ui에서 제공하는 기본 컴포넌트들
- 재사용 가능한 순수 UI 컴포넌트
- 비즈니스 로직 없이 스타일링만 담당

```typescript
// 예시: components/ui/button.tsx
import { Button } from "@/components/ui/button"

export function CustomButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}
```

### **2. 기능별 컴포넌트 (`components/features/`)**
- 특정 기능에 특화된 컴포넌트
- 비즈니스 로직 포함
- 여러 UI 컴포넌트를 조합

```typescript
// 예시: components/features/posts/post-card.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PostCard({ post }) {
  return (
    <Card>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Button>Read More</Button>
    </Card>
  )
}
```

## 🔧 개발 도구 설정

### **필수 패키지**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "zustand": "^5.0.0",
    "@tanstack/react-query": "^5.0.0",
    "axios": "^1.0.0",
    "zod": "^3.0.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0",
    "prettier": "^3.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0"
  }
}
```

### **ESLint 설정**
```javascript
// eslint.config.mjs
import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]

export default eslintConfig
```

### **Prettier 설정**
```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "endOfLine": "lf"
}
```

## 📝 네이밍 컨벤션

### **파일명**
- **컴포넌트**: `PascalCase.tsx` (예: `PostCard.tsx`)
- **훅**: `camelCase.ts` (예: `usePosts.ts`)
- **유틸리티**: `camelCase.ts` (예: `formatDate.ts`)
- **타입**: `camelCase.ts` (예: `postTypes.ts`)

### **변수명**
- **컴포넌트**: `PascalCase` (예: `PostCard`)
- **함수/변수**: `camelCase` (예: `getUserPosts`)
- **상수**: `UPPER_SNAKE_CASE` (예: `API_BASE_URL`)

### **폴더명**
- **컴포넌트**: `kebab-case` (예: `post-card`)
- **기타**: `camelCase` (예: `userProfile`)

## 🚀 개발 워크플로우

### **1. 새 기능 개발**
1. `components/features/` 에서 해당 기능 폴더 생성
2. 필요한 UI 컴포넌트를 `components/ui/` 에서 가져오기
3. API 훅을 `hooks/api/` 에서 생성
4. 타입 정의를 `types/` 에서 추가

### **2. 컴포넌트 작성 순서**
1. 타입 정의 (`types/`)
2. API 훅 작성 (`hooks/api/`)
3. UI 컴포넌트 작성 (`components/ui/`)
4. 기능 컴포넌트 작성 (`components/features/`)
5. 페이지에서 사용 (`app/`)

### **3. 코드 리뷰 체크리스트**
- [ ] TypeScript 타입이 올바르게 정의되었는가?
- [ ] 컴포넌트가 재사용 가능한가?
- [ ] 에러 처리가 적절한가?
- [ ] 접근성이 고려되었는가?
- [ ] 반응형 디자인이 적용되었는가?

## 📚 추가 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)
- [TanStack Query 가이드](https://tanstack.com/query/latest)
- [Zustand 문서](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

---

> 💡 **팁**: 이 구조는 확장 가능하도록 설계되었습니다. 프로젝트 규모에 따라 폴더를 추가하거나 제거할 수 있습니다.
