import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"></img>
                <div className='header__input'>
                    <SearchIcon></SearchIcon>
                    <input placeholder='Search Facebook' type="text"></input>
                </div>
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'></HomeIcon>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'></FlagIcon>
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontSize='large'></SubscriptionsOutlinedIcon>
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontSize='large'></StorefrontOutlinedIcon>
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleRoundedIcon fontSize='large'></SupervisedUserCircleRoundedIcon>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL}></Avatar>
                    <h4>{user.displayName}</h4>

                    <IconButton>
                        <AddIcon></AddIcon>
                    </IconButton>

                    <IconButton>
                        <ForumIcon></ForumIcon>
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon></NotificationsActiveIcon>
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;