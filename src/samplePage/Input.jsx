import { useEffect, useRef, useState } from "react"

export const Input = () => {
    const [text, setText] = useState("");
    const refText = useRef("");
    
    useEffect(() => {
        refText.current.focus();
    }, []);

    // useState를 사용하면 컴포넌트가 계속 리랜더링됨
    console.log("input 컴포넌트 오픈");

    // useRef는 값이 바뀌어도 리렌더링 되지 않기 때문에, 직접 트리거를 사용해야함
    

    const handlerButton = () => {
        alert(`input 값: ${refText.current.value}`);
    }

    
    return (
        <div>
            {/* <input onChange={(e) => setText(e.target.value)}/> */}
            <input ref={refText}/>
            <br />
            입력된 값: {text}
            {/* <button onClick={handlerButton}>버튼 클릭</button> */}
        </div>
    )
}