import "./RedeemModal.scss";

const RedeemModal = ({ modalContent, changeModalContent, closeHandler }) => {
  const renderModalContent = () => {
    switch (true) {
      case modalContent.modal2:
        return (
          <>
            <div className="redeem-modal">
              <div className="redeem-modal__content">
                <div className="redeem-modal__sec1">
                  <span
                    className="redeem-modal__close"
                    onClick={() => closeHandler()}
                  >
                    &times;
                  </span>
                </div>
                <div className="redeem-modal__sec2">
                  <div className="redeem-modal__text-header">
                    Confirm Code Activation
                  </div>
                </div>
                <div className="redeem-modal__mod2-sec3">
                  <div className="redeem-modal__mod2-sec3-left">
                    <div className="redeem-modal__mod2-sec3-left-imgcon"></div>
                  </div>
                  <div className="redeem-modal__mod2-sec3-right">
                    <div className="redeem-modal__mod2-sec3-right-con1">
                      <div className="redeem-modal__mod2-sec3-right-con1-prodheader">
                        Product
                      </div>
                      <div className="redeem-modal__mod2-sec3-right-con1-prodtitle">
                        The Sims 3
                      </div>
                    </div>
                    <div className="redeem-modal__mod2-sec3-right-con2">
                      <div className="redeem-modal__mod2-sec3-right-con2-accountheader">
                        AccountID
                      </div>
                      <div className="redeem-modal__mod2-sec3-right-con2-accountname">
                        amywalker123
                      </div>
                    </div>
                    <div className="redeem-modal__mod2-sec3-right-con3">
                      <button
                        className="redeem-modal__mod2-btn-cancel"
                        onClick={() => closeHandler()}
                      >
                        Cancel
                      </button>
                      <button
                        className="redeem-modal__mod2-btn-confirm"
                        onClick={() => changeModalContent(3)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case modalContent.modal3:
        return (
          <>
            <div className="redeem-modal">
              <div className="redeem-modal__content">
                <div className="redeem-modal__sec1">
                  <span
                    className="redeem-modal__close"
                    onClick={() => closeHandler()}
                  >
                    &times;
                  </span>
                </div>
                <div className="redeem-modal__sec2">
                  <div className="redeem-modal__text-header">
                    Confirm Code Activation
                  </div>
                </div>
                <div className="redeem-modal__mod3-sec3">
                  <div className="redeem-modal__mod3-sec3-left">
                    <div className="redeem-modal__mod3-sec3-left-imgcon"></div>
                  </div>
                  <div className="redeem-modal__mod3-sec3-right">
                    <div className="redeem-modal__mod3-sec3-right-con1">
                      Congrats, the Sims 3 is all yours! Download it now by
                      clickin the button below, or anytime by visiting your game
                      library.
                    </div>
                    <div className="redeem-modal__mod3-sec3-right-con2">
                      <button
                        className="redeem-modal__mod3-btn-cancel"
                        onClick={() => closeHandler()}
                      >
                        Cancel
                      </button>
                      <button className="redeem-modal__mod3-btn-download">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="redeem-modal">
              <div className="redeem-modal__content">
                <div className="redeem-modal__sec1">
                  <span
                    className="redeem-modal__close"
                    onClick={() => closeHandler()}
                  >
                    &times;
                  </span>
                </div>
                <div className="redeem-modal__sec2">
                  <div className="redeem-modal__text-header">Redeem a code</div>
                  <div className="redeem-modal__text-subheading">
                    Type produce below to redeem your game, in-game content,
                    gift card, or EA Play subscription time
                  </div>
                </div>
                <div className="redeem-modal__input-section">
                  <div className="redeem-modal__input-con1">
                    <label className="redeem-modal__label">
                      Enter your code
                    </label>

                    <input
                      className="redeem-modal__input"
                      placeholder="1234-ABCD-5678-EFGH"
                    />
                  </div>
                </div>
                <div className="redeem-modal__input-con2">
                  <button
                    className="redeem-modal__btn-cancel"
                    onClick={() => closeHandler()}
                  >
                    Cancel
                  </button>
                  <button
                    className="redeem-modal__btn-continue"
                    onClick={() => changeModalContent(2)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </>
        );
    }
  };
  return <>{renderModalContent()}</>;
};

export default RedeemModal;
