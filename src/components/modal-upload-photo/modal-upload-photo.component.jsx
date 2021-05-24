import classNames from 'classnames';

const ModalUploadPhoto = ({ isOpen, close }) => {
  return (
    <div
      className={classNames('modal upload-crop-modal ', {
        'is-active': isOpen,
      })}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <div className="box-header">
            <img
              src="https://nephos.cssninja.io/assets/img/logo/nephos-greyscale.svg"
              alt=""
            />
            <span>UPLOAD PICTURE</span>
            <div onClick={() => close()} className="modal-delete">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="box-body">
            <label
              className="profile-uploader-box"
              htmlFor="upload-profile-picture"
            >
              <span className="inner-modal-content">
                <img
                  src="https://nephos.cssninja.io/assets/img/illustrations/profile.svg"
                  alt=""
                />
                <span>
                  Click here to <br />
                  upload a profile picture
                </span>
              </span>
              <input type="file" accept="image/*" />
            </label>
            <div className="upload-demo-wrap is-hidden">
              <div id="upload-profile"></div>
              <div className="upload-help buttons">
                <a className="button feather-button primary-button is-rounded raised is-bold profile-reset is-hidden">
                  Reset Picture
                </a>
                <button className="button feather-button secondary-button is-rounded raised is-bold opaque is-disabled">
                  Use Picture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalUploadPhoto;
