import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/ImageGallery/Gallery'

let wrapper
const getImages = jest.fn()

beforeEach(() => {
  wrapper = shallowMount(Gallery, {
    methods: {
      getImages
    }
  })
})

describe('Gallery', () => {
  it('gets images from Data Provider on mount', () => {
    expect(getImages).toHaveBeenCalled()
  })
})
