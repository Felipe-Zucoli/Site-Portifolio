import Avatar from '../img/Felipe.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const SideBar = () => {
  return  <aside id="sidebar">
<img src={Avatar} alt="Felipe Zucoli" />
<p className="title">Desenvolvedor</p>
<SocialNetworks />
<InformationContainer />
<a href="https://www.youtube.com/results?search_query=como+colocar+um+arquivo+do+pc+no+meu+codigo" className="btn">Download currículo</a>
  </aside>
}

export default SideBar