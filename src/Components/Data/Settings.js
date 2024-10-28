import { FaUserAlt, FaLock, FaShieldAlt, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import Accountsetting from "../MobileSettingComponents/Accountsetting";
import Passwordsetting from "../MobileSettingComponents/Passwordsetting";
import MobileNotification from "../MobileSettingComponents/MobileNotification";

const settingdata = [
    { id: 1, icon: FaUserAlt,label: "Account Setting", component : Accountsetting},
    { id: 2, icon: FaLock, label: "Password & Security", component :Passwordsetting },
    { id: 3, icon: FaShieldAlt, label: "Privacy Policy", component : Passwordsetting },
    { id: 4, icon: FaQuestionCircle, label: "Help & Support" , component :MobileNotification },
    { id: 5, icon: FaSignOutAlt, label: "Log Out", component : Passwordsetting },
  ];

  export default settingdata;