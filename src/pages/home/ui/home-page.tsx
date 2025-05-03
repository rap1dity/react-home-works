import home from '@assets/home.png';
import trustpilotLogo from '@assets/trustpilot-logo.png';
import { HomePageContainer, Content, TrustpilotRating } from './home-page.styles.ts';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Content>
        <h1>
          Beautiful food & takeaway, <span>delivered</span> to your door.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500.
        </p>
        <button>Place an Order</button>
        <TrustpilotRating>
          <img src={trustpilotLogo} alt="logo" />
          <p>
            <span>4.8 out of 5</span> based on 2000+ reviews
          </p>
        </TrustpilotRating>
      </Content>
      <img src={home} alt="home" />
    </HomePageContainer>
  );
};
