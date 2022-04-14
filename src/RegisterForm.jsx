import { useState, useEffect } from 'react';
import axios from 'axios';
import Employee from './Employee';

const RegisterForm = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const [dep, setDep] = useState(null);
	const [salary, setSalary] = useState('');
	const [martialStatus, setMaritalStatus] = useState(false);

	const [employee, setEmployee] = useState({});

	const handleSubmit = e => {
		e.preventDefault();
		const employee = {
			name,
			age,
			address,
			department: dep,
			salary,
			martialStatus,
		};
		submitUser(employee);
	};

	const submitUser = async user => {
		const { data } = await axios.post('http://localhost:8080/employees', user);
		setEmployee(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Your name: </label>
				<input
					type='text'
					id='name'
					placeholder='enter name'
					value={name || ''}
					onChange={e => setName(e.target.value)}
				/>
				<label htmlFor='age'>Your age: </label>
				<input
					type='Number'
					id='age'
					placeholder='enter age'
					value={age}
					onChange={e => setAge(e.target.value)}
				/>
				<label htmlFor='address'>Your address: </label>
				<textarea
					rows={4}
					cols={20}
					id='address'
					value={address}
					onChange={e => setAddress(e.target.value)}
				/>
				<label htmlFor='role'>Your role</label>
				<select id='role' onChange={e => setDep(e.target.value)}>
					<option value='none'>select department</option>
					<option value='developer'>Developer</option>
					<option value='product manager'>Product Manager</option>
				</select>
				<label htmlFor='salary'>Salary</label>
				<input
					type='Number'
					id='salary'
					placeholder='your salary'
					value={salary}
					onChange={e => setSalary(e.target.value)}
				/>
				<div className='check'>
					<label htmlFor='marital_status'>Is married</label>
					<input
						className='box'
						type='checkbox'
						onChange={e => setMaritalStatus(e.target.checked)}
					/>
				</div>
				<button>save employee details</button>
			</form>
			{Object.keys(employee).length > 0 ? (
				<Employee details={employee} />
			) : null}
		</div>
	);
};

export default RegisterForm;
