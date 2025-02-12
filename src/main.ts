import './style.css'
import typescriptLogo from './typescript.svg'

import './topics/01-basic-types'
import './topics/02-object-interface'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1>Hello TypeScript</h1>
  </div>
`

