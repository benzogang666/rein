import "./Contacts.css";

import { IoLogoTiktok, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="social-networks">
          <div className="social-networks-label">Соцсети:</div>
          <div className="social-networks-storage">
            <IoLogoTiktok />
            <IoLogoInstagram />
            <IoLogoWhatsapp />
          </div>
        </div>
        <div className="branches">
          <div className="branches-label">Филиалы:</div>
          <div className="branches-storage">
            <div className="branch">
              <div className="branch-status"></div>
              <div className="branch-data">
                <div className="branch-named">German</div>
                <div className="branch-number">+7 899 51 84 511</div>
                <div className="branch-adress">Гагарина 89</div>
              </div>
            </div>
            <div className="branch">
              <div className="branch-status"></div>
              <div className="branch-data">
                <div className="branch-named">German</div>
                <div className="branch-number">+7 899 51 84 511</div>
                <div className="branch-adress">Гагарина 89</div>
              </div>
            </div>
            <div className="branch">
              <div className="branch-status"></div>
              <div className="branch-data">
                <div className="branch-named">German</div>
                <div className="branch-number">+7 899 51 84 511</div>
                <div className="branch-adress">Гагарина 89</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;