import { NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'
import edea from '../../assets/edea.png'
import home from '../../assets/home.svg'
import history from '../../assets/history.svg'
import './SoundHeader.scss'

export const SoundHeader = (props) => {

    return (
        <div className="app-header">
            <div>
                <img className="logo" src={logo} alt='logo-icon' />
                <img className="edea" src={edea} alt='EDEA-icon' />
            </div>
            <ul className="navbar-header">
                <li><NavLink exact to="/" activeClassName="active-nav"> <img className="icon-nav" src={home} alt='home-icon' /></NavLink></li>
                <li><NavLink to="/history" activeClassName="active-nav"><img className="icon-nav" src={history} alt='history-icon' /></NavLink></li>
            </ul>
        </div>
    )
}
