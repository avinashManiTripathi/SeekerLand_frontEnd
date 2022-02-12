import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Home from './PublicPages/Home/Home';
import Footer from './Layout/Footer/Footer';
import Jobs from './PublicPages/Jobs/Jobs';
import JobsDetails from './PublicPages/Jobs/JobsDetails';
import Recruiter from './PublicPages/Recruiter/Recruiter';
import SignIn from './Authentication/SignIn';
import Header2 from './Layout/Header/Header2';
import SignUp from './Authentication/SignUp';
import DashBoard from './Seeker/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SeekerDetailsAction } from './Actions/Registration.action';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, seeker } = useSelector(
    (state) => state.seekerDetailReducers
  );

  useEffect(() => {
    dispatch(SeekerDetailsAction());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header2 isAuthenticated={isAuthenticated} seeker={seeker}></Header2>
      <Route exact path='/' component={Home}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route path='/:skills-jobs-in-:city' component={withRouter(Jobs)}></Route>
      <Route path='/jobs-in-:city' component={withRouter(Jobs)}></Route>
      <Route path='/:skills-jobs' component={withRouter(Jobs)}></Route>
      <Route path='/job/:title&:id' component={JobsDetails}></Route>
      <Route path='/recruiters' component={Recruiter}></Route>
      <Route path='/dashboard' component={DashBoard}></Route>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
