import React from 'react'
import { useDispatch } from 'react-redux'
import { setParkCase } from '../../redux/mainSlice'

export default function ParkCase() {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center gap-5">
      {' '}
      <div className="flex items-center ">
        <input
          defaultChecked
          id="default-radio-1"
          type="radio"
          onClick={() => dispatch(setParkCase(0))}
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Park Yeri Ekle
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          onClick={() => dispatch(setParkCase(1))}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Yolcu Ekle
        </label>
      </div>
    </div>
  )
}
