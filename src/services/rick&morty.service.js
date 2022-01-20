import axios from 'axios'

class RickMortyService {
  constructor() {
    this.app = axios.create({
      baseURL: 'https://rickandmortyapi.com/api/character'
    })
  }

  getAllCharacter = () => this.app.get("/")
}

export default RickMortyService