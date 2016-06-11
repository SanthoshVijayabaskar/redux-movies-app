import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tickets = [
  {
    id: "01",
    email: "santhosh@gmail.com",
    ticketQty: 2,
  },
  {
    id: "02",
    email: "harry@gmail.com",
    ticketQty: 1,
  },
  {
    id: "03",
    email: "krishna@gmail.com",
    ticketQty: 10,
  },
  {
    id: "04",
    email: "dan@gmail.com",
    ticketQty: 3,
  },
  {
    id: "05",
    email: "vijay@gmail.com",
    ticketQty: 4,
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (ticket) => {
  return replaceAll(ticket.email, ' ', '-');
};

class BookingApi {
  static getAllBooking() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tickets));
      }, delay);
    });
  }

  static saveTicket(ticket) {
    ticket = Object.assign({}, ticket); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTicketQty = 1;
        if (ticket.ticketQty < minTicketQty) {
          reject(`Minimum Ticket Quantity is ${minTicketQty}`);
        }

        if (ticket.id) {
          const existingTicketsIndex = tickets.findIndex(a => a.id == tickets.id);
          tickets.splice(existingTicketsIndex, 1, ticket);
        } else {
          //Just simulating creation here.
          //The server would generate ids new tickets in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          ticket.id = generateId(ticket);
          tickets.push(ticket);
        }

        resolve(ticket);
      }, delay);
    });
  }

  static deleteTicket(ticketId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTicketToDelete = tickets.findIndex(ticket => {
          ticket.ticketId == ticketId;
        });
        tickets.splice(indexOfTicketToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookingApi;
