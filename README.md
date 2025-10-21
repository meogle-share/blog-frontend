# 📁 Blog Frontend

> Next.js 15 + TypeScript + Tailwind CSS 기반 블로그 프론트엔드 프로젝트

## 🚀 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태관리**: Zustand
- **데이터페칭**: TanStack Query
- **HTTP 클라이언트**: Axios
- **UI 컴포넌트**: shadcn/ui
- **코드 품질**: ESLint + Prettier

## 📂 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
├── components/             # 재사용 가능한 컴포넌트
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── features/           # 기능별 컴포넌트
│   └── providers/          # Context Providers
├── hooks/                  # 커스텀 훅
│   ├── api/               # API 관련 훅
│   └── ui/                # UI 관련 훅
├── lib/                    # 유틸리티 및 설정
│   ├── api/                # API 클라이언트
│   └── auth/               # 인증 관련
├── stores/                 # Zustand 스토어
└── types/                  # TypeScript 타입
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치
```bash
pnpm install
```

### 2. 환경 변수 설정
```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 필요한 환경 변수를 설정하세요
```

### 3. 개발 서버 실행
```bash
pnpm dev
```

### 4. 빌드
```bash
pnpm build
```

## 📋 사용 가능한 스크립트

- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 프로덕션 빌드
- `pnpm start` - 프로덕션 서버 실행
- `pnpm lint` - ESLint 실행

## 🎯 주요 기능

- ✅ Next.js 15 App Router
- ✅ TypeScript 설정
- ✅ Tailwind CSS v4
- ✅ shadcn/ui 컴포넌트
- ✅ TanStack Query + DevTools
- ✅ Zustand 상태 관리
- ✅ Axios HTTP 클라이언트
- ✅ ESLint + Prettier

## 📚 문서

- [프로젝트 구조 가이드](./PROJECT_STRUCTURE.md)
- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 새 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.