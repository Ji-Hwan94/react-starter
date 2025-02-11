import { useEffect, useState } from "react"

export const ChildComponent = () => {
    // useState의 값의 생명 주기는 컴포넌트가 없어질때까지
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert("자식 컴포넌트 열림");
        return () => {
            alert("자식 컴포넌트 닫힘");
        }
    }, []);

    useEffect(() => {
        count && alert(`변경된 숫자 ${count}`);
    }, [count])



    return (
        <div className="w-80 h-52 border border-black-400 pt-16">
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <p className="font-mono text-xl">ChildComponent</p>
        </div>
    )
}