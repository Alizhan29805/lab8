import React from 'react'
import { SidebarData } from './SidebarData'
import "./App.css"

function Sidebar() {
  return (
    <div className='Aside'>
        <ul>
        {SidebarData.map((val, key)=> {
        return(
            <li key={key}> 
            <div>
                {val.title}
            </div> 
            </li>
        )
        
            })}
        </ul>
    </div>
  )
}

export default Sidebar