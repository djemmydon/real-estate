import React from 'react'
import {Main} from './Main'
import Sidebar from './Sidebar'
import { Body } from './style/AdminStyle'


function Admin() {
  return (
    <Body>
      <Sidebar/>
      <Main/>
    </Body>
  )
}

export default Admin