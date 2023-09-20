import './Header.css'
import Link from './../link/Link'

export function Header(){
    return(
        <header>
            
            <nav>
                <ul className='botoes'>
                    <li className='btn btn1'>
                        <Link texto='Home'/>
                    </li>
                    <li className='btn btn1'>
                        <Link texto='Notícias'/>
                    </li>
                    <li className='btn btn1'>
                        <Link texto='Sobre'/>
                    </li>
                    <li className='btn btn1'>
                     <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header