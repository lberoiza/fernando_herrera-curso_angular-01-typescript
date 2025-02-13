import './style.css'
import typescriptLogo from './typescript.svg'

import './topics/01-basic-types'
import './topics/02-object-interface'
import './topics/03-functions'
import './topics/04-homework-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1>Hello TypeScript</h1>
  </div>
`

