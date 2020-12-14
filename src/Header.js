import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'



function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
             ):(
                    
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>

            )}
            
            <Link to="/">
            <img alt="semi coln logo" className='header__logo' src="https://images.squarespace-cdn.com/content/v1/596ff523bebafb7466a3f85d/1500569216464-KMDJMVGDFVLL4GBSB5Z0/ke17ZwdGBToddI8pDm48kIIWdAnyBSrZ5E6Gv7JXlDh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nqf2HYKlysnoifqMU5NjJx7yqCGE_I8MD34_rHhpOCXJXL4amoIyEjBbTEx2gJ8RA/the+semicolon.png"></img>
            </Link>
            <Link to="/chats" >
            <IconButton>
                <ChatIcon fontSize="large" className="header__icon" />
            </IconButton>
            </Link>
        </div>
        )
}


export default Header