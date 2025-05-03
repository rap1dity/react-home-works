import styled from 'styled-components';

export const HomePageContainer = styled.main`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 90rem;
  height: 100%;
  padding: 6.25rem 7.5rem 8.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 11rem 34.625rem);
    background: var(--background);
  }
`;

export const Content = styled.div`
  & > h1 {
    font-size: 3.75rem;
    font-weight: normal;
    color: var(--foreground-dark);
    margin-bottom: 1.563rem;

    & > span {
      color: var(--primary);
    }
  }

  & > p {
    font-size: 1.125rem;
    font-weight: normal;
    padding-right: 3.75rem;
    margin-bottom: 3.125rem;
  }

  & > button {
    position: relative;
    padding: 1.25rem 2.188rem;
    color: var(--pure-white);
    background: var(--primary);
    border: none;
    cursor: pointer;
    border-radius: 0.375rem;
    margin-bottom: 1.875rem;

    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--pure-white);
      content: url('/src/shared/assets/category-wave.svg');
    }
  }
`;

export const TrustpilotRating = styled.div`
  & > img {
    margin-bottom: 0.625rem;
  }

  & > p {
    color: var(--foreground-dark);

    & > span {
      color: var(--primary);
    }
  }
`;
