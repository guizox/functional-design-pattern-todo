import React from "react";
import Text from "./text";

const Header: React.FC = () => {
  return (
    <header
      className="h-[80px] w-screen sticky bg-gradient-to-r from-[#054256] to-[#6dc4cd]"
      data-testid="header"
    >
      <a href="/">
        <Text
          className="text-2xl text-white justify-start p-5 cursor-pointer"
          ellipsis={false}
        >
          InstaMotion
        </Text>
      </a>
    </header>
  );
};

export default Header;
