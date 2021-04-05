import React, { useState } from 'react';
import Row from './Row';

export default function Table() {
	const DATA = [
		{
			firstName: 'Pulkit',
			lastName: 'Gupta',
			city: 'Bulandshahr',
			country: 'India',
		},
		{
			firstName: 'Pulkit',
			lastName: 'Gupta',
			city: 'Bulandshahr',
			country: 'India',
		},
		{
			firstName: 'Pulkit',
			lastName: 'Gupta',
			city: 'Bulandshahr',
			country: 'India',
		},
		{
			firstName: 'Pulkit',
			lastName: 'Gupta',
			city: 'Bulandshahr',
			country: 'India',
		},
		{
			firstName: 'Pulkit',
			lastName: 'Gupta',
			city: 'Bulandshahr',
			country: 'India',
		},
	];
	const [data, setdata] = useState(DATA);

	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		city: '',
		country: '',
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setInput((prev) => ({ ...prev, [name]: value }));
	};

	const handleClick = (event) => {
		const textContent = event.target.textContent;
		if (textContent === 'Add row to bottom') {
			setdata((prev) => [...prev, { ...input }]);
		} else {
			setdata((prev) => [{ ...input }, ...prev]);
		}
		// console.log(input);
		// console.log(data);
		setInput({ firstName: '', lastName: '', city: '', country: '' });
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>S.No</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>City</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{data.map((element, index) => (
						<Row key={index} element={element} index={index} />
					))}
					{/* {console.log(data)} */}
				</tbody>
				<tfoot>
					<tr>
						<td>
							<input id='S.No' disabled />
						</td>

						<td>
							<input
								type='text'
								name='firstName'
								id='firstName'
								value={input.firstName}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type='text'
								name='lastName'
								id='lastName'
								value={input.lastName}
								onChange={handleChange}
							/>
						</td>

						<td>
							<input
								type='text'
								name='city'
								id='city'
								value={input.city}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type='text'
								name='country'
								id='country'
								value={input.country}
								onChange={handleChange}
							/>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<button onClick={handleClick}>
								Add row to bottom
							</button>
						</td>
						<td>
							<button onClick={handleClick}>
								Add row to top
							</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
