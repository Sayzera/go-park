import React from 'react'
import { FaParking } from 'react-icons/fa'
import { AiFillCar, AiOutlineEdit } from 'react-icons/ai'
import ParkUpdateModal from './ParkUpdateModal'
export default function ParkItem({ park }) {
  const [display, setDisplay] = React.useState(false)
  return (
    <div>
      <ParkUpdateModal display={display} setDisplay={setDisplay} data={park} />
      <li>
        <div className="flex justify-between items-center">
          <div className="w-100 flex gap-10 items-center">
            <div className="flex  items-center">
              <FaParking className="w-4 h-4 mr-1.5 text-green-500  " />
              <span className="underline"> {park.name}</span>
            </div>
            <div className="flex  items-center">
              <AiFillCar className="w-4 h-4 mr-1.5 text-green-500  " />(
              {park.empty})
            </div>
          </div>

          <div>
            <AiOutlineEdit
              onClick={() => setDisplay(true)}
              className="mr-1.5 text-green-500 text-2xl cursor-pointer"
            />
          </div>
        </div>
      </li>
    </div>
  )
}
