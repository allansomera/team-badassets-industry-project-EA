import "./RedeemModal.scss";

const RedeemModal = () => {
  return (
    <>
      <div className="redeem-modal">
        <div className="redeem-modal__content">
          <div className="redeem-modal__sec1">
            <span className="redeem-modal__close">&times;</span>
          </div>
          <div className="redeem-modal__sec2">
            <div className="redeem-modal__text-header">Redeem a code</div>
            <div className="redeem-modal__text-subheading">
              Type produce below to redeem your game, in-game content, gift
              card, or EA Play subscription time
            </div>
          </div>
          <div className="redeem-modal__input-section">
            <div className="redeem-modal__input-con1">
              <label className="redeem-modal__label">Enter your code</label>
              <input
                className="redeem-modal__input"
                placeholder="1234-ABCD-5678-EFGH"
              />
            </div>
          </div>
          <div className="redeem-modal__input-con2">
            <button className="redeem-modal__btn-cancel">cancel</button>
            <button className="redeem-modal__btn-continue">continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemModal;
