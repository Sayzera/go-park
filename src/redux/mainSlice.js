import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  parks: [],
  selectedPark: null,
  parkCase: 0,
  // yolcular
  passengers: [],
}

const mainSlice = createSlice({
  name: 'main',
  initialState: initalState,
  reducers: {
    // Park Ekleme
    addPark: (state, action) => {
      state.parks.push(action.payload)
    },
    // Park Düzenleme
    setPark: (state, action) => {
      state.parks = state.parks.map((park) => {
        if (park.id === action.payload.id) {
          return action.payload
        }
        return park
      })
    },
    // Yolcu Ekleme
    addPassenger: (state, action) => {
      state.passengers.push(action.payload)
    },

    removePassenger: (state, action) => {
      state.passengers = state.passengers.filter(
        (passenger) => passenger.id !== action.payload
      )
    },

    setParkCase: (state, action) => {
      state.parkCase = action.payload
    },
  },
})

export const { addPark, setPark, setParkCase, addPassenger, removePassenger } =
  mainSlice.actions
export default mainSlice.reducer

// Selectors
export const selectParks = (state) => state.main.parks
export const selectSelectedPark = (state) => state.main.selectedPark
export const selectParkCase = (state) => state.main.parkCase
export const selectPassengers = (state) => state.main.passengers
