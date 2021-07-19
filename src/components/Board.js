import { useState, useCallback } from 'react';
import ResponsiveGridLayout from './ResponsiveGridLayout';
import Canvas from './Canvas';
import Grid from './Grid'
import Sidebar from './Sidebar'
import { Result } from './Result';
import { GifRounded } from '@material-ui/icons';
import ReactGridLayout from './ReactGridLayout'
function Board (){
    const [droppedHTML, setDroppedHTML] = useState('');
    const handleHTMLDrop = useCallback((item) => {
        if (item) {
            console.log("hi from call:",item)
            console.log(item.name)
            setDroppedHTML(item.name);
        }
    }, [setDroppedHTML]);
    return (<>
            {/* <ReactGridLayout/> */}
            <Sidebar/>   
			<Canvas onDrop={handleHTMLDrop}/>
            {/* <ResponsiveGridLayout/> */}
            {/* <Grid/> */}
			{/* <Result html={droppedHTML}/>*/}
		</>);
};
export default Board;