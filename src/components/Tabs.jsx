import React from 'react'

function Tabs({buttons, children, ButtonContainer}) {
  return (
    <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
    </>

  )
}

export default Tabs