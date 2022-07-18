export default function Story(props) {
    return(
        <div className="story">
                <div className="imagem">
                    <img src={props.img} alt="lalalalala" />
                </div>
                <div className="usuario">
                    {props.nome}
                </div>
            </div>
    )
}