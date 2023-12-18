import { useQuery } from 'react-query'
import { ArtworksApi } from '@api'

const useArtwork = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['artworks', id],
    queryFn: () => ArtworksApi.getArtwork(id),
  })
  return { data, isLoading, isError }
}

export { useArtwork }
