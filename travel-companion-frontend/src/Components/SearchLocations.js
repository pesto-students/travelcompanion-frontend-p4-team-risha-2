import React from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

function SearchLocations() {

  const {} = useLoadScript({googleMapsApiKey: ""})
  return (
    <div>SearchLocations</div>
  )
}

export default SearchLocations