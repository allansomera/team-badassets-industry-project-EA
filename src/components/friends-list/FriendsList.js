import "./FriendsList.scss";
import Hamburger from "../../assets/icons/hamburger-menu.png";
import UserOne from "../../assets/images/user-1.png";
import UserTwo from "../../assets/images/user-2.png";
import UserThree from "../../assets/images/user-3.png";
import SeeAllArrow from "../../assets/images/see-all.png";

const FriendsList = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__title-wrapper">
          <div className="sidebar__item">
            <p className="sidebar__title">Friends</p>
            <p className="sidebar__text">(2/29 online)</p>
          </div>
          <div className="sidebar__item">
            <img
              className="sidebar__title-menu"
              src={Hamburger}
              alt="Hamburger menu"
            ></img>
          </div>
        </div>
        <div>
          <img
            className="sidebar__user"
            src={UserOne}
            alt="Active chat user"
          ></img>
        </div>
        <div>
          <img
            className="sidebar__user"
            src={UserTwo}
            alt="Active chat user"
          ></img>
        </div>
        <div>
          <img
            className="sidebar__user"
            src={UserThree}
            alt="Inactive chat user"
          ></img>
        </div>
        <div className="sidebar__arrow-wrapper">
          <img
            className="sidebar__arrow"
            src={SeeAllArrow}
            alt="See all arrow"
          ></img>
        </div>
      </div>
    </>
  );
};

export default FriendsList;
