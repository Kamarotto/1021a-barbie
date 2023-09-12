import Filme from './../filme/Filme'
import './Main.css'
import {useState} from 'react'
type FilmeTypes = {
    id: number,
    titulo: string,
    sinopse: string,
    imagem: string
}

export default function Main(){
   // const textodigitado = 'Barbie'
   const [textodigitado, funcaoMudaVariavel] = useState ()
   const filmes:FilmeTypes[] = [
       {
           id: 1,
           titulo:'Barbie', 
           sinopse:'Depois de ser expulsa da Barbieland, felicidade.',
           imagem: '/barbiereal.jpg'
       },
       {
           id: 2,
           titulo:'Barbie', 
           sinopse:'Depois de ser expulsa da Barbieland, felicidade.',
           imagem: '/barbiereal.jpg'
       },
   ]
       
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        funcaoMudaVariavel(e.target.value)
    }
    return(
       
            <>

         <div className="pesquisar">
            <input type="text" onChange={TrataTexto}/>
         </div>
           
               <div className="pesquisar">
                {
                (!textodigitado)?
                "":<p>Resultados para: {textodigitado} </p>
                }
           </div>

             <main className='content-main'>


             <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbiereal.jpg'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbiereal2.webp'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/cachorrofiadaputa.webp'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbo.png'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbienegra.jpeg'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbo.png'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/barbienegra.jpeg'/>

            <Filme titulo='Barbie' sinopse='Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência 
            menos do que perfeita, Barbie parte para o mundo humano em 
            busca da verdadeira felicidade.' 
            imagem='/cachorrofiadaputa.webp'/>
            
        </main>
            </>
          
    )
}