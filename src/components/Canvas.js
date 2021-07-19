import { useDrop } from 'react-dnd';
import { Box } from '@material-ui/core';
import { ItemTypes } from './constraint';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button,TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Domchange from './Domchange';
import Gridlayout from 'react-grid-layout'
import reactDom from 'react-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    border: '1px solid black',
    textAlign: 'center',
    color: "white",
    background: 'red'
  },
}));
const style = {
  border: '1px solid gray',
  height: '32rem',
  width: '40rem',
  padding: '1rem',
  textAlign: 'center',
};
const element = [
  { name: "Button", tag: <div><Button variant='contained' color='secondary'>button</Button></div> },
  { name: "Textfield", tag: <div>  <TextField id="filled-basic" label="EnterText" variant="filled" /> </div> }
]
// const element = [
//   { name: "Button", tag: "<div>Hello Button</div>" },
//   { name: "Textfield", tag: "<div>Hello Button</div>" }
// ]
function TargetBox(props) {
  const classes = useStyles();
  var i = 0;
  const [newelement, setnewelement] = useState([]);
  const [recievedelement, setrecivedelement] = useState([]);
  console.log("Props here", props)
  var itemnanecontainer, visible = false;
  const { onDrop } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.TextFiled, ItemTypes.Button],
    drop(item) {
      if (onDrop) {
        console.log("Canvas:", item)
        itemnanecontainer = item.name;
        console.log("containerofitemname:", itemnanecontainer)
        checkelement(itemnanecontainer)
        onDrop(item);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [props]);
  const [{ canDrop: canDrop1, isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: [ItemTypes.TextFiled, ItemTypes.Button],
    drop(item) {
      if (onDrop) {
        console.log("Canvas2:", item)
        itemnanecontainer = item.name;
        console.log("containerofitemname:", itemnanecontainer)
        checkelement(itemnanecontainer)
        onDrop(item);
      }
    },
    collect: (monitor) => ({
      isOver2: !!monitor.isOver(),
      canDrop1: !!monitor.canDrop(),
    }),
  }), [props]);
  function checkelement(itemnanecontainer) {
    let temparray = newelement
    temparray.push(element.find(o => o.name === itemnanecontainer))
    setnewelement(temparray)

    console.log("foundelement:", newelement.name)
    if (temparray) {
      console.log("temparray", temparray)
      console.log('newelement', newelement)
      // visible=true;
      // document.getElementById('isActive').style.visibility="hidden";
    }
    // console.log('visiblity',visible)
  }
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>dropitem</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>dropitem</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>dropitem</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  const isActive = canDrop && isOver;
  const isActive1 = canDrop1 && isOver2;
  const layout = [
    { x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  ];
  function htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <Box style={style} bgcolor={isActive1 ? "green" : "red"}>
      <div className={classes.root}>
        <Grid container xs={12} spacing={2} >


          {/* {isActive ? "drophere" : "1:xs=3"}
              {
                newelement.length > 1 && (
                  <div>
                    <div>
                      {newelement.name}
                    </div>
                    { 
                    newelement.map((element, index) => {
                      // <div>{console.log(`%c${element.tag},,${index}`,'color:orange;font-weigth:bold;')}</div>
                      <div key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />

                    })}
                  </div>
                )}
             */}
          <Grid item xs={3} className={classes.paper} ref={drop}>
            {isActive ? "drophere" : "1:xs=3"}
            {

              <div id="render">
                {/* <Domchange newelement2={newelement}/> */}
                
                <div>
                  {console.log(`in the drop point ${newelement.name},,${newelement.length}`)}
                </div>
                {
                newelement.length>0 && (  
                  <Domchange newelement2={newelement}/>
                  )}
              </div>
            }

          </Grid>
          <Grid item xs={3} className={classes.paper}>
            1:xs=3
            {/* <Box ref={drop2}>
               {isActive ? "drophere" : "1:xs=3"}
              {

                  <div id="render">
                    <div>
                      {console.log("in the drop point",newelement)}
                    </div>
                    { 
                    newelement.map((element, index) => {
                      // <div>{console.log(`%c${element.tag},,${index}`,'color:orange;font-weigth:bold;')}</div>
                      // <div key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />
                      const element1=element.tag
                      reactDom.render(element1,document.getElementById('render'))

                    })}
                  </div>
                }
             </Box> */}
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            1:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            1:xs=3
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={3} className={classes.paper}>
            2:xs=3
          </Grid>
          {/* <Box ref={drop2}>
            {isActive1 ? "drophere" : "1:xs=3"}
            {

              <div id="render1">
                <div>
                  {console.log("in the drop2 point", newelement)}
                </div>
                {
                  newelement.map((element, index) => {
                    // <div>{console.log(`%c${element.tag},,${index}`,'color:orange;font-weigth:bold;')}</div>
                    // <div key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />
                    // setrecivedelement(element.tag)
                    console.log(`hello from inside element1 ${i++}`, element.name)
                    reactDom.render(element.tag, document.getElementById('render1'));
                  })
                }
              </div>
            }
          </Box> */}
          <Grid item xs={3} className={classes.paper}>
            2:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            2:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            2:xs=3
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={3} className={classes.paper}>
            3:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            3:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            3:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            3:xs=3
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={3} className={classes.paper}>
            4:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            4:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            4:xs=3
          </Grid>
          <Grid item xs={3} className={classes.paper}>
            4:xs=3
          </Grid>
        </Grid>
      </div>
    </Box>
  );
  // return (<div ref={drop} >
  //   <Box style={style} bgcolor={isActive?"green":"red"}>
  //     <div id='isActive'>
  // 	{isActive ? 'Release to drop' : 'Drag HTML here'}
  //     </div>
  //   {/* {newelement? newelement.tag:"nothing to show here"} */}
  //   {newelement.map((element,index)=>{
  //     return <div key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />
  //   })}
  //   <div dangerouslySetInnerHTML={{ __html: newelement.tag }} />
  //   </Box>
  // </div>);
};
export default TargetBox;
