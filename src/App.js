import React,{useState} from 'react';
import './App.css';
import List from "./List";

function App() {
  const [data, setData] = useState("");
  const [getData, setGetData] = useState([]);

  const getInput = (e) =>{
     setData(e.target.value);
  }

  const saveData = () =>{
      setGetData((oldData) => {
        return [...oldData,data];
      });
      setData("");
  }

  const deleteData = (id) =>{
    setGetData((oldData) => {
      return oldData.filter((arrElement,index) => {
          return index !== id;
      })
    })
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
                    getData.map((val,index) => {
                      return <List key={index} 
                                id={index} 
                                text={val} 
                                onSelect={deleteData}
                                />;
                    })
                  }
                </ol>
          </div>
      </div>
    </>
  );
}

export default App;
