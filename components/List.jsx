import React, { useState } from 'react';

function List() {
  const [listItems, setListItems] = useState([]);

  const date = new Date().toLocaleDateString();

  return (
    <div>
      <h2>{date}</h2>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newItem = e.target.elements.item.value;
        setListItems([...listItems, newItem]);
        e.target.reset();
      }}>
        <input type="text" name="item" placeholder="Add exercise" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default List;