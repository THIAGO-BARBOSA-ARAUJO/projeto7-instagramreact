import Story from "./Story"

export default function Stories() {
    
    const storiesObj = [
        {
            img: "img/meowed.svg",
            nome: "meowed"
        },
        {
            img: "img/barked.svg",
            nome: "barked"
        },
        {
            img: "img/nathanwpylestrangeplanet.svg",
            nome: "nathanwpylestrangeplanet"
        },
        {
            img: "img/wawawicomics.svg",
            nome: "wawawicomics"
        },
        {
            img: "img/respondeai.svg",
            nome: "respondeai"
        },
        {
            img: "img/filomoderna.svg",
            nome: "filomoderna"
        },
        {
            img: "img/barked.svg",
            nome: "barked"
        },
        {
            img: "img/memeriagourmet.svg",
            nome: "memeriagourmet"
        },
    ]

    return (

        <div className="stories">
            
            {storiesObj.map((data, i) => (<Story key={i} img={data.img} nome={data.nome}/>))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
