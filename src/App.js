/*eslint-disable */ 
/*warning 꺼줌*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, changeTitle] = useState(['남강남 후토마끼 맛집', '강야구장 맛집 추천', '파이썬독학']); 
  
  let [like, changelike] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false); //'열림/닫힘' or 0/1 or true/false


  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        changeTitle(copy);
        }}>가나다순정렬</button>

      {/* <div className ="list">
        <h4>{title[0]}
          <span onClick={()=>{ changelike(like+1) }}>👍🏼</span> {like} </h4> 
        <button onClick={()=>{
          let copy = [...title];
          copy[0]='압구정 후토마끼 맛집';
          changeTitle(copy);
          }}>지역 별론디</button>
        <p>2월 17일 발행</p>
      </div>
      
      <div className ="list">
        <h4>{title[1]}</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className ="list">
        <h4 onClick={()=>{setModal(true)}}>{title[2]}</h4> 
        <p>2월 17일 발행</p>
      </div> */}

      {
      title.map(function(a, i){ //title글젬ㄱ의 갯수만큼! 이라고 하면 확장성 ㅇㅇ
        return( //i : 반복문이 돌 때마다 0부터 1씩 증가하는 정수 //a 대신 title[i]가능
          <div className="list">
            <h4>{a}
            <span onClick={()=>{
              let copy = [...like]; //like array 해체 
              copy[i]= copy[i]+1; //하나씩 증가 
              changelike(copy) //그대로 업데이트 
              
              }}>👍🏼</span> {like[i]}</h4>  
          <p>2월 17일 발행</p>
        </div>
        )
      })

      }

      {
        modal==true ? <Modal></Modal> : null
      }
      

      </div>
  
  )
        }
const Modal2 = () => {}
        function Modal(){ //얘가 component
          return(
            <div className="modal">
              <h4>제목</h4>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
          ) 
        }
export default App;
        