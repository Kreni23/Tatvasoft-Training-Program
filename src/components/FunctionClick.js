import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('Fbutton clicked')
    }

    return(
        <div>
            <button onClick={clickHandler}>Fclick</button>
        </div>
    );
}

export default FunctionClick