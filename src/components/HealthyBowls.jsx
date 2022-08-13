import React from 'react'

const HealthyBowls = () => {
  return (
    <div className="pt-8">

      <h1 className="font-Bree text-white text-4xl ">Healthy Bowl(Gym Holics)</h1>
        
       <h2 className="font-Bree text-green-600"> Vegetarian </h2>
       /*Vegetarian menu starts */
         <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">MULTIGRAIN PANEER SUBWAY</span> <span className="text-2xl">170-/-</span> </li>
          <li><span className="px-4">SAUTEED VEGGIES & PANEER</span ><span className="text-2xl">220-/-</span> </li>
          <li><span className="px-4">GREEK SALAD </span><span className="text-2xl">200-/-</span> </li>
          <li><span className="px-4">VEG PLATTER </span> <span className="text-2xl">240-/-</span> </li>
         </ul>
       /*Vegetarian Menu Ends */
       
       
       
       <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
        /*Non Vegetarian menu Starts */
        <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">BBQ Chicken Tikka Sub</span> <span className="text-2xl">220-/-</span> </li>
          <li><span className="px-4">CHICKEN AND VEGGIES SALAD</span ><span className="text-2xl">200-/-</span> </li>
          <li><span className="px-4">CHIKEN PLATTER </span><span className="text-2xl">280-/-</span> </li>
         </ul>
        /*Non Vegettarin menu ends  */
    </div>
  )
}

export default HealthyBowls