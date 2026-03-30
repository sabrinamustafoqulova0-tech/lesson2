import React from 'react'

export const Card=React.memo(
    ({onnClick,count}) => {
    const memmoizedCount=React.useMemo(()=>{
        console.log("Calculating memoised value");
        return count*2
    },[count])
    console.log("Child render");
    
  return (
    <>
      <p>Memoised Count: {memmoizedCount}</p>
      <button onClick={onnClick}>Click me</button>
    </>
  )
        
    }
)



export default Card
