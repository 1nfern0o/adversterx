export class UserCard {
	constructor(user) {
		this.user = user;
	}

	createCard() {
		const card = document.createElement('div');
		const { name, username, email, address, phone, company } = this.user;
		card.classList.add('user-card');

		card.innerHTML = `
      <h2>${name}</h2>
      <p>Username: ${username}</p>
      <p>Email: ${email}</p>
      <p>Address:</p>
      <ul>
      	<li>Street: ${address.street}</li>
      	<li>Suite: ${address.suite}</li>
      	<li>City: ${address.city}</li>
      	<li>Zipcode: ${address.zipcode}</li>
      </ul>
      <p>Address Geo:</p>
	  <ul>
		  <li>Lat: ${address.geo.lat}</li>
		  <li>Lng: ${address.geo.lng}</li>
	  </ul>
      <p>Phone: ${phone}</p>
      <p>Company:</p>
      <ul>
      	<li>Name: ${company.name}</li>
      	<li>Bs: ${company.bs}</li>
      	<li>Catch Phrase: ${company.catchPhrase}</li>
	  </ul>
    `;

		return card;
	}
}
