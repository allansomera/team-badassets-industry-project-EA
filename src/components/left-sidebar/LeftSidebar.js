import "./LeftSidebar.scss";

const LeftSidebar = ({ redeemHandler }) => {
  return (
    <>
      <div className="leftsidebar">
        <ul className="leftsidebar__sidenav">
          <div className="leftsidebar__top">
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-icon"></div>
              <div className="leftsidebar__text">Home</div>
            </li>
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-icon"></div>
              <div className="leftsidebar__text">Store</div>
            </li>
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-icon"></div>
              <div className="leftsidebar__text">Library</div>
            </li>
          </div>
          <div className="leftsidebar__bottom">
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-icon"></div>
              <div
                className="leftsidebar__text"
                onClick={() => redeemHandler()}
              >
                Redeem Code
              </div>
            </li>
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-icon"></div>
              <div className="leftsidebar__text">Download</div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
