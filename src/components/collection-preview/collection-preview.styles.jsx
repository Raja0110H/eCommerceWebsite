import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    color: purple;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;