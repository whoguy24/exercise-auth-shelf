import React from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

  const dispatch = useDispatch();

  // REDUX REDUCER
  const shelf = useSelector(store => store.shelf)
  const user = useSelector(store => store.user)

  // BITS OF LOCAL STATE
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // RUN ON PAGE LOAD
  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' })
  }, [])

  const onAddItem = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        description: description,
        image_url: imageUrl
      }
    })
  }

  function deleteItem(itemID) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: itemID
    })
  }

  return (
    <div className="container">

      <h1>Add an Item to the Shelf:</h1>
      <form onSubmit={onAddItem}>
        <input
          placeholder="Item Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          placeholder="Item Image URL"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button>Add Item</button>
      </form>

      <h2>Shelf</h2>
      <ul>
        {shelf.map((shelfItem) => {
          return (
            <li key={shelfItem.id}>{shelfItem.description} 
            { shelfItem.user_id === user.id && <button onClick={() => { deleteItem(shelfItem.id) }}>Delete</button>}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
