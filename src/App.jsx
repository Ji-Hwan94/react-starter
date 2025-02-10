
import './App.css'
import { Button } from './samplePage/Button'
import { ChildComponent } from './samplePage/ChildComponent'
import { Input } from './samplePage/Input'
import { SelectBox } from './samplePage/SelectBox'
import { Table } from './samplePage/Table'
import { TodoMain } from './samplePage/TodoProject/TodoMain'
import { TodoMainReducer } from './samplePage/TodoProject/TodoMainReducer'

function App() {

  return (
    <>
      <h1>React</h1>
      {/* <Button /> */}
      {/* <Input /> */}
      {/* <SelectBox/> */}
      {/* <ChildComponent title={"제목1"} content={"여기에는 내용이 들어갑니다."}/>
      <ChildComponent title={"제목2"} content={"컴포넌트를 나누면 재사용성이 올라가요."}/>
      <ChildComponent title={"제목3"} content={"만약 내용만 바꾸고 싶다면."}/>
      <ChildComponent title={"제목4"} content={"이런식으로 props를 통해 필요한 데이터만 넣어주면 됩니다."}/>
      <ChildComponent title={"제목5"} content={"쉽네요."}/> */}
      {/* <Table/> */}
      {/* <TodoMain /> */}
      <TodoMainReducer />
    </>
  )
}

export default App
