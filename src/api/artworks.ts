import { ArtworkResponse } from '@types'
import { api } from './api'

const getArtworks = async (page: number) => {
  const response = await api.get<ArtworkResponse>(`/artworks?page=${page}&limit=100`)
  return response.data
}

const getArtwork = async (id: number) => {
  const response = await api.get<ArtworkResponse>(`/artworks/${id}`)
  return response.data
}

export const ArtworksApi = {
  getArtworks,
  getArtwork,
}
