import './Footer.css'
import LinkNav from '../linknav/LinkNav'

export function Footer(){
    return (
      <footer>
        <nav>
            <div className='listas'>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Produtos</h3>
                    <li><LinkNav url="/golfinho" texto='Barbie Golfinho Mágico'/> </li>
                    <li><LinkNav url="/rainha" texto='Barbie Rainha das Fadas'/></li>
                    <li><LinkNav url="/gravida" texto='Barbie grávida'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Company</h3>
                    <li><LinkNav url="/contato" texto='Contact us'/></li>
                    <li><LinkNav url="/investors" texto='For Investors'/></li>
                    <li><LinkNav url="/services" texto='Professional Services'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Comunidade</h3>
                    <li><LinkNav url="/comunidade" texto='Barbie Comunidade'/></li>
                    <li><LinkNav url="/comunidadebarbie" texto='Comunidade da Barbie'/></li>
                    <li><LinkNav url="/faq" texto='FAQ'/></li>
                </ul>
            </div>
        </nav>
      </footer>
    )
  }


export default Footer