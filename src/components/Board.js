import { useState, useCallback } from 'react';
import ResponsiveGridLayout from './ResponsiveGridLayout';
import Canvas from './Canvas';
import List from '@material-ui/core/List'
import Grid from './Grid'
import Sidebar from './Sidebar'
import Canvas2 from './Canvas2'
import { Result } from './Result';
import { GifRounded } from '@material-ui/icons';
import ReactGridLayout from './ReactGridLayout'
import Popup from './Popup';
function Board() {
    const [droppedHTML, setDroppedHTML] = useState('');
    const [OpenPopup, setOpenPopup] = useState(false);
    const [itemfromBoard, setitemfromBoard] = useState('');
    const handleHTMLDrop = useCallback((item) => {
        if (item) {
            console.log(`%c We are at the board:${item.name}`, "color:#87ceeb; font-weight:bold")
            setOpenPopup(true)
            setitemfromBoard(item.name)
            console.log(item.name)
            setDroppedHTML(item.name);
        }
    }, [setDroppedHTML]);
    return (<>
        {/* <ReactGridLayout/> */}{/*testing ReactGridLayout*/}
        <Sidebar />
        <div style={{ float: 'left' }}>
        <Canvas onDrop={handleHTMLDrop} />
        </div>
        <div style={{ float: 'right' }}>
            <Canvas2 onDrop={handleHTMLDrop} />
        </div>
        {/* <ResponsiveGridLayout/> */}{/*Testing ResponsiveGridLayout*/}
        {/* <Grid/> */}{/*Testing Grid*/}
        {/* <Result html={droppedHTML}/>*/}{ /*Result which is just to get from the solution online*/}
        <Popup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} itemfromBoard={itemfromBoard}></Popup>
    </>);
};
export default Board;