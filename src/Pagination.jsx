import React from 'react'

export default function Pagination({goToNextPage, goToPrevPage}) {
  return (
    <div>
        {goToPrevPage && <button onClick={goToPrevPage}>Previous Page</button>}
        {goToNextPage && <button onClick={goToNextPage}>Next Page</button>}
    </div>
  )
}
