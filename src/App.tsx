import Advantages from "./components/advantages/Advantages";
import Comments from "./components/comments/Comments";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Joy from "./components/joy/Joy";
import Wallets from "./components/wallets/Wallets";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Advantages />
      <Wallets />
      <Comments />
      <Joy />
      <Footer />
    </>
  );
};

export default App;
