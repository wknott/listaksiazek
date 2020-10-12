import styled, { css } from "styled-components";

export const TableContainer = styled.div`
    overflow-x: auto;
    padding: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  &:nth-child(even){
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const TableCell = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 15px;
  text-align: center;

  ${({ unread }) => unread && css`
    color: ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.violet};
    transition: 0.2s;

    &:hover{
      filter: brightness(110%);
    }

    &:active{
      filter: brightness(120%);
    }
  `}
`;

export const TableHeader = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 15px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.lightText};
  &:hover{
    filter: brightness(110%);
  }
`;