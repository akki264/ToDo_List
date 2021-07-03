import React, { useState } from "react";

function App() {
  const [item, updateItem] = useState("");
  const [listItems, updateList] = useState([]);
  function updateValue(event) {
    const newValue = event.target.value;
    updateItem(newValue);
  }
  function addItem() {
    updateList((prevItem) => {
      return [...prevItem, item];
    });
    updateItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateValue} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map(function (x) {
            return <li> {x} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
