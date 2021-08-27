import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) =>{
    
    return (
          <> 
          <div className="delete-btn"> 
              <div>
                 <li> {props.text}</li>
              </div>
              <div className="delete">
                  <button className="dbtn" onClick={() => {
                      props.onSelect(props.id);
                  }}><DeleteIcon /></button>
              </div>    
          </div>
          
          </>
    );
    
}

export default List;