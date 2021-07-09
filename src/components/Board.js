import { useState, useCallback } from 'react';
import Canvas from './Canvas';
import Sidebar from './Sidebar'
import { Result } from './Result';
function Board (){
    const [droppedHTML, setDroppedHTML] = useState('');
    const handleHTMLDrop = useCallback((item) => {
        if (item) {
            console.log("hi from call",item)
            setDroppedHTML(item.html);
        }
    }, [setDroppedHTML]);
    return (<>
			<iframe srcDoc={`<img src='https://react-dnd.github.io/react-dnd/favicon-32x32.png' />`}/>
            <Sidebar/>  
			<Canvas onDrop={handleHTMLDrop}/>
			{/* <Result html={droppedHTML}/> */}
		</>);
};
export default Board;