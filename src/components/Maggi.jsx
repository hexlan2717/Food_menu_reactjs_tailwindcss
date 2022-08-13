import React from 'react'

const Maggi = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">MERI WALI MAGGI</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">OREGANO CHEESY</span> <span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">CHEESY CHILLI</span ><span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">CHINESE MAGGI</span><span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">PUNJABI TADKA </span> <span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">MAKHNI TANDOORI  </span> <span className="text-2xl">80-/-</span> </li>
        <li><span className="px-4">ALL VEGIES MASALA </span> <span className="text-2xl">80-/-</span> </li>
       
       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">ADD CHICKEN</span> <span className="text-2xl">50-/-</span> </li>
        <li><span className="px-4">BUTTER CHICKEN MAGGI</span ><span className="text-2xl">150-/-</span> </li>
               </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Maggi