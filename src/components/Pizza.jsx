import React from 'react'

const Pizza = () => {
  return (
    <div className="pt-6">

    <h1 className="font-Bree text-white text-4xl ">Pizza's <span className="font-Bree text-white text-3xl "> (S/M/L) </span></h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">PIZZA IN JAR</span ><span className="text-2xl">170-/-</span> </li>
        <li><span className="px-4">ONION CAPSICUM </span><span className="text-2xl">150 / 270 / 350</span> </li>
        <li><span className="px-4">DEULUXE VEGGIES</span> <span className="text-2xl">150 / 300 / 400</span> </li>
        <li><span className="px-4">FARMHOUSE</span><span className="text-2xl">170 / 350 / 480</span> </li>
        <li><span className="px-4">TANDOORI PANNER TIKKA</span> <span className="text-2xl">200 / 380 / 550 </span> </li>
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">CHICKEN LOADED</span> <span className="text-2xl">200 / 430 / 590</span> </li>
        <li><span className="px-4">BBQ CHICKEN TIKKA</span ><span className="text-2xl">200 / 430 / 590 </span> </li>
        <li><span className="px-4">BUTTER CHICKEN </span ><span className="text-2xl">230 / 450 / 600 </span> </li>

       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Pizza