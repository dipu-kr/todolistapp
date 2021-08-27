import React,{useState,useEffect} from 'react';
import './App.css';
import List from "./List";

// to get data from localstorage
const getLocalData = () =>{
  const lists = localStorage.getItem('list');
  if(lists){
    return JSON.parse(lists);
  }
}

function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalData());

// get input data from user
  const getInput = (e) =>{
     setData(e.target.value);
  }
//  save input data in an Array 
  const saveData = () =>{
      if(data === ""){
         alert("Write Something");
      }
      else{
        setItems((oldData) => {
          return [...oldData,data];
        });
      }
      setData("");
  }
// Delete function
  const deleteData = (id) =>{
    setItems((oldData) => {
      return oldData.filter((arrElement,index) => {
          return index !== id;
      })
    })
}

// set data in localStorage
useEffect(() => {
   localStorage.setItem('list', JSON.stringify(items));
},[items])

const clearData = () =>{
  setItems([]);
}
  return (
    <>
      <div className="main">
          <div className="child">
                <br/>
                <h2>ToDoList</h2>
                <input type="text" placeholder="Add a Items" value={data} onChange={getInput} />
                <button type="submit" onClick={saveData} className="sbtn"> + </button>
                <br/>
                <ol>
                  {
                    items.map((val,index) => {
                      return <List key={index} 
                                id={index} 
                                text={val} 
                                onSelect={deleteData}
                                />;
                    })
                  }
                </ol>
                <div className="main-btn">
                   <button onClick={clearData}>all clear</button>
                </div>
          </div>
      </div>
    </>
  );
}

export default App;
