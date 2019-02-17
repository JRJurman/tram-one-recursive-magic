import Tram from 'tram-one'
import { getEngine } from './engine'
import buildApp from './buildApp'

const app = new Tram({ webEngine: getEngine() })
buildApp(app)
  .start('#app')
