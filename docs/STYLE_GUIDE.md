# Meogle 스타일 가이드

> Figma 목업 기반 프로젝트 디자인 토큰 및 사용 가이드

---

## 1. 브랜드 & 색상 (Colors)

### 1.1 브랜드 그라데이션 (로고, 강조)

| 토큰 | HEX | 용도 |
|------|-----|------|
| `brand-blue` | `#5D7EFF` | 로고 그라데이션 시작, 링크, 정보 텍스트 |
| `brand-purple` | `#A77BF3` | 로고 그라데이션 끝 |
| `brand-gradient` | `linear-gradient(90deg, #5D7EFF, #A77BF3)` | 로고 배경, CTA 강조 |

### 1.2 Primary Accent (활성 상태)

| 토큰 | HEX | 용도 |
|------|-----|------|
| `primary` | `#6B4BEF` | 카테고리 칩 활성, 인기글 번호, 선택된 프로필 테두리 |
| `primary-foreground` | `#FFFFFF` | primary 위 텍스트 |

### 1.3 텍스트 색상

| 토큰 | HEX | 용도 |
|------|-----|------|
| `foreground` | `#000000` | 제목, 주요 텍스트 |
| `foreground-secondary` | `#333333` | 부제목, 카드 제목 |
| `muted-foreground` | `#555555` | 설명, 본문 |
| `muted-foreground-light` | `#666666` | 메타데이터, 이용약관, 푸터 |

### 1.4 배경 색상

| 토큰 | HEX | 용도 |
|------|-----|------|
| `background` | `#F8F8F8` | 페이지 배경 (그라데이션 베이스) |
| `background-gradient` | `#F8F8F8` → `#E0E8FF` / `#ECE0FF` | 로그인 페이지 배경 |
| `card` | `#FFFFFF` | 카드, 로그인 카드, 사이드바 |
| `input` | `#EEEEEE` | 검색바 배경 |

### 1.5 버튼 & 인터랙션

| 토큰 | HEX | 용도 |
|------|-----|------|
| `button-ghost` | `#1A1A1A` | GitHub 로그인 버튼 등 다크 버튼 |
| `button-ghost-foreground` | `#FFFFFF` | 다크 버튼 위 텍스트 |
| `link` | `#5D7EFF` | 로그아웃, 링크 |

### 1.6 태그 & 칩

| 토큰 | HEX | 용도 |
|------|-----|------|
| `tag-active-bg` | `#6B4BEF` | 활성 카테고리 칩 배경 |
| `tag-inactive-bg` | `#F0F0F0` | 비활성 카테고리 칩 배경 |
| `tag-category-bg` | `#E0F7FA` | 아티클 카테고리 태그 배경 (연한 시안) |
| `tag-category-text` | `#00BCD4` | 카테고리 태그 텍스트 |
| `tag-hash-bg` | `#F0F0F0` | 해시태그 (#React, #Next.js) 배경 |
| `tag-hash-text` | `#555555` | 해시태그 텍스트 |

**카테고리별 색상 (포스트 카드용)** – 카테고리마다 다른 배경색 적용

| 카테고리 | 배경 | 텍스트 |
|----------|------|--------|
| frontend | `#E0F7FA` (시안) | `#00BCD4` |
| backend | `#E8F5E9` (초록) | `#4CAF50` |
| ai | `#E3F2FD` (파랑) | `#2196F3` |
| ux | `#F3E5F5` (보라) | `#9C27B0` |
| infra | `#FFEBEE` (빨강) | `#F44336` |

**배지 (Badge)** – 네비게이션 카운트 등

| 토큰 | HEX | 용도 |
|------|-----|------|
| `badge` | `#F44336` | 알림 배지 (예: Infra 1) |

### 1.7 보조 & 테두리

| 토큰 | HEX | 용도 |
|------|-----|------|
| `border` | `#E5E5E5` | 카드 테두리 |
| `border-placeholder` | `#DDDDDD` | 프로필 추가 카드 점선 |
| `muted` | `#F0F0F0` | 비활성 배경 |

### 1.8 시맨틱 색상 (알림용)

| 토큰 | 용도 |
|------|------|
| `success` | 성공 메시지 |
| `warning` | 경고 |
| `destructive` | 에러, 삭제 |
| `info` | 안내 (brand-blue 사용 가능) |

---

## 2. 타이포그래피

### 2.1 폰트

- **Sans**: Geist Sans (기본, 한/영)
- **Mono**: Geist Mono (코드 블록)

### 2.2 크기 & 용도

| 용도 | 클래스 | Figma 기준 | 사용처 |
|------|--------|------------|--------|
| 로고/메인 타이틀 | `text-4xl font-bold` | 48px | "Meogle" 페이지 타이틀 |
| 블로그 제목 | `text-3xl font-bold` | 28px | "김진명의 블로그" |
| 카드 제목 | `text-2xl font-bold` | 24px | 프로필명, 포스트 제목 |
| 섹션 제목 | `text-xl font-semibold` | 20px | "카테고리", "인기글" |
| 부제목 | `text-lg` | 18px | "블로그를 시작할 프로필을 선택하세요" |
| 본문 | `text-base` | 16px | 설명, 버튼 텍스트 |
| 보조 텍스트 | `text-sm text-muted-foreground` | 14px | 메타데이터, 카드 설명 |
| 캡션 | `text-xs text-muted-foreground` | 12px | 이용약관, 푸터 |

---

## 3. 간격 (Spacing)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `1` | 4px | 아이콘-텍스트 간격 |
| `2` | 8px | 작은 패딩 |
| `3` | 12px | 버튼 패딩, 태그 간격 |
| `4` | 16px | 카드 패딩 |
| `5` | 20px | 섹션 내부 간격 |
| `6` | 24px | 섹션 간격 |
| `8` | 32px | 큰 블록 간격 |

---

## 4. 둥글기 (Border Radius)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `radius-sm` | 6px | 작은 태그 |
| `radius-md` | 8px | 버튼, 입력 필드, 프로필 카드 |
| `radius-lg` | 12px | 로그인 카드, 블로그 카드 |
| `radius-xl` | 16px | 모달, 큰 카드 |

---

## 5. 그림자 (Shadows)

| 토큰 | 용도 |
|------|------|
| `shadow-card` | 카드, 로그인 카드, 사이드바 섹션 (은은한 elevation) |
| `shadow-button` | 버튼 호버 (선택) |

```
shadow-card: 0 1px 3px rgba(0,0,0,0.08)
```

---

## 6. 레이아웃

### 6.1 그리드

- **블로그 포스트**: 2열 그리드 (메인 영역)
- **프로필 카드**: 3열 그리드 (넓은 화면)

### 6.2 비율

- **메인 콘텐츠** : **사이드바** ≈ 2 : 1

### 6.3 반응형 브레이크포인트

| 이름 | 최소 너비 | 용도 |
|------|-----------|------|
| `sm` | 640px | 모바일 가로 |
| `md` | 768px | 태블릿 |
| `lg` | 1024px | 데스크톱 (사이드바 표시) |
| `xl` | 1280px | 넓은 화면 |

---

## 7. 컴포넌트별 스펙

### 7.1 로고 (Meogle)

- 배경: `brand-gradient`
- 텍스트: `#FFFFFF`, bold
- border-radius: `radius-md`

### 7.2 로그인 카드

- 배경: `#FFFFFF`
- shadow: `shadow-card`
- border-radius: `radius-lg`
- 패딩: `p-6` ~ `p-8`

### 7.3 GitHub 버튼

- 배경: `#1A1A1A`
- 텍스트: `#FFFFFF`
- 아이콘: GitHub Octocat (흰색)
- border-radius: `radius-md`

### 7.4 프로필 카드

- 선택됨: `border-2 border-primary`
- 미선택: `border border-border`
- "프로필 추가": `border-2 border-dashed border-placeholder`

### 7.5 카테고리 칩 (다중 선택)

- **다중 선택 가능** – 여러 카테고리 동시 선택 시 OR 조건으로 필터
- 활성: `bg-primary text-primary-foreground`
- 비활성: `bg-muted text-foreground-secondary`

### 7.6 블로그 포스트 카드

- 이미지 → 카테고리 태그 → 제목 → 요약 → 태그들 → 메타데이터(날짜, 조회, 댓글)

### 7.7 인기글 번호

- 원형 배경: `bg-primary text-primary-foreground`
- 크기: 작은 원 (예: 24px)

### 7.8 헤더

- 로고(Meo: purple, gle: black) | 프로필 | 검색바 | 네비게이션(홈, Frontend, Backend, AI, Infra+배지)

### 7.9 좋아요 버튼

- 비활성: `Heart` outline, `text-muted-foreground`
- 활성: `Heart` filled, `text-destructive` 또는 `text-primary`

### 7.10 댓글 & 대댓글

- 댓글: `CommentItem` – 아바타, 작성자, 내용, 좋아요, 답글 버튼
- 대댓글: `padding-left`로 들여쓰기 (예: 24px~32px), 왼쪽 보더 또는 배경 차이로 구분

### 7.11 마크다운 본문 (MD 렌더링)

| 요소 | 스타일 |
|------|--------|
| h1 | `text-2xl font-bold mt-8 mb-4` |
| h2 | `text-xl font-semibold mt-6 mb-3` |
| h3 | `text-lg font-semibold mt-4 mb-2` |
| p | `text-base leading-7 mb-4` |
| ul/ol | `list-disc/Decimal pl-6 mb-4` |
| code (inline) | `bg-muted px-1.5 py-0.5 rounded text-sm font-mono` |
| pre/code block | `bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm` |
| blockquote | `border-l-4 border-primary pl-4 italic text-muted-foreground` |
| img | `rounded-lg max-w-full` |
| a | `text-link underline hover:no-underline` |

### 7.12 빈 상태 (Empty State)

- 좋아요한 글이 없음, 게시글이 없음 등
- 아이콘 + 안내 문구 + (선택) CTA 버튼
- `text-muted-foreground`, 중앙 정렬

---

## 8. 아이콘

| 용도 | 아이콘 | 라이브러리 |
|------|--------|------------|
| 검색 | Search (돋보기) | lucide-react |
| 로그아웃 | LogOut + ChevronRight | lucide-react |
| 프로필 추가 | Plus | lucide-react |
| 도움말 | HelpCircle | lucide-react |
| 날짜 | Calendar | lucide-react |
| 조회수 | Eye | lucide-react |
| 댓글 | MessageCircle | lucide-react |
| 공유 | Share2 | lucide-react |
| 목록으로 | ArrowLeft | lucide-react |
| 좋아요 | Heart (outline/fill) | lucide-react |
| GitHub | custom SVG | public/icons |

---

## 9. 다크 모드

모든 토큰은 `.dark`에서 대응값 정의.  
브랜드 그라데이션은 다크 모드에서도 유지 가능 (로고).

---

## 10. 전역 CSS (globals.css)

### 10.1 레이아웃 토큰

| 변수 | 값 | 용도 |
|------|-----|------|
| `--header-height` | 64px | 헤더 높이 |
| `--sidebar-width` | 320px | 사이드바 너비 (lg 이상) |
| `--container-max` | 1280px | 전체 컨테이너 최대 너비 |
| `--content-max` | 720px | 메인 콘텐츠 최대 너비 |
| `--touch-target-min` | 44px | 터치 타겟 최소 (iOS/Android) |
| `--safe-area-*` | env() | iOS 노치, 홈 인디케이터 |

### 10.2 레이아웃 유틸리티 클래스

| 클래스 | 용도 |
|--------|------|
| `container-global` | 중앙 정렬, max-width, Safe Area 패딩 |
| `content-main` | 블로그 본문 영역 |
| `card-base` | 카드 스타일 (배경, 둥글기, 그림자) |
| `layout-blog` | 메인+사이드바 플렉스 (lg에서 2열) |
| `layout-blog-main` | 메인 영역 |
| `layout-blog-sidebar` | 사이드바 영역 |
| `header-height` | 헤더 높이 + Safe Area top |
| `safe-bottom` | Safe Area bottom 패딩 |
| `touch-target` | 터치 타겟 확장 |
| `bg-auth` | 로그인/프로필 페이지 배경 그라데이션 |

### 10.3 반응형 (웹/iOS/Android)

- **viewport**: `viewport-fit: cover` (iOS Safe Area)
- **input zoom 방지**: 모바일에서 `font-size: 16px` (md 이상에서 inherit)
- **이미지**: `max-width: 100%`, `height: auto`
- **스크롤**: `scroll-behavior: smooth`
