import React from 'react';
import Box from '@material-ui/core/Box';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import GridOnIcon from '@material-ui/icons/GridOn';
import { useDrag, DragPreviewImage } from 'react-dnd'
import { ItemTypes } from './constraint'
function Sidebar() {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.Button,
        item: { name: ItemTypes.Button },
        end: (item, monitor) => {
            const dropresult = monitor.getDropResult()
            console.log(`%c from end item ${{ item }}`, "color:Green")
            console.log(`%c from end monitor dropresult${{ dropresult }} `, "color: Green")
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const [{ isDragging: isdragging2 }, drag2, preview2] = useDrag(() => ({
        type: ItemTypes.TextFiled,
        item: { name: ItemTypes.TextFiled },
        end: (item, monitor) => {
            const dropresult = monitor.getDropResult()
            console.log(`%c from end item ${{ item }} `, "color:Green")
            console.log(`%c from end monitor dropresult${{ dropresult }} `, "color: Green")
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const [{ isDragging: isdragging3 }, drag3, preview3] = useDrag(() => ({
        type: ItemTypes.Grid,
        item: { name: ItemTypes.Grid },
        end: (item, monitor) => {
            const dropresult = monitor.getDropResult()
            console.log(`%c from end item ${{ item }} `, "color:Green")
            console.log(`%c from end monitor dropresult${{ dropresult }} `, "color: Green")
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    return (

        <div style={{ width: '100' }}>
            <h1>Sidebar</h1>
            <Box
                display="flex"
                flexWrap="wrap"
                alignContent="flex-start"
                p={1}
                m={1}
                bgcolor="primary.main"
                sx={{ maxWidth: 400, height: 250 }}
            >
                <RadioButtonCheckedIcon />
               
                <div>
                    <Box
                        ref={drag}
                        p={1} bgcolor="grey.300"
                        style={{
                            opacity: isDragging ? 0.5 : 1,
                            fontSize: 16,
                            cursor: 'move'
                        }}
                    >
                        Button
                    </Box>
                </div>
                <TextFieldsIcon />
                
                <div>
                    <Box
                        ref={drag2}
                        style={{
                            opacity: isdragging2 ? 0.5 : 1,
                            fontSize: 16,
                            cursor: 'move'
                        }}
                        p={1} bgcolor="grey.300">
                        TextField
                    </Box>
                </div>
                <GridOnIcon/> 
                
                <div>
                    <Box
                        ref={drag3}
                        style={{
                            opacity: isdragging3 ? 0.5 : 1,
                            fontSize: 16,
                            cursor: 'move',
                            width:35
                        }}
                        p={1} bgcolor="grey.300">
                        Grid
                    </Box>
                </div>
            </Box>

        </div>
    )
}
export default Sidebar
