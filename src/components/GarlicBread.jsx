import React from 'react'

const GarlicBread = () => {
  return (
    <div className="pt-6">

      <h1 className="font-Bree text-white text-4xl ">Garlic Bread</h1>
        
       <h2 className="font-Bree text-green-600"> Vegetarian </h2>
       /*Vegetarian menu starts */
         <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">MASALA</span> <span className="text-2xl">100-/-</span> </li>
          <li><span className="px-4">CHEESY MOZARELLA</span ><span className="text-2xl">100-/-</span> </li>
          <li><span className="px-4">CHEESY CORN STUFF </span><span className="text-2xl">100-/-</span> </li>
          <li><span className="px-4">CHESSY PEPPY TOMATO</span> <span className="text-2xl">120-/-</span> </li>
          <li><span className="px-4">CHESSY VEGGIES STUFF</span><span className="text-2xl">150-/-</span> </li>
          <li><span className="px-4">TWISTY GARIC BREAD</span> <span className="text-2xl">150-/-</span> </li>
         </ul>
       /*Vegetarian Menu Ends */
       
       
       
       <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
        /*Non Vegetarian menu Starts */
        <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">CHICKEN PEPPERONI</span> <span className="text-2xl">170-/-</span> </li>
          <li><span className="px-4">BBQ CHICKEN TIKKA</span ><span className="text-2xl">220-/-</span> </li>
          <li><span className="px-4">CHIKEN LARGEST </span><span className="text-2xl">599-/-</span> </li>
         </ul>
        /*Non Vegettarin menu ends  */
    </div>
  )
}

export default GarlicBread