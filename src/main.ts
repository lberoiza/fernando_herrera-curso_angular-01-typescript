import './style.css'
import typescriptLogo from './typescript.svg'

// Topics
import './topics/01-basic-types'
import './topics/02-object-interface'
import './topics/03-functions'
import './topics/04-homework-types'
import './topics/05-basic-destructuring'
import './topics/07-import-export'
import './topics/08-classes'
import './topics/09-generics'
import './topics/10-decorators'


// DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    <h1>Hello TypeScript</h1>
  </div>
`

