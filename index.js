import React, { Component, useState, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import useFetch from './useFetch';

const App = () => {
   const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    [],
  );
  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.objectID}>
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

render(<App />, document.getElementById('root'));
