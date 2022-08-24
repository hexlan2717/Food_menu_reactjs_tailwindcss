import React from 'react'

const Burger = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">Burger</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">ALOO Tikki</span> <span className="text-2xl">50-/-</span> </li>
        <li><span className="px-4">VEGGIES CRUNCH</span ><span className="text-2xl">70-/-</span> </li>
        <li><span className="px-4">SOYA TIKKA</span><span className="text-2xl">90-/-</span> </li>
        <li><span className="px-4">CRUNCHY PANEER</span> <span className="text-2xl">90-/-</span> </li>
        <li><span className="px-4">VEG. MAHARAJA</span><span className="text-2xl">150-/-</span> </li>
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">CHEESY CHICKEN</span> <span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">MESSY MUTTON</span ><span className="text-2xl">90-/-</span> </li>
        <li><span className="px-4">DOUBLE CRUNCH</span><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">CHICKEN SUPRISE</span> <span className="text-2xl">160-/-</span> </li>
        <li><span className="px-4">CHICKEN ZINGER</span><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">CHICKEN MAHARAJA</span><span className="text-2xl">180-/-</span> </li>

       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Burger