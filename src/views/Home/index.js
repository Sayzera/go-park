import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPark,
  addPassenger,
  selectParkCase,
  selectParks,
  selectPassengers,
} from '../../redux/mainSlice'
import { MarkerF } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}
const center = {
  lat: 39.93327950605836,
  lng: 32.8470386803008,
}

export default function Home() {
  const dispatch = useDispatch()
  const parks = useSelector(selectParks)
  const passengers = useSelector(selectPassengers)
  const parkCase = useSelector(selectParkCase)

  const getLatLng = (e) => {
    // eğer 1 ise yolcu ekleme modu
    if (parkCase === 0) {
      dispatch(
        addPark({
          id: parks.length + 1,
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          // boş park sayısı
          empty: 0,
          // park yeri adı
          name: `Park ${parks.length + 1}`,
        })
      )
      // eğer 1 ise yolcu ekleme modu
    } else if (parkCase === 1) {
      dispatch(
        addPassenger({
          id: passengers.length + 1,
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          name: `Yolcu ${passengers.length + 1}`,
        })
      )
    }
  }

  const onLoad = (marker) => {
    // console.log('marker: ', marker)
  }

  return (
    <div className="w-100">
      <LoadScript googleMapsApiKey="AIzaSyB1vLdPUt6vRqKKwLsjm6BmZ1-vl_-mssI">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onDblClick={(e) => {
            getLatLng(e)
          }}
        >
          {parks?.map((park) => (
            <MarkerF
              key={park.id}
              label={park.name}
              onLoad={onLoad}
              position={{
                lat: park.lat,
                lng: park.lng,
              }}
            />
          ))}

          {passengers?.map((passenger) => (
            <MarkerF
              key={passenger.id + Math.random() + 'passenger'}
              onLoad={onLoad}
              position={{
                lat: passenger.lat,
                lng: passenger.lng,
              }}
              label={passenger.name}
              options={{
                icon: {
                  fillColor: '#FF0000',
                  fillOpacity: 1,
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 5,
                  strokeColor: '#FF0000',
                  strokeWeight: 1,
                },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
