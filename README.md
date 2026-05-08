# React Shop App

React 19, TypeScript, Vite를 기반으로 구축된 쇼핑몰 프론트엔드 애플리케이션입니다.

Redux Toolkit 기반 전역 상태 관리, React Router v7 클라이언트 라우팅, Firebase Authentication, 외부 상품/주문 API 연동을 포함합니다.

## 주요 기능 (Features)

- **상품 목록 및 필터링**: 외부 API(FakeStoreAPI) 연동 및 카테고리별 상품 필터링 기능
- **상품 상세 페이지**: 개별 상품 조회 및 장바구니 담기 기능
- **장바구니**: 상품 수량 변경, 삭제, 총액 계산, 빈 장바구니 화면 제공
- **네비게이션 장바구니 미리보기**: Header에서 장바구니 상품 목록과 합계를 hover UI로 확인
- **주문 및 주문 히스토리**: 로그인 사용자의 주문 전송 및 주문 내역 조회
- **인증**: Firebase Authentication 기반 로그인/회원가입 및 인증 상태 관리
- **라우팅**: `createBrowserRouter`를 활용한 중첩 라우팅 및 공통 레이아웃 적용
- **TypeScript 전환**: 컴포넌트, Redux slice, 커스텀 훅에 타입 적용
- **보안**: 환경 변수(`.env`)를 활용한 Firebase API 키 숨김 처리

## 기술 스택 (Tech Stack)

### Core

- **Framework**: React (v19)
- **Language**: TypeScript
- **Build Tool**: Vite (v8)
- **Routing**: React Router DOM (v7)

### State & Data

- **State Management**: Redux Toolkit (RTK)
- **Data Fetching**: Axios

### Styling & UI

- **Styling**: SCSS (CSS Modules)
- **Icons**: React Icons
- **Skeleton UI**: React Loading Skeleton

### Backend Services

- **BaaS**: Firebase (Authentication)
- **External APIs**: FakeStoreAPI, MockAPI

### Quality

- **Type Checking**: TypeScript (`tsc -b`)
- **Linting**: ESLint, typescript-eslint, React Hooks ESLint

## 디렉토리 구조 (Folder Structure)

```text
react-shop-app/
├── frontend/
│   ├── src/
│   │   ├── assets/       # 정적 이미지 및 에셋
│   │   ├── components/   # 재사용 가능한 공통 컴포넌트 (Header, Footer, Layout, Form 등)
│   │   ├── hooks/        # 커스텀 훅 (useAppDispatch, useAppSelector)
│   │   ├── pages/        # 라우팅되는 페이지 단위 컴포넌트 (Home, Detail, Cart, Order 등)
│   │   ├── store/        # Redux 스토어 및 Slice 모음 (Redux Toolkit)
│   │   ├── App.tsx       # 라우터 설정
│   │   ├── main.tsx      # React DOM 렌더링 및 Redux Provider 설정
│   │   └── firebase.ts   # Firebase SDK 초기화 및 환경 변수 연동
│   ├── .env              # 환경 변수 (Firebase 키 등 - Git 제외됨)
│   ├── tsconfig*.json    # TypeScript 설정
│   ├── eslint.config.js  # ESLint 설정
│   └── vite.config.ts    # Vite 및 경로 Alias 설정
└── .gitignore            # Git 버전 관리 예외 처리
```

## 실행 방법 (Getting Started)

1. **저장소 클론 및 패키지 설치**

    ```bash
    git clone <repository-url>
    cd react-shop-app/frontend
    npm install
    ```

2. **환경 변수 설정**
   `frontend/` 디렉토리에 `.env` 파일을 생성하고 아래 양식에 맞게 Firebase 키를 입력하세요.

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

3. **개발 서버 실행**
    ```bash
    npm run dev
    ```
    이후 브라우저에서 `http://localhost:5173`으로 접속합니다.

## 검증 명령어 (Verification)

```bash
npx tsc -b
npm run lint
npm run build
```

## 컨벤션 (Conventions)

- **컴포넌트 및 폴더명**: `PascalCase` (예: `CardList`, `Header`)
- **React 컴포넌트**: `.tsx` 확장자 사용
- **Redux Slice**: `feature.slice.ts` 형태의 명명 규칙 적용
- **타입 파일**: 도메인별 `*.type.ts` 파일 사용
- **절대 경로**: `src/` 폴더 하위 접근 시 `@/` Alias 사용 (예: `@/components/...`)
