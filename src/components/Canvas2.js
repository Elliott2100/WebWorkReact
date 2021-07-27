import { useDrop, useDrag } from 'react-dnd';
import { Box } from '@material-ui/core';
import { ItemTypes } from './constraint';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',

    color: "white",
    backgroundColor: 'transparent'
  },
}));
const style = {
  border: '1px solid gray',
  height: '32rem',
  width: '31rem',
  padding: '1rem',
  textAlign: 'center',
};

function Canvas(props) {
  const classes = useStyles();
  const [newelement, setnewelement] = useState([]);
  const [newelement2, setnewelement2] = useState([]);
  console.log("Props here", props)
  var itemnanecontainer;
  const { onDrop } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
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
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.TextFiled, ItemTypes.Button, ItemTypes.Grid],
    drop(item) {
      if (onDrop) {
        console.log("Canvas:", item)
        itemnanecontainer = item.name;
        console.log("containerofitemname:", itemnanecontainer)
        checkelement(itemnanecontainer)
        onDrop(item);
      }
    },
    hover(item) {
      console.log(`%c Is Hovering over Drop2: ${{ item }}`, "color:Orange; font-weight:bold")
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [props]);
  const [{ canDrop: canDrop1, isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: [ItemTypes.TextFiled, ItemTypes.Button, ItemTypes.Grid],
    drop(item) {
      if (onDrop) {
        console.log(`%c Canvas2: ${{ item }}`, "color:Orange")
        itemnanecontainer = item.name;
        console.log("containerofitemname:", itemnanecontainer)
        checkelement2(itemnanecontainer)
        onDrop(item);
      }
    },
    hover(item) {
      console.log(`%c Is Hovering over Drop2: ${{ item }}`, "color:Orange; font-weight:bold")
    },
    collect: (monitor) => ({
      isOver2: !!monitor.isOver(),
      canDrop1: !!monitor.canDrop(),
    }),
  }), [props]);
  const element = [
    { name: "Button", tag: <div><Button variant='text' color='secondary' size='Large'>Button</Button></div> },
    { name: "Textfield", tag: <div><TextField id="filled-basic" variant="filled" color='secondary' /> </div> },
    {
      name: "Grid", tag: <div>
        <Grid container xs={12} className={classes.paper} spacing={2}>{ /*grid for the items when dropped on the grid on the canvas*/}
          <Grid item xs={3} className={classes.paper} ref={drop}>
          </Grid>
          <Grid item xs={3} className={classes.paper}>

          </Grid>
          <Grid item xs={3} className={classes.paper}>

          </Grid>
          <Grid item xs={3} className={classes.paper}>

          </Grid>
        </Grid>

      </div>
    }]
  function checkelement(itemnanecontainer) {
    let temparray = newelement
    temparray.push(element.find(o => o.name === itemnanecontainer))
    setnewelement(temparray)

    console.log("foundelement:", newelement.name)
    if (temparray) {
      console.log("temparray", { temparray })
      console.log('newelement', { newelement })
    }
  }
  function checkelement2(itemnanecontainer) {
    let temparray1 = newelement2
    temparray1.push(element.find(o => o.name === itemnanecontainer))
    setnewelement2(temparray1)

    console.log("foundelement:", newelement.name)
    if (temparray1) {
      console.log("temparray2:", { temparray1 })
      console.log('newelement2:', { newelement })
      // visible=true;
      // document.getElementById('isActive').style.visibility="hidden";
    }
    // console.log('visiblity',visible)
  }
  const isActive = canDrop && isOver;//this is isActive trigger
  const isActive1 = canDrop1 && isOver2;// this is isActive2trigger
  return (
    <Box style={style} bgcolor={isActive ? "#76BA1B" : "#87cefa"} ref={drop}> {/*box is the container for the grid*/}
      <div>
        {
          newelement.length > 0 && (

            newelement.map((element, index) => {
              return (
                <>
                  <div key={index} ref={drag}>
                    {console.log(`%c Key:(${index}) element.tag:(${element.tag}), element.name:(${element.name})`, "color:#8cbed6; font-weight:bold")}
                    {element.tag}
                  </div>
                </>
              )
            })
          )
        }
      </div>
    </Box>
  );
};
export default Canvas;
