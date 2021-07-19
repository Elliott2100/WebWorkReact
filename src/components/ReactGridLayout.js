import { makeStyles } from '@material-ui/core';
import React from 'react'
import GridLayout from 'react-grid-layout';
function ReactGridLayout() {
    const style={
             background:'grey',
             textAlign:'center'
    }
    const layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 4},//0
      {i: 'b', x: 0, y: 4, w: 2, h: 5},//1
      {i: 'c', x: 2, y: 0, w: 2, h: 3},//2
      {i: 'd', x: 2, y: 3, w: 2, h: 3},//3
      {i: 'e', x: 2, y: 6, w: 2, h: 5},//4
      {i: 'f', x: 2, y: 11, w: 2, h: 3},//5
      {i: 'g', x: 2, y: 14, w: 2, h: 3},//6
      {i: 'h', x: 4, y: 0, w: 2, h: 3},//7
      {i: 'i', x: 4, y: 3, w: 2, h: 3},//8
      {i: 'j', x: 4, y: 6, w: 2, h: 3},//9
      ];
      
      
    return (
      <div style={{background:'lightgrey'}}>
        <GridLayout  className="layout" layout={layout} cols={6} rowHeight={30} width={1200}>
        <div key="a" style={style}>Item One</div>
        <div key="b" style={style}>Item Two</div>
        <div key="c" style={style}>Item Three</div>
        <div key="d" style={style}>Item Four</div>
        <div key="e" style={style}>Item Five</div>
        <div key="f" style={style}>Item Six</div>
        <div key="g" style={style}>Item Six</div>
        <div key="h" style={style}>Item Seven</div>
        <div key="i" style={style}>Item Eight</div>
        <div key="j" style={style}>Item Nine</div>
      </GridLayout>
      </div>
    )
}

export default ReactGridLayout
