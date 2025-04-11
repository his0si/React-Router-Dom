import React from 'react';
import { BrowserRouter, Routes, Route, Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';

// useSearchParams를 활용한 예제 컴포넌트
function UseSearchParamsExample() {
  // useSearchParams 훅으로 쿼리 파라미터 관리
  const [searchParams, setSearchParams] = useSearchParams();
  // TODO: 'name'이라는 쿼리 파라미터 값 추출
  // TODO: 'age'라는 파라미터도 함께 처리

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
          // 기존 쿼리 파라미터를 업데이트 - name 값을 'Alice'로 변경하고, age 값을 '30'으로 추가함
          setSearchParams({ name: 'Alice', age: '30' });
        }}
      >
        Change Query Parameter to Alice &amp; Age 30
      </button>
      <button
        onClick={() => {
          // TODO: 기존 파라미터에 새로운 파라미터(ref)를 추가
          // 기존 파라미터에 ref 값을 'homepage'로 추가하여 업데이트
        }}
      >
        Add ref=homepage
      </button>
    </div>
  );
}

// window.location을 활용한 예제 컴포넌트
function WindowLocationExample() {
  // window.location.search로 현재 URL의 쿼리 문자열 추출
  const searchString = window.location.search;
  // URLSearchParams를 활용하여 필요한 파라미터를 추출하는 코드 작성
  const params = new URLSearchParams(searchString);
  const idParam = params.get('id');
  // TODO: 'ref'라는 파라미터도 추출하여 사용

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


// 홈 컴포넌트 - 내비게이션 링크 제공
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
            <Link to="/navigate-example?category=all&sort=asc">QueryParamsWithNavigateExample</Link>
          </li>
        </ul>
      </nav>
      <p>
        이 예제는 React Router의 useSearchParams와 window.location을 사용하여 URL 쿼리 파라미터를 어떻게 읽고, 업데이트하는지 보여줍니다.
      </p>
    </div>
  );
}

// <QueryParamsWithNavigateExample> 컴포넌트: 
// useLocation과 useNavigate를 활용하여 URL의 쿼리 파라미터를 읽고 업데이트하는 새로운 예제입니다.
function QueryParamsWithNavigateExample() {
  // 현재 URL 정보를 가져오기 위한 useLocation
  const location = useLocation();
  // URL 업데이트를 위한 useNavigate
  const navigate = useNavigate();

  // URLSearchParams를 사용해서 현재 쿼리 스트링을 파싱
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category') || 'none';
  const sort = searchParams.get('sort') || 'none';

  const handleUpdateParams = () => {
    // 기존 파라미터 복사 후, 새로운 값으로 업데이트
    const newParams = new URLSearchParams(location.search);
    // TODO: 학생들이 아래 값을 원하는 값으로 수정해보세요.
    
    // URL 경로와 함께 새로운 쿼리 스트링으로 업데이트
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
