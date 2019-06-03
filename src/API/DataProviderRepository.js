import axios from 'axios'

const DataProvider = axios.create({
  /**
   * This should not be here actually. I decided to keep host as it is for simplicity.
   */
  baseURL: 'http://localhost:5000/api/v1/images'
})

export default {
  /**
   * Gets images from Data Provider Service
   * @returns {Promise<AxiosResponse<T>>}
   */
  get () {
    return DataProvider.get('')
  },
  /**
   * Searches images with given phrase in Data Provider Service
   * @param phrase {String}
   * @returns {Promise<AxiosResponse<T>>}
   */
  search (phrase) {
    return DataProvider.get(`/search/${phrase}`)
  }
}
