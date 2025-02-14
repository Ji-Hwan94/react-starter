import React, { useEffect } from "react";

// HeavyJobComponent가 변경될 때, HeavyJobComponent2가 변경되는 이유는 값(상태)가 변경되면 화면이 랜더링이 되는데,
// 불필요한 컴포넌트(변경이 되지 않은 곳)에서도 랜더링이 된다.
// 또한 props가 객체, 배열 형태일 때, 컴포넌트가 랜더링 될 때마다, 주소값이 달라지기 때문에 새로운 상태값이라고 인식하여 컴포넌트가 리랜더링된다.
// 함수는 호출 될때 마다. 모든 상태를 초기화 시키기 때문이다.
// 이를 막기 위해 useMemo를 사용함
// 함수형 컴포넌트도 함수이기 때문에, useMemo가 사용됨

// useMemo -> React.memo는 이전 렌더링과 비교하여 props가 변하지 않을 때만 리렌더링을 막음
// 하지만 처음 마운트되는 경우에는 무조건 실행됨!
// 같은 num이더라도, 서로 다른 값으로 인식되기 때문에 각각 렌더링됨
// useMemo를 활용해서 "같은 num이면 같은 컴포넌트를 재사용" 하는 방식으로 해결 가능
export const HeavyJobComponent = ({ num, numObj }) => {
    useEffect(() => {
        console.log("HeavyJobComponent 렌더링됨");
    });
    useEffect(() => {
        console.log(`${num}이 변경되면 HeavyJobComponent 렌더링됨!`); // 🔥 리렌더링 여부 확인
    }, [num]);

    // 💡 무거운 연산 (num을 계속 더함)
    const heavyCalculation = () => {
        let total = 0;
        for (let i = 0; i < 123456; i++) {
            total += num;
        }
        return total + num;
    };

    const result = heavyCalculation();

    return <p>"{num}" 를 더해서 만든 연산 결과는 <b>{result}</b> 입니다!</p>;
}

export const HeavyJobComponent2 = ({ num }) => {
    useEffect(() => {
        console.log("HeavyJobComponent2 렌더링됨");
    });

    useEffect(() => {
        console.log("💡 HeavyJobComponent2 렌더링됨!"); // 🔥 리렌더링 여부 확인
    }, [num]);

    // 💡 무거운 연산 (num을 계속 더함)
    const heavyCalculation2 = () => {
        console.log(`${num}이 변경되면 HeavyJobComponent2 렌더링됨!`);
        let total = 0;
        for (let i = 0; i < 123456; i++) {
            total += num;
        }
        return total * num;
    };

    const result = heavyCalculation2();

    return <p>"{num}" 를 곱해서 만든 연산 결과는 <b>{result}</b> 입니다!</p>;
}

export const MemoComponent = React.memo(HeavyJobComponent);
export const MemoComponent2 = React.memo(HeavyJobComponent2);