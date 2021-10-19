import styled from "@emotion/styled";
import LoginIcon from "@mui/icons-material/Login";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { MessageFilled, MessageOutlined } from "@ant-design/icons";
import PaymentIcon from "@mui/icons-material/Payment";

import { Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export const PayModal = styled(Modal)`
  /* width: 100px; */
  /* height: 200px; */
`;

export const Payment = styled(PaymentIcon)`
  font-size: 34px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const MyPageOutline = styled(AccountCircleOutlinedIcon)`
  font-size: 34px;
  cursor: pointer;
`;

export const MyPageFilled = styled(AccountCircleIcon)`
  font-size: 34px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
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

export const ListFilled = styled(MessageFilled)`
  font-size: 28px;
  cursor: pointer;
`;

export const ListOutline = styled(MessageOutlined)`
  font-size: 28px;
  cursor: pointer;
`;

export const HomeOutline = styled(HomeOutlinedIcon)`
  font-size: 34px;
  cursor: pointer;
`;

export const HomeFilled = styled(HomeIcon)`
  font-size: 34px;
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
export const Name = styled.div`
  width: 200px;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
