import React, {useState} from 'react';
import './App.css';

function App() {
const [newItem, setNewItem] = useState('');
const [items, setItems] = useState([]);


function addItem(){
  const item ={
    id:Math.floor(Math.random() * 100),
    value: newItem
    
  }
  setItems(
    function(oItem) {
      return [...oItem, item]
    }
  );
  setNewItem("");
  if(!newItem) {
    alert('please insert an item...')
    return;
  }
}

function deleteItem(id) {
  const newDelete = items.filter(
    function(item) {
      return item.id !== id;
    }
  )
  setItems(newDelete);

}

  return (
    <div className="App">
      <h1>Todo List Application</h1>

      <input className='text' type="text"
      placeholder='Add items....'
      value={newItem}
      onChange ={function(event) {
        return setNewItem(event.target.value)
      } }
      />

      <button onClick={function() {
        return addItem()
      } }>Add</button>

      <ol>
        {items.map(function(item) {
          return(
            <li key={item.id}>{item.value}
             <button className='deletebtn' onClick={function(){
              return deleteItem(item.id)
             } }>Delete
             </button>
             </li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
