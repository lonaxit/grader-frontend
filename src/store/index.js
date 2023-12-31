import { createStore } from 'vuex'
import { auth } from './modules/auth'
import { term } from './modules/term'
import { session } from './modules/session'
import { classroom } from './modules/classroom'
import { subject } from './modules/subject'
import { attendancesetting } from './modules/attendancesetting'
import { resumptionsetting } from './modules/resumptionsetting'
import { user } from './modules/user'
import { profile } from './modules/profile'
import { subjectteacher } from './modules/subjectteacher'
import { classteacher } from './modules/classteacher'
import { scores} from './modules/scores'
import { enrollment } from './modules/enrollment'
import { result } from './modules/result'
import { skills } from './modules/skills'
import { traits } from './modules/traits'
import { comments } from './modules/comments'



export default createStore({
  modules: {
    auth,
    term,
    session,
    classroom,
    subject,
    attendancesetting,
    resumptionsetting,
    user,
    profile,
    subjectteacher,
    classteacher,
    scores,
    enrollment,
    result,
    skills,
    traits,
    comments
    

  }
})
