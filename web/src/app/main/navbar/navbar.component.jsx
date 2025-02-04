import { useEffect, useState } from "react";
import DesktopComponent from "./desktop/desktop.component";
import IpadComponent from "./ipad/ipad.component";
import PhoneComponent from "./phone/phone.component";

const Header = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 600);
  const [isiPad, setIsiPad] = useState(
    window.innerWidth > 600 && window.innerWidth <= 980
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsPhone(width <= 600);
      setIsiPad(width > 600 && width <= 980);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isPhone) {
    return <PhoneComponent />;
  } else if (isiPad) {
    return <IpadComponent />;
  } else {
    return <DesktopComponent />;
  }
};

export default Header;
