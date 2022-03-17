import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useAppDispatch } from './store';
import { siteInformationSelector } from './store/site';

import LandingPage from './pages/LandingPage';

import GlobalHeader from './components/organisms/GlobalHeader';

import HelloModal from './components/molecules/modals/HelloModal';

import { useModal } from './hooks/UseModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  // justify-content: space-between; // Not Needed unless Using Footer
  min-width: 100%;
  min-height: 100%;
`;

const App: React.FC = () => {
  const [triggerModal, Modal] = useModal();
  const dispatch = useAppDispatch();

  const siteInformation = useSelector(siteInformationSelector);

  return (
    <Container>
      <GlobalHeader />
      <Modal contents={HelloModal} requireResponse />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <GlobalFooter /> */}
    </Container>
  );
};

export default App;
