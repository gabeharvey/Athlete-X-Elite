// MainLayout.jsx
import Home from './Home';
import Warning from './Warning';
import About from './About';
// import Celeb from './Celeb';
import Showcase from './Showcase';
import Subscription from './Subscription';
import Progression from './Progression';
import Packages from './Packages';

const MainLayout = () => {
  return (
    <>
      <Home />
      <Warning />
      <About />
      {/* <Celeb /> */}
      <Showcase />
      <Subscription />
      <Progression />
      <Packages />
    </>
  );
};

export default MainLayout;
