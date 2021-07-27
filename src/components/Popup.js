import { Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core'
import { Button } from '@material-ui/core'
import React from 'react'

function Popup({ itemfromBoard, OpenPopup, setOpenPopup }) {
    console.log(`Here is OpenPopup:`, OpenPopup)
    return (
        <Dialog open={OpenPopup}>
            <DialogTitle style={{ backgroundColor: "#87cefa", color: "#FFFFFF", textAlign: "center" }}>
                <div >{itemfromBoard}</div>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <div>You Have Dropped {itemfromBoard} On The Canvas</div>
            </DialogContent>
            <Button onClick={() => { setOpenPopup(false) }} style={{ backgroundColor: "#87cefa", color: "#FFFFFF" }}>Ok!</Button>
        </Dialog>
    )
}

export default Popup
