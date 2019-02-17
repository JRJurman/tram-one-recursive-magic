import Tram from 'tram-one'

import home from './pages/home'
import notFound from './pages/404'

import { color } from './components/app-header'

export default (app = new Tram({ webEngine: {} })) =>
  app
    .addActions({ color: color })
    .addRoute('/', home)
    .addRoute('/404', notFound)
