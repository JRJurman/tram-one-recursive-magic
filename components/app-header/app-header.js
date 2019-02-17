import Tram from 'tram-one'
import { getEngine } from '../../engine'

const html = Tram.html()

export const appHeader = (attrs) => {
  const style = `
    color: ${attrs.color}; background: black;
    cursor: pointer; text-align: center;
    padding: 1em; user-select: none;
    margin: -8px -8px 8px -8px;
  `
  return html`
    <h1 style=${style} onclick=${attrs.advance} >
      tram-one-example
    </h1>
  `
}

export default (attrs, children) => appHeader({
  color: getEngine().store.color,
  advance: getEngine().actions.advance,
  ...attrs
}, children)
