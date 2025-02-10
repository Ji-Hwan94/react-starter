import { useState } from "react"

export const SelectBox = () => {
    const [selectValue, setSelectValue] = useState("1");

    return (
        <div>
            <select onChange={(e) => setSelectValue(e.target.value)} defaultValue={selectValue}>
                <option value={"1"}>1번</option>
                <option value={"2"}>2번</option>
                <option value={"3"}>3번</option>
                <option value={"4"}>4번</option>
            </select>
            선택된 값 : {selectValue}
        </div>
    )
}