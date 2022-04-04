import React from 'react'
import MainContent from './MainContent'
import Navigation from './Navigation'


const DefaultLayout = (props) => {
  return (
    <>
        <Navigation/>
        <MainContent>
            {props.children}
        </MainContent>
    </>
  )
}

export default DefaultLayout