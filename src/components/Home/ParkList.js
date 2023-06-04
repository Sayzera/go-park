import React from 'react'
import ParkItem from './ParkItem'
import { useSelector } from 'react-redux'
import { selectParks } from '../../redux/mainSlice'

export default function ParkList() {
  const parks = useSelector(selectParks)
  return (
    <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
      {parks.map((park) => (
        <ParkItem key={park.id} park={park} />
      ))}
    </ul>
  )
}
