import { useEffect, useState } from 'react';
import tableData from '../common/tableData';

export const Table = () => {
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(prev => [...prev, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            tableData.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type='checkbox' onChange={(e) => handleAllCheck(e.target.checked)} 
                                checked={checkItems.length === tableData.length ? true : false} />
                        </th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>만든 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td><input type='checkbox' value={data.id}
                                        onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                                        checked={checkItems.includes(data.id) ? true : false}
                                        />
                                    </td>
                                    <td>{data.title}</td>
                                    <td>{data.content}</td>
                                    <td>{data.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {checkItems.length} 개가 선택되었습니다.
        </>
    )
}