import styled from "@emotion/styled";
import LoginIcon from "@mui/icons-material/Login";
import {
  HomeOutlined,
  MessageOutlined,
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

export const Home = styled(HomeOutlined)`
  font-size: 26px;
  cursor: pointer;
`;
export const Message = styled(MessageOutlined)`
  font-size: 26px;
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
  width: 170px;
`;
