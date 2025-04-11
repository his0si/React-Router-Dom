import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function QueryParamsWithNavigateExample() {
  // 현재 URL의 정보를 useLocation으로 가져옴
  const location = useLocation();
  // URL 업데이트를 위해 useNavigate 훅 사용
  const navigate = useNavigate();

  // URLSearchParams를 통해 쿼리 스트링을 파싱
  const searchParams = new URLSearchParams(location.search);
  
  // 쿼리 파라미터 읽기: category와 sort
  const category = searchParams.get('category') || 'none';
  const sort = searchParams.get('sort') || 'none';

  const handleUpdateParams = () => {
    // 기존 파라미터들을 복사하여 새로운 객체로 생성
    const newParams = new URLSearchParams(location.search);
    
    // TODO: category 값을 'books'로, sort 값을 'desc'로 변경

    
    // 새 쿼리 스트링으로 현재 경로를 업데이트
    navigate(`${location.pathname}?${newParams.toString()}`);
  };

  return (
    <div>
      <h2>Query Params with useLocation and useNavigate Example</h2>
      <p>Current Category: {category}</p>
      <p>Current Sort Order: {sort}</p>
      <button onClick={handleUpdateParams}>
        Update Query Params to category=books & sort=desc
      </button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default QueryParamsWithNavigateExample;
