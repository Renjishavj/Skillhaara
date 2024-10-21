import React from 'react'
import { Link ,Route,Routes} from 'react-router-dom'
import DemandCourse from './DemandCourse'
import DemandList from './DemandList'
import SingleIndemand from './SingleIndemand'
import EditDemand from './EditDemand'

function AddIndemand() {
  return (
    <div>
        <div className='new-course'>
        <Link to="demandcourse">
        <button className='btn-add'>Add Indemand</button>
        </Link>
        </div>
        <div className='course-listing'>
            <Routes>
            <Route index element={<DemandList/>} />
                <Route path="/demandcourse" element={<DemandCourse/>}></Route>
                <Route path="/Singleindemand/:demandId" element={<SingleIndemand/>}></Route>
                <Route path="/edit-indemand/:demandId" element={<EditDemand/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default AddIndemand
