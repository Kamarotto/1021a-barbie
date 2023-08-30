import './Footer.css'
import Link from './../link/Link'
import imagem from "../img/barbielogorodape.png"
import imagem1 from "../img/logo-youtube.png"
import imagem2 from "../img/logo-facebook.avif"
import imagem3 from "../img/logo-instagram.png"
import imagem4 from "../img/logo-twitter.avif"
import imagem5 from "../img/logo-discord.png"


export function Footer(){
    return (
      <footer>
        <nav>
            <div className='listas'>
              <div className='logo-rodape'><img className='img-rodape' src={imagem} alt="" />
              <img className='imgs-rodape' src={imagem1} alt="" />
              <img className='imgs-rodape' src={imagem2} alt="" />
              <img className='imgs-rodape' src={imagem3} alt="" />
              <img className='imgs-rodape' src={imagem4} alt="" />
              <img className='imgs-rodape' src={imagem5} alt="" />
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