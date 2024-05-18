import React from 'react'

function NameList() {
    const name = ['zack', 'singh', 'joseph']
    const nameList =   name.map(name => <h1>{name}</h1> )
  return (
    <div>
     {nameList} 
    </div>
  )
}

export default NameList
