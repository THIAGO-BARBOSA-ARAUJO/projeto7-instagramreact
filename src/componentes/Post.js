import React from "react"

export default function Post(props) {
    const [curtida, setCurtida] = React.useState(false)
  return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.data.imgUsuario} />
                    {props.data.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                {props.data.isVideo 
                    ? <video muted loop autoPlay src={props.data.post}></video>
                    : <img onDoubleClick={()=>setCurtida(!curtida)} src={props.data.post} alt="lalalala" />
                }
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {curtida 
                            ? <ion-icon onClick={()=>setCurtida(!curtida)} name="heart"></ion-icon> 
                            : <ion-icon onClick={()=>setCurtida(!curtida)} name="heart-outline"></ion-icon>
                        }
                        
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.data.imgCurtiu} alt="lalalala" />
                    <div className="texto">
                        Curtido por <strong>{props.data.nomeCurtiu}</strong> e <strong>outras {props.data.qtdLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
  )
}
