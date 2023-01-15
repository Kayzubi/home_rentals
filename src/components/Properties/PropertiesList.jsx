import React from 'react'
import properties from '../../properties'
import PropertyCard from '../PropertyCard/PropertyCard'

const PropertiesList = () => {
  return (
    <>
      {properties.map((item, index) => (
        <PropertyCard
          key={index}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  )
}

export default PropertiesList
