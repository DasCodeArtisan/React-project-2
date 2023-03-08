import React, { useState } from 'react'


const Questions = (props) => {
    const { question}=props
    const [isopen, setIsopen] = useState(false)
  return (
   <section>
    <div className={isopen ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={()=>setIsopen(!isopen)}>{isopen?"-":"+"}</button>
    </div>
    {isopen &&<p>{question.info}</p>}
   </section>
  )
}

export default Questions
