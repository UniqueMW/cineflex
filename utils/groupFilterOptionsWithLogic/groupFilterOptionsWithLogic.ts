import type { Genre } from 'types'

function groupFilterOptionsWithLogic(
  filters: Genre[],
  logic: 'AND' | 'OR' = 'AND'
): string {
  let groupedFilters = ''
  for (const filter of filters) {
    if (logic === 'AND') {
      groupedFilters = `${groupedFilters},${filter.id}`
    } else {
      groupedFilters = `${groupedFilters}|${filter.id}`
    }
  }
  return groupedFilters
}

export default groupFilterOptionsWithLogic
