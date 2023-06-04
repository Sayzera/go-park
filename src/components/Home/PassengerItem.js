import React, { useState } from 'react'
import { FaParking } from 'react-icons/fa'
import { AiFillCar, AiOutlineEdit } from 'react-icons/ai'
import { TbMapSearch } from 'react-icons/tb'
import { removePassenger, selectParks, setPark } from '../../redux/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function PassengerItem({ passenger }) {
  const parks = useSelector(selectParks)
  const dispatch = useDispatch()
  const [distances, setDistances] = useState([])

  function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (value) => (value * Math.PI) / 180
    const earthRadius = 6371 // Yeryüzünün ortalama yarıçapı (kilometre olarak)

    const dLat = toRadians(lat2 - lat1)
    const dLon = toRadians(lon2 - lon1)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = earthRadius * c
    return distance
  }

  const getDistances = async () => {
    const distances = []
    parks.map((park) => {
      if (park.empty !== 0)
        distances.push({
          id: park.id,
          name: park.name,
          lat: park.lat,
          lng: park.lng,
          empty: park.empty,
          distance: calculateHaversineDistance(
            passenger.lat,
            passenger.lng,
            park.lat,
            park.lng
          ),
        })
    })

    if (distances.length === 0) alert('Park Yeri Yok')

    distances.sort((a, b) => a.distance - b.distance)

    setDistances(distances)
  }

  const handleClick = (startLat, startLon, destLat, destLon) => {
    const link = `https://www.google.com/maps/dir/${startLat},${startLon}/${destLat},${destLon}`

    dispatch(removePassenger(passenger.id))
    dispatch(
      setPark({
        id: distances[0].id,
        name: distances[0].name,
        lat: distances[0].lat,
        lng: distances[0].lng,
        empty: parks[distances[0].id - 1].empty - 1,
      })
    )
    window.open(link, '_blank')
  }

  return (
    <div>
      <li>
        <div className="flex justify-between items-center">
          <div className="w-100 flex gap-10 items-center">
            <div className="flex  items-center">
              <FaParking className="w-4 h-4 mr-1.5 text-green-500  " />
              <span className="underline"> {passenger.name}</span>
            </div>
            <div className="flex  items-center">
              <AiFillCar className="w-4 h-4 mr-1.5 text-green-500  " />
            </div>
          </div>

          <div>
            <TbMapSearch
              className="mr-1.5 text-green-500 text-2xl cursor-pointer"
              onClick={() => getDistances()}
            />
          </div>
        </div>
        {distances.length > 0 && (
          <div
            className="cursor-pointer hover:underline"
            onClick={() => {
              handleClick(
                passenger.lat,
                passenger.lng,
                distances[0]?.lat,
                distances[0]?.lng
              )
            }}
          >
            <span className="text-sm">
              En yakın park yeri {distances[0]?.name}'e git
            </span>
          </div>
        )}
      </li>
    </div>
  )
}
