import React from 'react'

function Header({name}) {
  console.log("Rendering header");
  return (
    <>
      {name}
    </>
  )
}
export default React.memo(Header)