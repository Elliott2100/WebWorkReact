import { useState, useCallback } from 'react';
import Canvas from './Canvas';
import grid from './grid'
import Sidebar from './Sidebar'
import { Result } from './Result';
import { GifRounded } from '@material-ui/icons';
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
            <Sidebar/>   
			<Canvas onDrop={handleHTMLDrop}/>
            <grid/>
			<Result html={droppedHTML}/>
		</>);
};
export default Board;