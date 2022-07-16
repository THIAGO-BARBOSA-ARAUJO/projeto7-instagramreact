import NavBar from './componentes/Navbar'
import SideBar from './componentes/Sidebar'
import Stories from './componentes/Stories'
import Posts from './componentes/Posts'
import FundoMobile from './componentes/FundoMobile'


export default function App(){
    return(
        <div>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
            <SideBar />
            </div>
            <FundoMobile />
        </div>
    )
}