import React from 'react'

export default function MasonryLayout(props:any) {
  const columnWrapper: any = {};
  const result = [];
  
  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }
  
  // divide children into columns
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${props.gap}px`}}>
        {props.children[i]}
      </div>
    );
  }
  
  // wrap children in each column with a div
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div key={i} style={{  marginLeft: `${i > 0 ? props.gap : 0}px`,  flex: 1 }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div className={props.className} style={{ display: 'flex' }}>
      {result}
    </div>
  );
}
