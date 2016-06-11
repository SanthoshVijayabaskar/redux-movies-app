import React from 'react';
import BookingListRow from './BookingListRow';

const BookingList = ({tickets}) => {

	return(
		<table className="table">
			<thead>
				<tr>
					<th>Users</th>
					<th>No. of Tickets</th>
				</tr>
			</thead>
			<tbody>
			{tickets.map(ticket =>
				<BookingListRow key={ticket.id} ticket={ticket}/>
				)}
			</tbody>
		</table>
		);

};

export default BookingList;