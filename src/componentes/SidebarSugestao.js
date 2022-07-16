export default function SidebarSugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt="lalalalalala" />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}