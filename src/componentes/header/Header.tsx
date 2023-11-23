import './Header.css'
import LinkNav from '../linknav/LinkNav'

export function Header(){
  return(
    <header>
    <div>
      <h1>LOGO</h1>
    </div>
      <nav>
        <ul>
          <li>
            <LinkNav url="/" texto='Home'/>
          </li>
          <li>
            <LinkNav url="/noticias" texto='Noticias'/>
          </li>
          <li>
            <LinkNav url="/sobre" texto='Sobre'/>
          </li>
          <li className='ultimo'>
            <LinkNav url="/contato" texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header