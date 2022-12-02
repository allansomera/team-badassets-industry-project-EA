import "./LeftSidebar.scss";

const LeftSidebar = ({ redeemHandler }) => {
  return (
    <>
      <div className="leftsidebar">
        <ul className="leftsidebar__sidenav">
          <div className="leftsidebar__top">
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-home"></div>
              <div className="leftsidebar__text">Home</div>
            </li>
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-store"></div>
              <div className="leftsidebar__text">Store</div>
            </li>
            <li className="leftsidebar__item padding-hack">
              <div className="leftsidebar__item-library"></div>
              <div className="leftsidebar__text">Game Library</div>
            </li>
          </div>
          <div className="leftsidebar__bottom">
            <li className="leftsidebar__item">
              <div className="leftsidebar__item-redeem "></div>
              <div
                className="leftsidebar__text sub-text"
                onClick={() => redeemHandler()}
              >
                Redeem Code
              </div>
            </li>
            <li className="leftsidebar__item download-hack">
              <div className="leftsidebar__item-download"></div>
              <div className="leftsidebar__text sub-text download-hack">
                Download
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
