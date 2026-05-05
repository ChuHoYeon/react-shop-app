# 🛒 React Shop App

React 19와 Vite를 기반으로 구축된 쇼핑몰 프론트엔드 애플리케이션입니다.  
전역 상태 관리(Redux Toolkit), 클라이언트 라우팅(React Router v7), 그리고 Firebase 연동을 포함한 견고한 아키텍처를 바탕으로 개발되었습니다.

## ✨ 주요 기능 (Features)

- **상품 목록 및 필터링**: 외부 API(FakeStoreAPI) 연동 및 카테고리별 상품 필터링 기능
- **최적화된 UX**: 로딩 스켈레톤(Skeleton UI) 제공 및 부드러운 화면 전환
- **최신 라우팅**: `createBrowserRouter`를 활용한 중첩 라우팅 및 공통 레이아웃(Layout) 적용
- **전역 상태 관리**: Redux Toolkit을 활용한 장바구니(Cart), 유저(User), 상품(Products) 상태 관리
- **보안**: 환경 변수(`.env`)를 활용한 Firebase API 키 숨김 처리

## 🛠 기술 스택 (Tech Stack)

### Core

- **Framework**: React (v19)
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

## 📁 디렉토리 구조 (Folder Structure)

```text
react-shop-app/
├── frontend/
│   ├── src/
│   │   ├── assets/       # 정적 이미지 및 에셋
│   │   ├── components/   # 재사용 가능한 공통 컴포넌트 (Header, Footer, Layout 등)
│   │   ├── hooks/        # 커스텀 훅 (useAppDispatch, useAppSelector)
│   │   ├── pages/        # 라우팅되는 페이지 단위 컴포넌트 (Home, Cart, Login 등)
│   │   ├── store/        # Redux 스토어 및 Slice 모음 (Redux Toolkit)
│   │   ├── App.jsx       # 라우터 설정 및 메인 진입점
│   │   ├── main.jsx      # React DOM 렌더링 및 Redux Provider 설정
│   │   └── firebase.js   # Firebase SDK 초기화 및 환경 변수 연동
│   ├── .env              # 환경 변수 (Firebase 키 등 - Git 제외됨)
│   ├── jsconfig.json     # 절대 경로(@/) 자동 완성 지원
│   └── vite.config.js    # Vite 및 경로 Alias 설정
└── .gitignore            # Git 버전 관리 예외 처리
```

## 🚀 실행 방법 (Getting Started)

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

## 🤝 컨벤션 (Conventions)

- **컴포넌트 및 폴더명**: `PascalCase` (예: `CardList`, `Header`)
- **Redux Slice**: `Feature.slice.js` 형태의 명명 규칙 적용
- **절대 경로**: `src/` 폴더 하위 접근 시 `@/` Alias 사용 (예: `@/components/...`)
