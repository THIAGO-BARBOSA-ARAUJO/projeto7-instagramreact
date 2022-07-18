import Post from "./Post"

export default function Posts() {


    const postObj = [
        {
            imgUsuario: "../img/meowed.svg",
            nomeUsuario: "meowed",
            post: "img/gato-telefone.svg",
            imgCurtiu: "img/respondeai.svg",
            nomeCurtiu: "respondeai",
            qtdLikes: "101.523",
            isVideo: false
        },
        {
            imgUsuario: "img/barked.svg",
            nomeUsuario: "barked",
            post: "img/dog.svg",
            imgCurtiu: "img/adorable_animals.svg",
            nomeCurtiu: "adorable_animals",
            qtdLikes: "99.159",
            isVideo: false
        },
        {
            imgUsuario: "../img/meowed.svg",
            nomeUsuario: "th",
            post: "videos/video.mp4",
            imgCurtiu: "img/respondeai.svg",
            nomeCurtiu: "Thiago",
            qtdLikes: "200.000",
            isVideo: true
        }
    ]

    return (
        <div className="posts">
            {postObj.map((data, i) =>(<Post key={i} data={data}/>))}
        </div>
    )
}