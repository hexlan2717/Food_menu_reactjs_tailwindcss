import React from 'react'

const Sandwiches = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">Sandwiches On Grill</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">VEGGIES & PANEER</span> <span className="text-2xl">120-/-</span> </li>
        <li><span className="px-4">CHILLI PANEER GRILLED</span ><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">TOMATO & PANEER</span><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">MASHROOOM & OLIVE</span> <span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">CLUB SANDWICH</span><span className="text-2xl">150-/-</span> </li>
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">KEBBAB LOADED SANDWICH</span> <span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">THE MESSY CHICKEN</span ><span className="text-2xl">170-/-</span> </li>
        <li><span className="px-4">BBQ CHICKEN TIKKA</span><span className="text-2xl">200-/-</span> </li>
        

       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Sandwiches