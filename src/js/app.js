import { UserCard } from './userCard';
import { UserFilter } from './userFilter';
import '../style.css';

async function fetchUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		if (!response.ok) {
			const errorComponent = document.getElementById('error-message')
			errorComponent.innerHTML = "Error get user list"
			errorComponent.classList.remove('d-none')
			throw new Error('Error get user list');
		}
		return await response.json();
	} catch (error) {
		console.error('Error:', error);
		return [];
	}
}

async function initializeApp() {
	const loader = document.getElementById('loader');
	const userList = document.getElementById('user-list');
	loader.style.display = 'block';
	userList.style.display = 'none';

	const users = await fetchUsers();

	loader.style.display = 'none';
	userList.style.display = 'grid';

	const userFilter = new UserFilter(users);

	function renderCards(filteredUsers) {
		const container = document.getElementById('user-list');
		container.innerHTML = '';

		filteredUsers.forEach(user => {
			const userCard = new UserCard(user);
			container.appendChild(userCard.createCard());
		});
	}

	document.getElementById('filter-user').addEventListener('input', (event) => {
		const filtered = userFilter.filterUser(event.target.value);
		renderCards(filtered);
	});

	renderCards(users);
}

initializeApp();
