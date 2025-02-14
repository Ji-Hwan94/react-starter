import { useEffect, useState } from "react"

export const CallbackSample = () => {
    const [number, setNumber] = useState(0);

    const someThing = () => {
        console.log(`값은 ${number} 입니다.`);
        return;
    }

    useEffect(() => { 
        console.log(`변경된 값은 ${number} 입니다.`);
     }, [someThing]);


    return (
        <>
            <p>useCallBack</p>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <br/>
            <button onClick={someThing}>버튼 클릭</button>
        </>
    )
}