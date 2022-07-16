import React from "react"

export default function Post(props) {
    const [curtida, setCurtida] = React.useState(false)
  return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.data.imgUsuario} />
                    {props.data.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.data.imgPost} alt="lalalala" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {curtida 
                            ? <ion-icon onClick={()=>setCurtida(!curtida)} name="heart"></ion-icon> 
                            : <ion-icon onClick={()=>setCurtida(!curtida)} name="heart-outline"></ion-icon>}
                        
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.data.imgCurtiu} alt="lalalala" />
                    <div class="texto">
                        Curtido por <strong>{props.data.nomeCurtiu}</strong> e <strong>outras {props.data.qtdLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
  )
}
