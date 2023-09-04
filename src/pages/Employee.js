import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";



function Employee() {
	const navigate = useNavigate();
	const [employees, setEmployee] = useState([]);
	const URL = "https://dummy.restapiexample.com/api/v1/employees";
	const [employeeId, setEmployeeId] = useState([]);

	useEffect(() => {
    fetchEmployeeData()
  }, [])

  const fetchEmployeeData =  () => {
     fetch(URL)
      .then(response => {
				console.log('response', response)
        return response.json()
      })
      .then(data => {
				console.log(data)
        setEmployee(data.data)
      })
			.catch((err) =>
			{
				console.log(err.message)
			}
			)
  };

const employeeInf =  (id) => {
	console.log(id)
	navigate(`/employeeInf${id}`)
};
  
  return(
<div> 
      <div className="inner-wrapper">
        <NavBar/>
          <section role="main" className="content-body">
					<div class="row">
							<div class="col-md-12">
								<section class="panel">
									<header class="panel-heading">
										<div class="panel-actions">
											<a class="fa fa-caret-down"></a>
										</div>
										<h2 class="panel-title">List Employee</h2>
									</header>
									<div class="panel-body">
										<div class="table-responsive">
											<table class="table table-hover mb-none">
												<thead>
													<tr>
														<th>ID</th>
														<th>Name</th>
														<th>Salary</th>
														<th>Age</th>
														<th>Image</th>
														
													</tr>
												</thead>
												<tbody>
												{employees.map((item, i) => (
													<tr key={i} onClick={() => employeeInf(item.id)}>
														<td>{item.id}</td>
														<td>{item.employee_name}</td>
														<td>{item.employee_salary}</td>
														<td>{item.employee_age}</td>
														<td>{item.profile_image}</td>
														<td class="actions">
															<a href="/edit"><i class="fa fa-pencil"></i></a>
															<a href="/remove" class="delete-row"><i class="fa fa-trash-o"></i></a>
														</td>
													</tr>
												))}	
												</tbody>
											</table>
										</div>
									</div>
								</section>
							</div>
						</div>
    
          </section>
        </div>
    </div>
);
  
}

export default Employee;