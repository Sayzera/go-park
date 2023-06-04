import React from 'react'
import { useSelector } from 'react-redux'
import { selectPassengers } from '../redux/mainSlice'
import ParkCase from './Home/ParkCase'
import PassengerList from './Home/PassengerList'

export default function RightSidebar() {
  const passenger = useSelector(selectPassengers)

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
        <ParkCase />
        <div className="bg-gray-300 h-[1px] mb-4 mt-3"></div>
        Yolcular ({passenger.length})
      </h2>
      <PassengerList />
    </div>
  )
}
