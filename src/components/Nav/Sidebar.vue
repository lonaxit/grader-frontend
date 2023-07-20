<template>
    <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h6>SKY GIFTED ACADEMY</h6>
                </a>
                <!-- <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div> -->

                <div class="navbar-nav w-100">

                    <a href="" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>

                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-users me-2"></i>Accounts</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/change-password/' class="dropdown-item">Change Password</router-link>
                          
                        </div>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-users me-2"></i>Students</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-user/' class="dropdown-item">New</router-link>
                            <router-link to='/all-students/' class="dropdown-item">All</router-link>
                           
                        </div>
                    </div>


                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-users me-2"></i>Staff</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-staff/' class="dropdown-item">New</router-link>
                            <router-link to='/all-staff/' class="dropdown-item">All</router-link>
                            <router-link to='/all/class-teacher/' class="dropdown-item">Form Master</router-link>
                            <router-link to='/all/subject-teacher/' class="dropdown-item">Subject Master</router-link>
                        </div>
                    </div>

                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Term</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/addterm' class="dropdown-item">New</router-link>
                            <router-link to='/terms' class="dropdown-item">All</router-link>
                        </div>
                    </div>

                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Session</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/add-session' class="dropdown-item">New</router-link>
                            <router-link to='/all-session' class="dropdown-item">All</router-link>
                        </div>
                    </div>



                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Class</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-class' class="dropdown-item">New</router-link>
                            <router-link to='/all-classes' class="dropdown-item">All</router-link>
                        </div>
                    </div>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Subject</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-suBject' class="dropdown-item">New</router-link>
                            <router-link to='/all-subjects' class="dropdown-item">All</router-link>
                            <router-link to='/subject/class' class="dropdown-item">Class Subjects</router-link>
                            <router-link to='/list-class-subjects/' class="dropdown-item">List Class Subjects</router-link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Attendance</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-attendance-setting/' class="dropdown-item">New</router-link>
                            <router-link to='/all-attendance-setting/' class="dropdown-item">All</router-link>
                        </div>
                    </div>

                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Resumption</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-resumption-setting/' class="dropdown-item">New</router-link>
                            <router-link to='/all-resumption-setting/' class="dropdown-item">All</router-link>
                        </div>
                    </div>

                      <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cog me-2"></i>Skills</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/add-psycho/' class="dropdown-item">Add Psycho</router-link>
                            <router-link to='/all-psycho/' class="dropdown-item">All Psycho</router-link>
                            <router-link to='/add-affective/' class="dropdown-item">Add Affective</router-link>

                             <router-link to='/all-affective/' class="dropdown-item">All Affective</router-link>

                        </div>
                    </div>

                     <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Enrollment</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to='/new-enrollment/' class="dropdown-item">New</router-link>
                            <router-link to='/find-enrollment/' class="dropdown-item">Roll Call</router-link>
                           
                        </div>
                    </div>


                      <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-th me-2"></i>Grading</a>
                        <div class="dropdown-menu bg-transparent border-0">
                          
                            <!-- <router-link to='/export-sheet/' class="dropdown-item">Export Sheet</router-link> -->

                             <router-link to='/import-ca-sheet/' class="dropdown-item">Upload CA Sheet</router-link>

                             <router-link to='/export-ca-sheet/' class="dropdown-item">Download CA Sheet</router-link>

                            

                            <router-link to='/filter-score/' class="dropdown-item">FilterScores</router-link>
                            <router-link to='/create-result/' class="dropdown-item">Process Result</router-link>
                            <router-link to='/filter-result/' class="dropdown-item">View Result</router-link>
                           
                        </div>
                    </div>


                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-users me-2"></i>Traiting</a>
                        <div class="dropdown-menu bg-transparent border-0">
                          
                            <router-link to='/affective-traits/' class="dropdown-item">Affective Traits</router-link>
                            <router-link to='/psycho-traits/' class="dropdown-item">Psycho Traits</router-link>
                              <router-link to='/add-comments/' class="dropdown-item">Auto Comments</router-link>
                        </div>
                    </div>

                


                 
                 
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->
</template>

<script>

export default {
  name: 'Sidebar'
}
</script>