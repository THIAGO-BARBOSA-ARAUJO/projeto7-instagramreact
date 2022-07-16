import Post from "./Post"

export default function Posts() {


    const postObj = [
        {
            imgUsuario: "../img/meowed.svg",
            nomeUsuario: "meowed",
            imgPost: "img/gato-telefone.svg",
            imgCurtiu: "img/respondeai.svg",
            nomeCurtiu: "respondeai",
            qtdLikes: "101.523"
        },
        {
            imgUsuario: "img/barked.svg",
            nomeUsuario: "barked",
            imgPost: "img/dog.svg",
            imgCurtiu: "img/adorable_animals.svg",
            nomeCurtiu: "adorable_animals",
            qtdLikes: "99.159"
        }
    ]

    return (
        <div class="posts">
            {postObj.map((data, i) =>(<Post key={i} data={data}/>))}
        </div>
    )
}