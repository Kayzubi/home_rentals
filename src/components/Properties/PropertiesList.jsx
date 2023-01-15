import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PropertyCard from '../PropertyCard/PropertyCard'
import ReactPaginate from 'react-paginate'

const PropertiesList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerpage = 3
  const visited = currentPage * itemsPerpage
  const pageCount = Math.ceil(data.length / itemsPerpage)

  const displayHouses = data
    .slice(visited, visited + itemsPerpage)
    .map((item, index) => (
      <PropertyCard
        key={index}
        title={item.title}
        price={item.price}
        image={item.image}
      />
    ))

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <>
      {displayHouses}
      <div>
        <ReactPaginate
          breakLabel={'...'}
          pageRangeDisplayed={2}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination__container'}
          nextLinkClassName={'pagination__next'}
          previousLinkClassName={'pagination__prev'}
          activeLinkClassName={'pagination__active'}
          disabledLinkClassName={'pagination__disabled'}
        />
      </div>
    </>
  )
}

PropertiesList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PropertiesList
