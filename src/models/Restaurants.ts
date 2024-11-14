class Restaurants {
  id: number
  image: string
  infos: string[]
  title: string
  rating: string
  description: string
  page: string
  link: string
  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    rating: string,
    description: string,
    page: string,
    link: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
    this.description = description
    this.page = page
    this.link = link
  }
}

export default Restaurants
