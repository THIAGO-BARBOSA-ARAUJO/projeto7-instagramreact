export default function Story(props) {
    return(
        <div class="story">
                <div class="imagem">
                    <img src={props.img} alt="lalalalala" />
                </div>
                <div class="usuario">
                    {props.nome}
                </div>
            </div>
    )
}