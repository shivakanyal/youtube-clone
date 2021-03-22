import SidebarRow from "../SidebarRow/sidebarRow";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import watchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/TheatersOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subcription" Icon={SubscriptionIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={watchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutLinedIcon} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
};

export default Sidebar;
