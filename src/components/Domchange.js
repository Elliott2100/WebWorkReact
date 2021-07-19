import React from 'react'
import ReactDOM from 'react-dom';

function Domchange({ newelement2 }) {
    console.log(`%c hello from DomChange ${newelement2}`, "color:Yellow")
    var newelement = newelement2;
    console.log(newelement)
    return (

        <div id="render1">
            {

                newelement.map((element, index) => {
                    // <div>{console.log(`%c${element.name},,${index}`, 'color:orange;font-weigth:bold;')}</div>
                    // <div id="elementcreated" key={index} dangerouslySetInnerHTML={{ __html: element.tag }} />
                    return(
                        <>
                    {element.tag}
                    </>
                    )
                    
                    // console.log(`%c${element.name},,${index}`, 'color:orange;font-weigth:bold;');
                    // <h1 key={element.name}>{element}</h1>

                    // ReactDOM.render(
                    //     React.createElement(element.name,{id:"myid"},"Hello"),
                    //     document.getElementById("render1")
                    // )

                    // setrecivedelement(element.tag)
                    // console.log(`hello from inside element1 ${i++}`, element.name)
                    // reactDom.render(element.tag, document.getElementById('render'));

                })

            }
        </div>

    )
}

export default Domchange;
