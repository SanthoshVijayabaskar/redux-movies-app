import React from 'react';
import {Link} from 'react-router';

const BookingListRow = ({ticket}) => {
	return(
		<tr>
			<td><Link to={'/booking/'+ticket.id}>{ticket.email}</Link></td>
			<td>{ticket.id}</td>
		</tr>
		);
};

export default BookingListRow;