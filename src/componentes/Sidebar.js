import SidebarSugestao from "./SidebarSugestao"

export default function SideBar() {

    const sidebarObg = [
        {
            img: "img/chibirdart.svg",
            nome: "chibirdart"
        },
        {
            img: "img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar"
        },
        {
            img: "img/adorable_animals.svg",
            nome: "adorable_animals"
        },
        {
            img: "img/smallcutecats.svg",
            nome: "smallcutecats"
        }
    ]

    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="img/catanacomics.svg" alt="lalalalalala" />
                <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sidebarObg.map((data, i) => (<SidebarSugestao key={i} img={data.img} nome={data.nome}/>))}
                
                
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
