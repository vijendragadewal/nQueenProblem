
import { Button } from "@mui/material";
const Tile = ({ item, row, col, handleClick }) => {
  const isdisable = (item === 'Q' || item === '*')
  return (
    <Button
      className={`TileButton`}
      onClick={() => handleClick(row, col)}
      style={{
        background: isdisable && 'white',
      }}
      disabled={isdisable}
    >{item === 'Q' && <img src='./images/queen.png' alt='img' className="imageStyle" />}
    </Button>
  )
}

export default Tile;