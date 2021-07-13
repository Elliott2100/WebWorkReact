import { useDrop } from 'react-dnd';
import { Box } from '@material-ui/core';
import { ItemTypes } from './constraint';
import {useState} from 'react';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
const element= [
  { name: "Button", tag: "<Button variant='contained' color='secondary'>button</Button>" },
  { name: "Textfield", tag: "<input type='text' id='fname' name='fname'>" }
]
function TargetBox (props){
  const [newelement,setnewelement]=useState([]);
  console.log("Props here",props)
  var itemnanecontainer,visible=false;
    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.TextFiled,ItemTypes.Button],
        drop(item) {
            if (onDrop) {
              console.log("Canvas:",item)
              itemnanecontainer=item.name;
              console.log("containerofitemname:",itemnanecontainer)
              checkelement(itemnanecontainer)
                onDrop(item);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [props]);


    function checkelement(itemnanecontainer){
      let temparray=newelement
      temparray.push(element.find(o => o.name === itemnanecontainer))
      setnewelement(temparray)

      console.log("foundelement:",newelement.name)
      if(temparray){
        // visible=true;
        document.getElementById('isActive').style.visibility="hidden";
      }
      // console.log('visiblity',visible)
    }
    const isActive = canDrop && isOver;
    return (<div ref={drop} >
      <Box style={style} bgcolor={isActive?"green":"red"}>
        <div id='isActive'>
			{isActive ? 'Release to drop' : 'Drag HTML here'}
        </div>
      {/* {newelement? newelement.tag:"nothing to show here"} */}
      {newelement.map((element,index)=>{
        return <div key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />
      })}
      {/* <div dangerouslySetInnerHTML={{ __html: newelement.tag }} /> */}
      </Box>
		</div>);
};
export default TargetBox;
