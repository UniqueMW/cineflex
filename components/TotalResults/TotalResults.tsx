import React from 'react'

interface ITotalResults {
  numberOfResults: number
}

function TotalResults({ numberOfResults }: ITotalResults): JSX.Element {
  return (
    <div className="w-full text-lg text-paragraph font-paragraph tracking-wider space-x-2 lg:py-4 py-2">
      <h2 className="w-full text-right">{numberOfResults} Results</h2>
    </div>
  )
}

export default TotalResults
