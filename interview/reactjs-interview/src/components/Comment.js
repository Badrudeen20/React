import React, { useState } from 'react'
export default function Comment({ Comments }) {
 const [expand,setExpand] = useState(false)
 if(Comments.isReplay){
      return (
            <>
              <div onClick={() => setExpand(!expand)} style={{border: "1px solid #000"}}>
                  {Comments.name}
                  <div style={{margin:"16px"}}>
                        {Comments.replays.map((exp) => {
                              return (
                              <Comment key={exp.id} Comments={exp} />
                              );
                        })}
                  </div>
              </div>
            </>
      )
 }else{
      return (
            <>
               {Comments.name}
            </>
      )
 }
  
}
