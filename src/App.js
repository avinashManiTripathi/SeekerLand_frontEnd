import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Layout/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./PublicPages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import Jobs from "./PublicPages/Jobs/Jobs";
import JobsDetails from "./PublicPages/Jobs/JobsDetails";
import Recruiter from "./PublicPages/Recruiter/Recruiter";
import SignIn from "./Authentication/SignIn";
import MyAccount from "./Seeker/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route path="/jobs" component={Jobs}></Route>
      <Route path="/job-details" component={JobsDetails}></Route>
      <Route path="/recruiters" component={Recruiter}></Route>
      <Route path="/my-account" component={MyAccount}></Route>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
