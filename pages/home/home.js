import Tram from 'tram-one'
import appHeader from '../../components/app-header'
import noJsWarning from '../../elements/no-js-warning'

const html = Tram.html({
  'app-header': appHeader,
  'no-js-warning': noJsWarning
})

export default () => {
  return html`
    <div>
      <app-header />
      <no-js-warning />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit <code>tram-one-example/pages/home.js</code>.
      </div>
    </div>
  `
}
