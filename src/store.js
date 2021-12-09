import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  EducationDetailDeleteReducers,
  EducationDetailFindByIdReducers,
  EducationDetailFindBySeekerIdReducers,
  EducationDetailUpdateReducers,
  EducationDetailUploadReducers,
} from './Reducers/EducationDetail.reducer';
import {
  ITSKillsDeleteReducers,
  ITSKillsFindByIdReducers,
  ITSKillsFindBySeekerIdIdReducers,
  ITSKillsUpdateReducers,
  ITSKillsUploadReducers,
} from './Reducers/ITSkills.reducer';
import {
  JobPrefrenceDeleteReducers,
  JobPrefrenceFindByIdReducers,
  JobPrefrenceUpdateReducers,
  JobPrefrenceUploadReducers,
} from './Reducers/JobPreference.reducer';
import {
  KeySkillsDeleteReducer,
  KeySkillsFindByIdIdReducers,
  KeySkillsFindBySeekerIdIdReducers,
  KeySkillsUpdateReducer,
  KeySkillsUploadReducer,
} from './Reducers/KeySkills.reducer';
import {
  PersonalDetailsDeleteReducer,
  PersonalDetailsFindByIdReducer,
  PersonalDetailsFindBySeekerIdReducer,
  PersonalDetailsUpdateReducer,
  PersonalDetailsUploadReducer,
} from './Reducers/PersonalDetails.reducer';
import {
  ProjectDeleteReducers,
  ProjectFindByIdReducers,
  ProjectFindBySeekerIdReducers,
  ProjectUpdateReducers,
  ProjectUploadReducers,
} from './Reducers/Project.reducer';
import { RegistrationReducers } from './Reducers/Registration.reducer';
import {
  WorkExperienceDeleteReducers,
  WorkExperienceFindByIdReducers,
  WorkExperienceFindBySeekerIdReducers,
  WorkExperienceUpdateReducers,
  WorkExperienceUploadReducers,
} from './Reducers/WorkExperience.reducer';
const initialState = {};

const reducer = combineReducers({
  registrationReducer: RegistrationReducers,
  projectUploadReducers: ProjectUploadReducers,
  projectUpdateReducers: ProjectUpdateReducers,
  projectDeleteReducers: ProjectDeleteReducers,
  projectFindByIdReducers: ProjectFindByIdReducers,
  projectFindBySeekerIdReducers: ProjectFindBySeekerIdReducers,
  educationDetailFindByIdReducers: EducationDetailFindByIdReducers,
  educationDetailFindBySeekerIdReducers: EducationDetailFindBySeekerIdReducers,
  educationDetailDeleteReducers: EducationDetailDeleteReducers,
  educationDetailUpdateReducers: EducationDetailUpdateReducers,
  educationDetailUploadReducers: EducationDetailUploadReducers,
  workExperienceUploadReducers: WorkExperienceUploadReducers,
  workExperienceFindByIdReducers: WorkExperienceFindByIdReducers,
  workExperienceFindBySeekerIdReducers: WorkExperienceFindBySeekerIdReducers,
  workExperienceDeleteReducers: WorkExperienceDeleteReducers,
  workExperienceUpdateReducers: WorkExperienceUpdateReducers,
  iTSKillsUploadReducers: ITSKillsUploadReducers,
  iTSKillsUpdateReducers: ITSKillsUpdateReducers,
  iTSKillsUpdateReducers: ITSKillsDeleteReducers,
  iTSKillsUpdateReducers: ITSKillsFindBySeekerIdIdReducers,
  iTSKillsFindByIdReducers: ITSKillsFindByIdReducers,
  jobPrefrenceUploadReducers: JobPrefrenceUploadReducers,
  jobPrefrenceUpdateReducers: JobPrefrenceUpdateReducers,
  jobPrefrenceDeleteReducers: JobPrefrenceDeleteReducers,
  jobPrefrenceFindByIdReducers: JobPrefrenceFindByIdReducers,
  keySkillsUploadReducer: KeySkillsUploadReducer,
  keySkillsUpdateReducer: KeySkillsUpdateReducer,
  keySkillsFindByIdIdReducers: KeySkillsFindByIdIdReducers,
  keySkillsDeleteReducer: KeySkillsDeleteReducer,
  keySkillsFindBySeekerIdIdReducers: KeySkillsFindBySeekerIdIdReducers,
  personalDetailsUploadReducer: PersonalDetailsUploadReducer,
  personalDetailsUpdateReducer: PersonalDetailsUpdateReducer,
  personalDetailsFindByIdReducer: PersonalDetailsFindByIdReducer,
  personalDetailsFindBySeekerIdReducer: PersonalDetailsFindBySeekerIdReducer,
  personalDetailsDeleteReducer: PersonalDetailsDeleteReducer,
});
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
