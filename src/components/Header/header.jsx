import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="images/youtube-logo.png" alt="" />
      </div>
      <div className="header__center">
        <input type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationIcon />
        <Avatar alt="Shiva Kanyal" src="" />
      </div>
    </div>
  );
};

export default Header;
