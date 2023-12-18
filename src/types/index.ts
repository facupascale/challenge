interface Artwork {
  alt_artist_ids: number[]
  alt_classification_ids: number[]
  alt_image_ids: number[]
  alt_material_ids: number[]
  alt_style_ids: number[]
  alt_subject_ids: number[]
  alt_technique_ids: number[]
  alt_titles: string | null
  api_link: string
  api_model: string
  artist_display: string
  artist_id: number
  artist_titles: string[]
  artwork_type_id: number
  artwork_type_title: string
  boost_rank: number | null
  catalogue_display: string | null
  category_ids: number[]
  category_titles: string[]
  classification_id: string | null
  classification_ids: number[]
  classification_title: string | null
  classification_titles: string[]
  color: { h: number; l: number; percentage: number; population: number; s: number }
  colorfulness: number
  copyright_notice: string
  credit_line: string
  date_display: string
  date_end: string
  date_qualifier_id: string | null
  date_qualifier_title: string | null
  date_start: string
  department_id: string | null
  department_title: string | null
  description: string | null
  dimensions: string
  dimensions_detail: any[]
  document_ids: number[]
  edition: string | null
  exhibition_history: string | null
  fiscal_year: number | null
  fiscal_year_deaccession: string | null
  gallery_id: string | null
  gallery_title: string | null
  has_advanced_imaging: boolean
  has_educational_resources: boolean
  has_multimedia_resources: boolean
  has_not_been_viewed_much: boolean
  id: number
  image_id: string
  inscriptions: string | null
  internal_department_id: number | null
  is_boosted: boolean
  is_on_view: boolean
  is_public_domain: boolean
  is_zoomable: boolean
  latitude: string | null
  latlon: string | null
  longitude: string | null
  main_reference_number: string
  material_id: string | null
  material_ids: number[]
  material_titles: string[]
  max_zoom_window_size: number
  medium_display: string
  nomisma_id: string | null
  on_loan_display: string | null
  place_of_origin: string
  provenance_text: string
  publication_history: string | null
  publishing_verification_level: string
  section_ids: number[]
  section_titles: string[]
  short_description: string | null
  site_ids: number[]
  sound_ids: number[]
  source_updated_at: string
  style_id: string | null
  style_ids: number[]
  style_title: string | null
  style_titles: string[]
  subject_id: string | null
  subject_ids: number[]
  subject_titles: string[]
  suggestion_autocomplete_all: any[]
  thumbnail: { alt_text: string; height: number; lqip: string; width: number }
  timestamp: string
  title: string
  updated_at: string
  video_ids: number[]
}

interface ArtworkResponse {
  data: Artwork[]
  pagination: {
    currentPage: number
    limit: number
    offset: number
    total: number
    total_pages: number
    next_url: string
  }
  info: {
    license_links: string[]
    license_text: string
    version: string
  }
  config: { iiif_url: string; website_url: string }
}

export type { ArtworkResponse, Artwork }
