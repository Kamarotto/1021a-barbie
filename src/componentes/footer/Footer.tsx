import './Footer.css'
import Link from './../link/Link'


export function Footer(){
    return (
      <footer>
        <nav>
            <div className='listas'>
              <div className='logo-rodape'><img className='img-rodape' src="../src/componentes/barbielogorodape.png" alt="" />
              <img className='imgs-rodape' src="../src/componentes/logo-instagram.png" alt="" />
              <img className='imgs-rodape'  src="../src/componentes/logo-facebook.avif" alt="" />
              <img className='imgs-rodape'  src="../src/componentes/logo-twitter.avif" alt="" />
              <img className='imgs-rodape'  src="../src/componentes/logo-youtube.png" alt="" />
              <img className='imgs-rodape'  src="../src/componentes/logo-discord.png" alt="" />
              </div>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Produtos</h3>
                    <li> <Link texto='Barbie Golfinho Mágico'/> </li>
                    <li><Link texto='Barbie Rainha das Fadas'/></li>
                    <li><Link texto='Barbie grávida'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Company</h3>
                    <li><Link texto='Contact us'/></li>
                    <li><Link texto='For Investors'/></li>
                    <li><Link texto='Professional Services'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Comunidade</h3>
                    <li><Link texto='Barbie Comunidade'/></li>
                    <li><Link texto='Comunidade da Barbie'/></li>
                    <li><Link texto='FAQ'/></li>
                </ul>
            </div>
        </nav>
      </footer>
    )
  }


export default Footer