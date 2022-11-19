
import {useState } from 'react';
import './App.css';
import ListQuestion,{data} from './component/listQuestion/ListQuestion';
import Header,{dataOne} from './component/Header';
import Pagination from './component/pagination/Pagination';
import { TabGroup } from './component/TabGroup';


function App() {
  const [index,setIndex]= useState(0)
  const [indexT,setIndexT]= useState(0)
  const handleChangeT=(x)=>{
    setIndexT(x)
  }
  const handleChange =(e)=>{
    switch (e.target.value) {
      case "prev":
        index>0 && setIndex(_=>_-1)
        break;
      case "next":
        data.length-1 > index && setIndex(_=>_+1)
        break;
    
      default:        
        break;
    }
  }
  return (
    <div className="App">
        <TabGroup />
        <ListQuestion index={index}/>
          <div>
             <h1>{data[index].title}</h1>
             <h3> {data[index].ques}</h3>
          </div>
        <Pagination handlePagination={handleChange}/>
        <Header handleChange={handleChangeT} index={indexT} ></Header>
        <p>{dataOne[indexT].content}</p>
    </div>
  );
}

export default App;
