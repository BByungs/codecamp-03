import styled from "@emotion/styled";
import LoginIcon from "@mui/icons-material/Login";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  CompassOutlined,
  HeartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1200px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 123px;
  height: 35px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeOutline = styled(HomeOutlinedIcon)`
  font-size: 34px;
  cursor: pointer;
`;

export const HomeFilled = styled(HomeIcon)`
  font-size: 34px;
  cursor: pointer;
`;

export const MarketOutline = styled(ShoppingCartOutlinedIcon)`
  font-size: 30px;
  cursor: pointer;
`;

export const MarketFilled = styled(ShoppingCartIcon)`
  font-size: 30px;
  cursor: pointer;
`;
export const Compass = styled(CompassOutlined)`
  font-size: 26px;
  cursor: pointer;
`;
export const Love = styled(HeartOutlined)`
  font-size: 26px;
  cursor: pointer;
`;
export const Logout = styled(LogoutOutlined)`
  font-size: 26px;
  cursor: pointer;
`;
export const Login = styled(LoginIcon)`
  font-size: 26px;
  cursor: pointer;
`;
export const Name = styled.span`
  width: 200px;
  text-align: center;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`;
