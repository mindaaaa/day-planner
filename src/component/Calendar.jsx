import { useState } from 'react';
import dayjs from 'dayjs';

// 달력 제작 컴포넌트
// 1. 월별 체인지 Header
// 월이 나온다. < > 버튼을 누르면 onclick이 된다.
// 2. 일월화수목금토 Days
// grid로 순서대로 그려준다.
// 3. 일자 출력 Dates
// 빈 날짜를 추가한다.
// startOf를 이용해 시작날부터 배열에 push해준다.
function Calendar() {
  const [currentDay, setCurrentDay] = useState(dayjs());

  const prevMonth = () => {};
  const nextMonth = () => {};
  return (
    <div className='calendar'>
      <Header />
      <Days />
      <Dates />
    </div>
  );
}

function Header() {
  return <div></div>;
}

function Days() {
  return <div></div>;
}

function Dates() {
  return <div></div>;
}
