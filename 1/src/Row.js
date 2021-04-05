import React from 'react';

export default function Row({ element, index }) {
	return (
		<>
			<tr>
				<td>{index + 1}</td>
				<td>{element.firstName ? element.firstName : '????'}</td>
				<td>{element.lastName ? element.lastName : '????'}</td>
				<td>{element.city ? element.city : '????'}</td>
				<td>{element.country ? element.country : '????'}</td>
			</tr>
		</>
	);
}
