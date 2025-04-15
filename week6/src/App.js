// App.js
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
  useLocation,
  useNavigate
} from 'react-router-dom';

/* ---------------------------------------------------------
   useSearchParams를 활용한 예제 컴포넌트
--------------------------------------------------------- */
function UseSearchParamsExample() {
  // useSearchParams 훅으로 쿼리 파라미터 관리
  const [searchParams, setSearchParams] = useSearchParams();
  // TOCO: 'name'과 'age'라는 쿼리 파라미터 값 추출

  return (
    <div>
      <h2>useSearchParams Example</h2>
      <p>
        Query Parameter "name": {nameParam ? nameParam : '없음'}
      </p>
      <p>
        Query Parameter "age": {ageParam ? ageParam : '없음'}
      </p>
      <button
        onClick={() => {
          // TODO: 기존 쿼리 파라미터를 업데이트: name을 'Alice', age를 '30'으로 설정
        }}
      >
        Change Query Parameter to Alice &amp; Age 30
      </button>
      <button
        onClick={() => {
          // 기존 파라미터를 객체로 변환한 뒤, 새로운 파라미터(ref)를 추가
          const newParams = Object.fromEntries([...searchParams]);
          newParams.ref = 'homepage';
          setSearchParams(newParams);
        }}
      >
        Add ref=homepage
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   window.location을 활용한 예제 컴포넌트
--------------------------------------------------------- */
function WindowLocationExample() {
  // 현재 URL의 쿼리 문자열 추출
  const searchString = window.location.search;
  // URLSearchParams를 활용하여 파라미터 파싱
  const params = new URLSearchParams(searchString);
  const idParam = params.get('id');
  const refParam = params.get('ref');

  return (
    <div>
      <h2>window.location Example</h2>
      <p>전체 쿼리 문자열: {searchString}</p>
      <p>
        Query Parameter "id": {idParam ? idParam : '없음'}
      </p>
      <p>
        Query Parameter "ref": {refParam ? refParam : '없음'}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   QueryParamsWithNavigateExample 컴포넌트
   - useLocation과 useNavigate를 사용해 URL의 쿼리 파라미터를 읽고 업데이트
--------------------------------------------------------- */
function QueryParamsWithNavigateExample() {
  // 현재 URL 정보를 받아오기 위한 useLocation
  const location = useLocation();
  // URL 업데이트를 위한 useNavigate
  const navigate = useNavigate();

  // URLSearchParams를 통해 쿼리 문자열을 파싱
  const searchParams = new URLSearchParams(location.search);
  // 파라미터 읽기: category와 sort (없으면 'none'으로 출력)
  const category = searchParams.get('category') || 'none';
  const sort = searchParams.get('sort') || 'none';

  const handleUpdateParams = () => {
    // 기존 쿼리 파라미터들을 복사하여 새로운 URLSearchParams 객체 생성
    const newParams = new URLSearchParams(location.search);
    
    // TODO: 아래 값을 원하는 값으로 수정해보세요.
    // 예시: category 값을 'books'로, sort 값을 'desc'로 업데이트
    
    // 업데이트된 쿼리 문자열로 현재 경로를 변경 (SPA 방식, 전체 리로드 X)
    navigate(`${location.pathname}?${newParams.toString()}`);
  };

  return (
    <div>
      <h2>Query Params with useLocation and useNavigate Example</h2>
      <p>Current Category: {category}</p>
      <p>Current Sort Order: {sort}</p>
      <button onClick={handleUpdateParams}>
        Update Query Params to category=books &amp; sort=desc
      </button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Home 컴포넌트 (내비게이션 링크 제공)
--------------------------------------------------------- */
function Home() {
  return (
    <div>
      <h1>React Router &amp; window.location 활용 예제</h1>
      <nav>
        <ul>
          <li>
            <Link to="/searchparams?name=John">useSearchParams Example</Link>
          </li>
          <li>
            <Link to="/windowlocation?id=123&ref=example">window.location Example</Link>
          </li>
          <li>
            <Link to="/navigate-example?category=all&sort=asc">
              QueryParamsWithNavigateExample
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        이 예제들은 React Router의 다양한 훅들을 사용하여 URL 쿼리 파라미터를 읽고, 업데이트하는 방법을 보여줍니다.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   전체 애플리케이션 구성 컴포넌트 (라우팅)
--------------------------------------------------------- */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchparams" element={<UseSearchParamsExample />} />
        <Route path="/windowlocation" element={<WindowLocationExample />} />
        <Route path="/navigate-example" element={<QueryParamsWithNavigateExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
