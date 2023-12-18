import { useQuery } from 'react-query'
import { ArtworksApi } from '@api'

const useArtworks = (page: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['artworks', page],
    queryFn: () => ArtworksApi.getArtworks(page),
  })
  return { data, isLoading, isError }
}

export { useArtworks }
