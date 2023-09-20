import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Técnico de Celular',
            descricao:"Estou trabalhando há 6 meses como técnico de celular na loja Mobile Store.",
            imagem:'/tecnicocelular.webp',
        },
        {
            id: 2,
            titulo:'Instituto Federal do Mato Grosso do Sul',
            descricao:'Sou estudante do terceiro ano do ensino médio do curso técnico de informática para internet do IFMS.',
            imagem:'/ifms.png',
        },
        {   
            id: 3,
            titulo:'Nascimbeni Jiu-Jitsu',
            descricao: "Sou lutador de Jiu Jitsu, atualmente na faixa azul, já participei de campeonatos onde no último (Copa Amizade de Umuarama) fiquei em segundo lugar na categoria de 10kg a mais que meu peso.",
            imagem:'/jiu.jpg',
        }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }

    return (
        <>
            <div className="campo-de-pesquisa">
                <p>Buscar um projeto:</p>
                <input type="text" placeholder='Pesquisar...' onChange={TrataTexto} />
                       {texto && <p>Resultados para: {texto} </p>}
            </div>
            <main className="content-main">
                {   
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
            </main>
        </>
    )
}