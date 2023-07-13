import type { Genre, IWatchProvider } from 'types'

function groupFilterOptionsWithLogic(
  filters: Array<Genre & IWatchProvider>,
  logic: 'AND' | 'OR' = 'AND'
): string {
  let groupedFilters = ''
  for (const filter of filters) {
    if (groupedFilters.length > 0) {
      groupedFilters += logic === 'AND' ? ',' : '|'
    }

    groupedFilters +=
      filter.id !== undefined
        ? filter.id.toString()
        : filter.provider_id.toString()
  }
  return groupedFilters
}

export default groupFilterOptionsWithLogic
