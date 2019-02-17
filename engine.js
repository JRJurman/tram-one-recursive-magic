import buildApp from './buildApp'

export const getEngine = () => {
  if (typeof window === 'undefined') {
    return buildApp().webEngine
  }
  window.tramEngine = window.tramEngine || {}
  return window.tramEngine
}

// method for setting up the store for tests
export const scaffoldEngine = () => {
  window.tramEngine = buildApp().webEngine
}

export default getEngine
