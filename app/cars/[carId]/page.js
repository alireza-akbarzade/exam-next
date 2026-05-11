import React from 'react'

const  page = ({params , searchParams}) => {
    
  return (
    <div>
      car id :
      {params.carId}

      carsearch :
      {searchParams.name}

    </div>
  )
}
export default page
