import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Layout/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './PublicPages/Home/Home';
import Footer from './Layout/Footer/Footer';
import Jobs from './PublicPages/Jobs/Jobs';
import JobsDetails from './PublicPages/Jobs/JobsDetails';
import Recruiter from './PublicPages/Recruiter/Recruiter';
import SignIn from './Authentication/SignIn';
import MyAccount from './Seeker/MyAccount';
import SavedJobs from './Seeker/SavedJobs';
import AppliedJobs from './Seeker/AppliedJobs';
import Header2 from './Layout/Header/Header2';
import SignUp from './Authentication/SignUp';

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Header2></Header2>
      <Route exact path='/' component={Home}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route path='/jobs' component={Jobs}></Route>
      <Route path='/job-details' component={JobsDetails}></Route>
      <Route path='/recruiters' component={Recruiter}></Route>
      <Route path='/my-account' component={MyAccount}></Route>
      <Route path='/applied_jobs' component={AppliedJobs}></Route>
      <Route path='/saved_jobs' component={SavedJobs}></Route>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
