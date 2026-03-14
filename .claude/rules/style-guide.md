# 스타일 가이드 규칙

> 전체 디자인 토큰과 컴포넌트 스펙은 `docs/STYLE_GUIDE.md` 참조

## 핵심 색상 토큰

- 브랜드: `brand-blue(#5D7EFF)`, `brand-purple(#A77BF3)`, `brand-gradient`
- Primary: `primary(#6B4BEF)` — 활성 칩, 인기글 번호, 선택된 프로필 테두리
- 배경: `background(#F8F8F8)`, `card(#FFFFFF)`, `input(#EEEEEE)`
- 카테고리별 색상: `lib/category-colors.ts`에 정의

## 타이포그래피

- Sans: Geist Sans (기본), Mono: Geist Mono (코드)
- 제목 `text-3xl~4xl font-bold`, 본문 `text-base`, 보조 `text-sm text-muted-foreground`

## 레이아웃

- 메인:사이드바 비율 ≈ 2:1
- 블로그 포스트 2열 그리드, 프로필 카드 3열 그리드
- 반응형: `sm(640)` → `md(768)` → `lg(1024, 사이드바 표시)` → `xl(1280)`
- CSS 변수: `--header-height: 64px`, `--sidebar-width: 320px`, `--container-max: 1280px`

## 컴포넌트 스타일 원칙

- 카드: `bg-card`, `rounded-lg(12px)`, `shadow-card`
- 버튼: `rounded-md(8px)`, 다크 버튼 `#1A1A1A`
- 카테고리 칩: 다중 선택, 활성 `bg-primary text-white` / 비활성 `bg-muted`
- 좋아요: 비활성 `Heart outline` / 활성 `Heart filled text-destructive`
- 아이콘: `lucide-react` 사용

## 마크다운 렌더링

- `h1: text-2xl`, `h2: text-xl`, `h3: text-lg`
- 코드 블록: `bg-muted p-4 rounded-lg font-mono text-sm`
- 인용: `border-l-4 border-primary pl-4 italic`