import React from 'react'
import { Box } from '@material-ui/core';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
function ResponsiveGrid() {
    const style = {
        border: '1px solid gray',
        height: '32rem',
        width: '40rem',
        padding: '1rem',
        textAlign: 'center',
        background:'red',
      };
      const style2 = {
        border: '1px solid gray',
        textAlign: 'center',
        display:'flex',
        background:'blue',
      };
    const layout = [
        {i: '1', x: 0, y: 0, w: 1, h: 2, static:false},
        {i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: '3', x: 4, y: 0, w: 1, h: 2}
      ];
    return (
        <Box style={style}>
        <ResponsiveGridLayout className="layout" layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}>
        <div key="1" style={style2}>1</div>
        <div key="2"style={style2}>2</div>
        <div key="3"style={style2}>3</div>
      </ResponsiveGridLayout>
      </Box>
    )
}

export default ResponsiveGrid;
