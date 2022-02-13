import React, { useEffect } from 'react';
import CardSlider from '../../Component/CardSlider';
import SideBar, { TopSideBarJobs } from '../../Layout/SideBar/SideBar';
import { JobsbyCategory, JobsInTopLocations } from '../../SiideBarJSON';
import { jobsData } from '../../jobsJSON';
import './jobs.css';
import { useDispatch, useSelector } from 'react-redux';
import { FindJobByIdAction } from '../../Actions/Jobs.action';
import { seo } from '../../Helper/SEOHelper';

const JobsDetails = (props) => {
  const {  jobDetails } = useSelector(
    (state) => state.findJobByIdReducers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    seo({
      title: props.match.params.title,
      metaDescription: 'With some meta description',
    });
    dispatch(FindJobByIdAction(props.match.params.id));
  }, [props.match.params.id , props.match.params.title]);

  return (
    <div className='container'>
      <div className='row '>
        {jobDetails && (
          <div className='col-md-9 mt-5'>
            <div className='bg-white shadow job-card-wrapper '>
              <div className='job-card-inner'>
                <h2>{jobDetails.title}</h2>
                <h3>Speckyfox Technologies Pvt Ltd</h3>
                <div className='job-card-svl'>
                  <span>{jobDetails.maxSalary}</span>
                  <span>{jobDetails.vacancy}</span>
                  <span>{jobDetails.city}</span>
                </div>
                <p>
                  Skills :{' '}
                  {jobDetails.skills &&
                    jobDetails.skills.map((skills) => {
                      return <span key={skills._id}> {skills.name} ,</span>;
                    })}
                </p>
                <p>{jobDetails.description}</p>
                <hr />
                <div className='row'>
                  <div className='col-md-6'>
                    <p className=' d-flex justify-content-start'>
                      Post On 2 Days Ago
                    </p>
                  </div>
                  <div className='col-md-6 d-flex justify-content-end'>
                    <button className='btn btn-danger btn-apply d-flex justify-content-end'>
                      Apply Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white shadow  job-card'>
              <div className='job-card-inner'>
                <h2>Description</h2>
                <p>{jobDetails.description}</p>
              </div>
            </div>
            <div className='bg-white shadow  mt-3  job-card'>
              <div className='job-card-inner'>
                <h2>About Company</h2>
                <p>
                  A pioneer in Indias IT staffing business, Future Focus
                  Infotech Pvt. Ltd. (FFI) offers Strategic IT consulting and
                  Managed Solutions to Technology companies. Incorporated in
                  1997, FFI has transformed over the years to become a leader in
                  Consulting for myriad technologies ranging from application
                  development using Open Source, Microsoft, Java and Mainframe
                  technologies to state of the art SMAC technologies. A Software
                  Development Center (SDC) established in 1999 caters to the
                  growing needs of our International clients offering
                  Application Support services and managed solutions in Quality
                  Assurance(QA), Business Intelligence (BI) and Analytics.
                  Primarily to cater3 to our Indian clients in their overseas
                  projects, we have spread our wings to establish offices in the
                  USA (Focus America Inc) in 2000 and in UAE (Future Focus
                  Infotech FZE) in 2011. Our subsidiaries, with clear
                  understanding of the local milieu, have now the capability to
                  service the local clients effectively. FFI today operates
                  across 8 major cities in India apart from the overseas
                  operations. The scale of our capabilities, offerings and
                  customer engagements in the IT & ITES domain differentiates us
                  from other companies in the consulting and recruitment
                  vertical. FFI, ISO 9001 certified since 2005, with its focus
                  on quality delivery, has not only been successful in retaining
                  its major clients but also in securing additional business in
                  new geographies. FFI maintains excellent relationship with its
                  consultants too resulting in consistent repeat business over
                  the years.
                </p>

                <div
                  className='job-details-type'
                  style={{
                    margin: '20px 0px',
                  }}>
                  <p>
                    <span> Role : </span> Full Time
                  </p>
                  <p>
                    <span> RoleFull : </span>Stack Developer
                  </p>
                  <p>
                    <span> Industry Type : </span>IT Services & Consulting{' '}
                  </p>
                  <p>
                    <span> Functional Area : </span>Engineering - Software{' '}
                  </p>
                  <p>
                    <span> Employment Type :</span>
                    Full Time, Permanent Role CategorySoftware Development
                    Education{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow  mt-3  job-card'>
              <div className='job-card-inner'>
                <div className='row'>
                  <div className='col-md-3'>
                    <img
                      src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg'
                      alt=''
                      className='img-circle img-responsive'
                      style={{
                        width: '200px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  <div className='col-md-9'>
                    <h2>Avinash Mani Tripathi</h2>
                    <p>
                      <strong>About: </strong> Web Designer / UI.{' '}
                    </p>
                    <p>
                      <strong>Hobbies: </strong> Read, out with friends, listen
                      to music, draw and learn new things.{' '}
                    </p>
                    <p>
                      <strong className=''>Hiring </strong>
                      <span>Hiring Java Developer and Laravel Developer</span>
                    </p>
                    <p>
                      Ratings
                      <span className='fa fa-star'></span>
                      <span className='fa fa-star'></span>
                      <span className='fa fa-star'></span>
                      <span className='fa fa-star'></span>
                      <span className='fa fa-star-o'></span>
                    </p>

                    <div className='d-flex mt-2'>
                      <div className='col-xs-12 col-sm-4 '>
                        <h2>
                          <strong> 20,7K </strong>
                        </h2>
                        <p>
                          <small>Followers</small>
                        </p>
                        <button className='btn btn-success btn-block'>
                          <span className='fa fa-plus-circle'></span> Follow{' '}
                        </button>
                      </div>

                      <div className='col-xs-12 col-sm-4 '>
                        <h2>
                          <strong> 20,7K </strong>
                        </h2>
                        <p>
                          <small>Message</small>
                        </p>
                        <button className='btn btn-primary btn-block'>
                          Message{' '}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='mb-5 mt-5  bg-white white-shadow  '
              style={{
                padding: '20px 10px',
              }}>
              <h2 className='card-title'>Recent Jobs</h2>
              <CardSlider data={jobsData} />
            </div>
          </div>
        )}

        <div className='col-md-3 mt-5'>
          <SideBar data={JobsbyCategory} />
          <SideBar data={JobsInTopLocations} />
          <TopSideBarJobs />
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
