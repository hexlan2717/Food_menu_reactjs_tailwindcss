import React from 'react'

const Chinese = () => {
  return (
    <div className="pt-8">

    <h1 className="font-Bree text-white text-4xl ">Chinese (Only Dry )</h1>
      
     <h2 className="font-Bree text-green-600"> Vegetarian </h2>
     /*Vegetarian menu starts */
       <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">VEG. SPRING ROLL</span> <span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">CHEESY SPRING ROLL</span ><span className="text-2xl">190-/-</span> </li>
        <li><span className="px-4">CHILLY POTATO</span><span className="text-2xl">150-/-</span> </li>
        <li><span className="px-4">HONEY CHILLY POTATO</span> <span className="text-2xl">160-/-</span> </li>
        <li><span className="px-4">CHILLY PANEER</span> <span className="text-2xl">270-/-</span> </li>

       </ul>
     /*Vegetarian Menu Ends */
     
     
     
     <h2 className="font-Bree text-red-600 "> Non-Vegetarian </h2>
      /*Non Vegetarian menu Starts */
      <ul className="font-Monty text-white font-bold">
        <li><span className="px-4">CREAMY LOLLIPOP (5 PCS.)</span> <span className="text-2xl">280-/-</span> </li>
        <li><span className="px-4">CHILLY KEBAB</span ><span className="text-2xl">300-/-</span> </li>
        <li><span className="px-4">DRUMS OF HEAVEN (8 PCS.)</span><span className="text-2xl">340-/-</span> </li>
        

       </ul>
      /*Non Vegettarin menu ends  */
  </div>
  )
}

export default Chinese