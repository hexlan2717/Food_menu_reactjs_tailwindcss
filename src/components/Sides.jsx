import React from 'react'

const Sides = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">Starters</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">FRENCH FRIES</span> <span className="text-2xl">90-/-</span> </li>
        <li><span className="px-4">PERI PERI FRIES</span ><span className="text-2xl">160-/-</span> </li>
        <li><span className="px-4">CHEESE FINGERS</span><span className="text-2xl">220-/-</span> </li>
        <li><span className="px-4">CHEESE LOADED FRIES</span><span className="text-2xl">240-/-</span> </li>
        <li><span className="px-4">MALAI CHAPP TIKKA</span> <span className="text-2xl">190-/-</span> </li>
        <li><span className="px-4">BAKED NACHOS</span> <span className="text-2xl">180-/-</span> </li>

       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">BAKED NACHOS + CHI.</span> <span className="text-2xl">210-/-</span> </li>
        <li><span className="px-4">CHICKEN NUGGETS (12 PCS .)</span ><span className="text-2xl">180-/-</span> </li>
        <li><span className="px-4">SPL. BUTTER KEBABS</span><span className="text-2xl">300-/-</span> </li>
        <li><span className="px-4">CHICKEN STRIPS</span><span className="text-2xl">200-/-</span> </li>
        <li><span className="px-4">CHICKEN WINGS</span><span className="text-2xl">250-/-</span> </li>


       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Sides