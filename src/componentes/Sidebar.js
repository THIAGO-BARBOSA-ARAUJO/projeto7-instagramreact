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
        <div class="sidebar">
            <div class="usuario">
                <img src="img/catanacomics.svg" alt="lalalalalala" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sidebarObg.map(data => (<SidebarSugestao img={data.img} nome={data.nome}/>))}
                
                
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
