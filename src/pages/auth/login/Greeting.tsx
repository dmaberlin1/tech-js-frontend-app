import React from 'react';

export interface IGreeting {
    name: string,
    surname:string,
    id:number,
    telegram:string
}

const Greeting = (props: IGreeting) => {
    const {name,surname,id,telegram} = props
    return (
        <div>
            <h3
                style={{fontWeight: 600, letterSpacing: '0.1rem', color: 'mediumaquamarine'}}
            >Hi,{name} {surname}<br/>
                <p style={{fontWeight:300,
                    marginTop:'150px',fontSize:'16px'}}>
                    id in server: {id}
                </p>
                <p style={{marginTop:'5px'}}>
                    contact: @{telegram}</p>

            </h3>
        </div>
    );
};

export default Greeting;
