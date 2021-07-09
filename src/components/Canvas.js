import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
import { Box } from '@material-ui/core';
import { ItemTypes } from './constraint';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};
function TargetBox (props){
  console.log(props)
    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.TextFiled,ItemTypes.Button],
        drop(item) {
            if (onDrop) {
              console.log(item)
                onDrop(item);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [props]);
    const isActive = canDrop && isOver;
    return (<div ref={drop} >
      <Box style={style} bgcolor={isActive?"green":"red"}>
			{isActive ? 'Release to drop' : 'Drag HTML here'}
      </Box>
		</div>);
};
export default TargetBox;
