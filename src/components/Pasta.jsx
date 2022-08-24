import React from 'react'

const Pasta = () => {
  return (
    <div className="pt-8">

      <h1 className="font-Bree text-white text-4xl ">Pasta</h1>
        
       <h2 className="font-Bree text-green-600"> Vegetarian </h2>
       /*Vegetarian menu starts */
         <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">WHITE SAUCE PENNE</span> <span className="text-2xl">150-/-</span> </li>
          <li><span className="px-4">RED SAUCE PENNE</span ><span className="text-2xl">150-/-</span> </li>
          <li><span className="px-4">PINK SAUCE PENNE </span><span className="text-2xl">170-/-</span> </li>
          <li><span className="px-4">CHESSY NACHOS CORN</span> <span className="text-2xl">210-/-</span> </li>
          <li><span className="px-4">TANDOORI MAKHNI</span><span className="text-2xl">200-/-</span> </li>
          <li><span className="px-4">SPL. BAKED</span> <span className="text-2xl">270-/-</span> </li>
         </ul>
       /*Vegetarian Menu Ends */
       
       
       
       <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
        /*Non Vegetarian menu Starts */
        <ul className="font-Monty text-white font-bold">
          <li><span className="px-4">BUTTER CHICKEN PASTA</span> <span className="text-2xl">250-/-</span> </li>
          <li><span className="px-4">WHITE SAUCE PENNE</span> <span className="text-2xl">220-/-</span> </li>
          <li><span className="px-4">RED SAUCE PENNE</span ><span className="text-2xl">220-/-</span> </li>
          <li><span className="px-4">PINK SAUCE PENNE </span><span className="text-2xl">230-/-</span> </li>
          <li><span className="px-4">CHESSY NACHOS CORN</span> <span className="text-2xl">250-/-</span> </li>
          <li><span className="px-4">TANDOORI MAKHNI</span><span className="text-2xl">250-/-</span> </li>
          <li><span className="px-4">SPL. BAKED</span> <span className="text-2xl">330-/-</span> </li>
         </ul>
        /*Non Vegettarin menu ends  */
    </div>
  )
}

export default Pasta