
import './Filme.css'
import imagem1 from "..//img/fbarbie1.webp"
import imagem2 from "..//img/fbarbie2.webp"
import imagem3 from "..//img/fbarbie3.webp"
import imagem4 from "..//img/fbarbie4.webp"

function Filme(){
    return(
        <div className="filme-content">
            <div className='imagens'>   
            <img className='img-meio' src={imagem2} alt="" />
            <img className='img-meio' src={imagem3} alt="" />
            <img className='img-meio' src={imagem1} alt="" />
            <img className='img-meio' src={imagem4} alt="" />
            </div>
           
        
        </div>
    )
}

export default Filme