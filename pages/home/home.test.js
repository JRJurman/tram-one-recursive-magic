import { scaffoldEngine } from '../../engine'
import homePage from './home'

describe('home page', () => {
  beforeEach(() => {
    // setup the store on the window
    scaffoldEngine()
  })
  test('snapshot', () => {
    const tree = homePage()
    expect(tree).toMatchSnapshot()
  })
})
