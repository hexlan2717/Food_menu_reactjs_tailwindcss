import React from 'react'

const Wraps = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">WRAP IT UP</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">MEXICAN VEGGIES</span> <span className="text-2xl">120-/-</span> </li>
        <li><span className="px-4">MEXICAN PANEER TIKKA</span ><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">MUSHROOM & OLIVE</span><span className="text-2xl">170-/-</span> </li>
        <li><span className="px-4">SOYA TIKKA</span> <span className="text-2xl">200-/-</span> </li>
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">JUICY MEXICAN KEBAB</span> <span className="text-2xl">170-/-</span> </li>
        <li><span className="px-4">CHICKEN BREAST</span ><span className="text-2xl">200-/-</span> </li>
        <li><span className="px-4">CHICKEN BBQ TIKKA</span><span className="text-2xl">220-/-</span> </li>
        

       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Wraps