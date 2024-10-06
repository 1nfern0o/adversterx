export class UserFilter {
	constructor(users) {
		this.users = users;
	}

	filterUser(value) {
		return this.users.filter(user =>
			user.name.toLowerCase().includes(value.toLowerCase()) ||
			user.username.toLowerCase().includes(value.toLowerCase()) ||
			user.email.toLowerCase().includes(value.toLowerCase()) ||
			user.phone.toLowerCase().includes(value.toLowerCase()) ||
			user.website.toLowerCase().includes(value.toLowerCase()) ||
			user.address.street.toLowerCase().includes(value.toLowerCase()) ||
			user.address.suite.toLowerCase().includes(value.toLowerCase()) ||
			user.address.city.toLowerCase().includes(value.toLowerCase()) ||
			user.address.zipcode.toLowerCase().includes(value.toLowerCase()) ||
			user.address.geo.lat.toLowerCase().includes(value.toLowerCase()) ||
			user.address.geo.lng.toLowerCase().includes(value.toLowerCase()) ||
			user.company.name.toLowerCase().includes(value.toLowerCase()) ||
			user.company.catchPhrase.toLowerCase().includes(value.toLowerCase()) ||
			user.company.bs.toLowerCase().includes(value.toLowerCase())
		);
	}
}
