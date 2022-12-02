import "./FriendsList.scss";
import UserLogo from "../../assets/images/user.png";
import AddFriend from "../../assets/images/addfriend.png";

const FriendsList = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <p>Friends</p>
          <img className="sidebar__img" src={AddFriend}></img>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Sam</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Carlos</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Shirley</p>
          </div>
        </div>
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img className="sidebar__img" src={UserLogo}></img>
          </div>
          <div className="sidebar__user-info">
            <p className="sidebar__username">Fran</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsList;
