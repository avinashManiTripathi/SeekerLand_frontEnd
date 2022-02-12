import React from 'react';

import {
  MyAccountExperienceCard,
  MyAccountProfileSummaryCard,
  MyAccountSkillCard,
  MyAccountUploadResmeCard,
} from './AccountPages/index';

import MyAccountEducation from './AccountPages/EducationDetails';
import ITSkills from './AccountPages/ITSkills';
import JobPreferences from './AccountPages/JobPreferences';
import PersonalDetails from './AccountPages/PersonalDetails';
import Project from './AccountPages/Project';

const UserProfile = (props) => {
  return (
    <div className='tab-content w-100 pt-md-0'>
      <div
        className='tab-pane show active'
        id='user'
        role='tabpanel'
        aria-labelledby='user-tab'>
        <div className='rounded-bottom '>
          <div className='row pl-lg-5 pt-md-0 pt-sm-2'>
            <div className='mt-2'>
              <MyAccountUploadResmeCard />
            </div>
            <div className='mt-2'>
              <MyAccountProfileSummaryCard />
            </div>
            <div className='mt-2'>
              <MyAccountSkillCard />
            </div>
            <div className='mt-2'>
              <MyAccountEducation />
            </div>
            <div className='mt-2'>
              <MyAccountExperienceCard />
            </div>
            <div className='mt-2'>
              <Project />
            </div>
            <div className='mt-2'>
              <JobPreferences />
            </div>
            <div className='mt-2'>
              <PersonalDetails />
            </div>
            <div className='mt-2'>
              <ITSkills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
