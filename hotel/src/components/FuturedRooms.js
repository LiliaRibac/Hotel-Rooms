import React, { Component } from 'react'
import {RoomContext} from "../context"

export default class FuturedRooms extends Component {
  static contextType = RoomContext
  render() {
    const {featuredRooms:rooms}= this.context
    console.log(rooms)
    return (
      <div>
        hello from futured rooms 
        {/* <RoomContext/> */}
      </div>
    )
  }
}
