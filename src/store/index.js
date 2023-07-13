import { createStore } from 'vuex'
import { auth } from './modules/auth'
import { term } from './modules/term'
import { session } from './modules/session'
import { classroom } from './modules/classroom'
import { subject } from './modules/subject'
import { attendancesetting } from './modules/attendancesetting'
import { resumptionsetting } from './modules/resumptionsetting'
import { user } from './modules/user'
import { profile} from './modules/profile'

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
    profile

  }
})
