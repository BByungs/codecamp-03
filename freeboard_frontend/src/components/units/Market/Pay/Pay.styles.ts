import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 100px;
  height: 30px;
  text-align: center;
  font-size: 18px;
  /* margin-right: 10px; */
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
`;

export const Button = styled.button`
  margin-left: 10px;
  width: 70px;
  height: 30px;
  border: none;
  background-color: #bdbdbd;
  :hover {
    opacity: 0.7;
  }
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row1 = styled.div`
  display: flex;
`;

export const Row2 = styled.div`
  margin-bottom: 20px;
`;
