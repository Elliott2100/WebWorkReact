import React from 'react';
import Box from '@material-ui/core/Box';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { useDrag, DragPreviewImage } from 'react-dnd'
import { ItemTypes } from './constraint'
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
function Sidebar() {
    const clearmylocal = () => {
        window.localStorage.removeItem("element")
    }
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.Button,
        item: { name: ItemTypes.Button },
        end: (item, monitor) => {   
            const dropresult=monitor.getDropResult()
            console.log(item)
            console.log(dropresult)
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
            console.log(item)
            console.log(monitor)
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const buttonImage = 'https://freepngimg.com/thumb/categories/1428.png'
    const textfieldbutton = 'https://static.thenounproject.com/png/756265-200.png'
    return (

        <div style={{ width: '100%' }}>
            <h1>Sidebar</h1>
            <Box
                display="flex"
                flexWrap="wrap"
                alignContent="flex-start"
                p={1}
                m={1}
                bgcolor="primary.main"
                sx={{ maxWidth: 300, height: 200 }}
            >
                <RadioButtonCheckedIcon />
                <DragPreviewImage connect={preview} src={buttonImage} />
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
                <DragPreviewImage connect={preview2} src={textfieldbutton} />
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
            </Box>

        </div>
    )
}
export default Sidebar
