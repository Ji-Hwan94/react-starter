import { useMemo } from "react";
import { useState } from "react";

// 10,000개의 데이터를 만드는 중
const generateData = () => {
    return Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        value: Math.floor(Math.random() * 1000), // 0~999 랜덤 숫자
    }));
};

const data = generateData(); // 초기 데이터를 생성

export const MemoSample = () => {
    const [search, setSearch] = useState("");

    const filteredDataCount = () => {
        console.log("검색 결과 개수 계산 중...");
        return data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ).length; 
    };

    // ✅ 필터링된 데이터 개수를 useMemo로 계산
    // 컴포넌트가 렌더링 중에 useMemo가 실행되기 때문에, 최초의 한번에는 실행된다.
    // 그러나 그 이후로는 search가 변하지 않으면 데이터를 캐싱한다.
    // 함수로 인해 만들어진 값을 캐싱함.
    const filteredDataCountMemo = useMemo(() => {
        console.log("useMemo를 사용해여 검색 결과 개수 계산 중...");
        return data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ).length; 
    }, [search]);

    

    return (
        <div>
            <h2>useMemo</h2>
            <input
                type="number"
                placeholder="검색어 입력..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <p>검색 결과 개수: {filteredDataCount()} 개</p>
            <br/>
            <p>{filteredDataCount()} 개의 결과로 무엇을 할 예정인가요?</p>
        </div>
    );
}