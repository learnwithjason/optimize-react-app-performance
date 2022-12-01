import { useState } from 'react';
import './App.css';

function App() {
  const [count] = useState(1_000);
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 30;
  const windowHeight = 500;
  const innerHeight = count * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight) + 3,
    count,
  );

  const items = Array.from({ length: count }, (_, i) => {
    return {
      index: i + 1,
      name: `Movie ${i + 1}`,
    };
  });

  function displayMovieItems() {
    const displayedItems = items.slice(startIndex, endIndex);
    console.log({ displayedItems, startIndex, endIndex });
    const movieList = displayedItems.map((item) => {
      return (
        <div
          key={item.index}
          style={{
            height: itemHeight,
            position: 'absolute',
            width: '100%',
            top: `${item.index * itemHeight}px`,
          }}
        >
          {item.name}
        </div>
      );
    });

    return movieList;
  }

  function onScroll(event) {
    setScrollTop(event.currentTarget.scrollTop);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <div
        className="outerbox"
        style={{
          border: '1px solid red',
          overflowY: 'scroll',
          height: windowHeight,
          width: 300,
          margin: '0 auto',
        }}
        onScroll={onScroll}
      >
        <div
          className="innerbox"
          style={{
            position: 'relative',
            height: innerHeight,
          }}
        >
          {displayMovieItems()}
        </div>
      </div>
    </div>
  );
}

export default App;
