import styled, { css } from "styled-components";

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.COLOR.purple};
  `,
  success: css`
    background: ${({ theme }) => theme.COLOR.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.COLOR.danger[400]};
  `,
};

export const Container = styled.div`
  font-weight: bold;
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }
`;
