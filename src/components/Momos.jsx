import React from 'react'

const Momos = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">MOMOS</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">GRAVY MOMOS -PAN FRY</span> <span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">PAN FRY - PANEER</span ><span className="text-2xl">180-/-</span> </li>
        <li><span className="px-4">SPL. CHEESE BAKED</span><span className="text-2xl">240-/-</span> </li>
        
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">CHICKEN GRAVY</span> <span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">CHICKEN MOMOS</span ><span className="text-2xl">180-/-</span> </li>
               </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Momos