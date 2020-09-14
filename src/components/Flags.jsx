import React from 'react'

const Flags = ({countries}) => {
    return(
        <>
            {countries.map(country => 
                <div key={country.name}>
                    <img style={{width: '200px'}} alt='' src={country.flag}/>
                </div>
            )}
        </>
    )
}

export default Flags