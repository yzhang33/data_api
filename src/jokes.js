import React from 'react';



const Jokes = ({setup,punchline}) => {
    let modifiedText;
    let rita = require('rita');
    let rm = new rita.RiString(punchline);
    modifiedText = rm.slice(0,6);

    return(
        <div>
            <p>{setup}</p>
            <p>{punchline}</p>
            <p>rita text: {modifiedText}</p><br></br>
        </div>
    );
};

export default Jokes;