import styled, { css } from "styled-components";

export const TableContainer = styled.div`
  .table__container {
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  &:nth-child(even){
    background-color: #ddd;
  }

  &:hover {
    background-color: #ccc;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #eee;
  padding: 15px;
  text-align: center;

  ${({ unread }) => unread && css`
    color: #eee;
    text-transform: uppercase;
    background-color: #5f0a87;
    transition: 0.2s;

    &:hover{
      background-color: hsl(281, 86%, 38%);
    }

    &:active{
      background-color: hsl(281, 86%, 48%);
    }
  `}
`;

export const TableHeader = styled.th`
  border: 1px solid #eee;
  padding: 15px;
  text-align: center;
  background-color: #5f0a87;
  color: #fff;
  &:hover{
    background-color: hsl(281, 86%, 38%);
  }
`;