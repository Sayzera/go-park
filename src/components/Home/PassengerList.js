import React from 'react'
import { useSelector } from 'react-redux'
import { selectParks, selectPassengers } from '../../redux/mainSlice'
import PassengerItem from './PassengerItem'

export default function PassengerList() {
  const passenger = useSelector(selectPassengers)
  return (
    <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
      {passenger.map((passenger) => (
        <PassengerItem
          key={Math.random() * 1000}
          passenger={passenger}
          id={passenger.id}
        />
      ))}
    </ul>
  )
}
