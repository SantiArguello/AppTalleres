import React from 'react'
import TotalStock from './TotalStock'
import FiltradoStock from './FiltradoStock'
import TablaStock from './TablaStock'

const Stock = () => {
  return (
    <> 	<h2 className="text-2xl font-bold">Stock</h2>
<TotalStock />
<br/>
<br/>
<br/><FiltradoStock/>
<TablaStock/>

      
    </>
  )
  
}

export default Stock
