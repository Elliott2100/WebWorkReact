export const Result = ({ html }) => {
    const elements = [
        { name: "Button", tag: "<Button variant='contained' color='secondary'> Secondary</Button>" },
        { name: "Textfield", tag: "<TextField id='filled-basic' label='Filled' variant='filled' />" }
    ]
    if (html.length === 0) {
        return (
            <div>
                Nothing to display
            </div>
        );
    }
    console.log(html)
    let newelement = elements.find(o => o.name === html)
    console.log(newelement)
    let result = document.getElementsByClassName("result")
    console.log("result:",result)
    result.innerHTML = newelement.tag;
        return (
            <div className="result">
                {result.innerHTML}
            </div>
        );
};
