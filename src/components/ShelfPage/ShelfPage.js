import React from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

  const dispatch = useDispatch();

  // REDUX REDUCER
  const shelf = useSelector(store => store.shelf)

  // BITS OF LOCAL STATE
  const [description, setDescription] = useState('');
  const [imageUrl, setUrl] = useState('');

  // RUN ON PAGE LOAD
  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' })
  }, [])

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {shelf.map((shelfItem) => {
          return <li key={shelfItem.id}>{shelfItem.description}</li>
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
