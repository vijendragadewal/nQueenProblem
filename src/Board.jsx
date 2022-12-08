import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import Tile from "./Tile";
import { border } from "@mui/system";
const Board = () => {
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  const length = 8;
  const initialState = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],

  ]
  const handleReset = () => {
    setCount(0)
    setWin(false)
    arr.current = initialState
  }
  const arr = useRef(initialState)

  const handleClick = (row, col) => {


    for (let i = 0; i < length; i++) {
      arr.current[i][col] = '*';
      arr.current[row][i] = '*'
    }
    for (let i = row, j = col; i < length && j < length; i++, j++) {
      arr.current[i][j] = '*'
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      arr.current[i][j] = '*'
    }
    for (let i = row, j = col; i < length && j >= 0; i++, j--) {
      arr.current[i][j] = '*'
    }
    for (let i = row, j = col; i >= 0 && j < length; i--, j++) {
      arr.current[i][j] = '*'
    }
    arr.current[row][col] = 'Q'
    setCount(count + 1)
  }
  useEffect(() => {

    if (count === length) {
      setWin(true);
    }
  }, [count])

  return (<div className="Board" >
    {!win ? (arr.current.map((row, rowindex) => (
      <div style={{ display: 'flex', border: '1px solid black' }} >
        {row.map((item, colindex) => {
          return <Tile item={item} row={rowindex} col={colindex} handleClick={handleClick} />
        })}
      </div>
    ))) : <div> <img src='./images/monophy.gif' alt='winner' /> </div>}

    <Button style={{ marginTop: '10px' }} variant='contained' color='error' className="ResetButton" onClick={handleReset}>Reset</Button>
  </div>);
}

export default Board
