import React from 'react';

const List = (props) =>{
    
    return (
          <> 
          <div className="delete-btn"> 
              <button className="dbtn" onClick={() => {
                  props.onSelect(props.id);
              }}> x </button>
              <li> {props.text}</li>
          </div>
          </>
    );
    
}

export default List;