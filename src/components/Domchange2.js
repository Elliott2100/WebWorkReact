import React from 'react'
import GridLayout from 'react-grid-layout';
function Domchange({ newelement2 }) {
    console.log(`%c hello from DomChange ${newelement2}`, "color:Yellow")
    var newelement = newelement2;
    const layout = [
        { i: '1', x: 0, y: 0 },
        { i: '0', x: 0, y: 4 }
    ];
    console.log(newelement)
    return (

        <div>
            
                {

                    newelement.map((element, index) => {
                        return (
                            <>
                                <div key={index}>
                                    {element.tag}
                                </div>
                            </>
                        )
                    }
                    )
                }
            
        </div>
    )
}
export default Domchange;
