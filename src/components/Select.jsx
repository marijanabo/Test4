// import React from 'react'
// import { useEffect } from 'react'
// import { getByRegion, getAllCountries } from '../service'

// const Select = ({setCountries}) => {

//     const [value, setValue] = useState('')

//     useEffect(()=>{
//         if(value !== ''){
//             getByRegion(value).then(res => {
//                 setCountries(res.data)
//             })
//         }
//         else{
//             getAllCountries().then(res=> {
//                 setCountries(res.data)
//             })
//         }
//     })

//     return (
//         <select>

//         </select>
//     )
// }

// export default Select