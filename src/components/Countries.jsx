import React from 'react'

const Countries = ({countries}) => {
    return(
        <>
            {countries.map(country => 
                <div key={country.name}>
                    <h1>{country.name}</h1>
                    <img style={{width: '200px'}} alt='' src={country.flag}/>
                    <p>{country.population}</p>
                </div> )}
        </>
    )
}

export default Countries