import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  width: 100%;
  text-align: center;
  line-height: 56px;
  margin-top: 80px;
  margin-bottom: 60px;
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 30px;
  font-size: 19px;

  li {
    border: solid 1px #dee2e6;
    /* padding: 5px 8px; */
    background: #f5f6fa;

    & + li {
      /* margin-left: 12px; */
    }

    button {
      padding: 3px 7px;
      border-radius: 0px;
    }
  }
`;
