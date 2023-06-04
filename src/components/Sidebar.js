import React from 'react'

import ParkList from './Home/ParkList'
import { useSelector } from 'react-redux'
import { selectParks } from '../redux/mainSlice'

export default function Sidebar() {
  const parks = useSelector(selectParks)

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
        Otoparklar ({parks.length})
      </h2>
      <ParkList />
    </div>
  )
}
