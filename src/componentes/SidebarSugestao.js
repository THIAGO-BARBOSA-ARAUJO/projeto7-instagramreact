export default function SidebarSugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} alt="lalalalalala" />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}