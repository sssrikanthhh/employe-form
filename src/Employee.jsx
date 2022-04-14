const Employee = ({ details }) => {
	return (
		<div className='employee'>
			<h2>Employee Details</h2>
			<table>
				<thead>
					<tr>
						<th>S.No</th>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Name</td>
						<td>{details.name}</td>
					</tr>
					<tr>
						<td>Age</td>
						<td>{details.age}</td>
					</tr>
					<tr>
						<td>Address</td>
						<td>{details.address}</td>
					</tr>
					<tr>
						<td>Department</td>
						<td>{details.department}</td>
					</tr>
					<tr>
						<td>Salary</td>
						<td>{details.salary}</td>
					</tr>
					<tr>
						<td>Marital Status</td>
						<td>{details.maritalStatus ? 'Yes' : 'No'}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Employee;
