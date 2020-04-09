import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomList"



export default function RoomContainer() {
  return (
    <div>
    Hello from rooms 
      <RoomsFilter/>
      <RoomsList/>
    </div>
  )
}
