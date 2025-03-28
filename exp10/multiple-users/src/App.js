let users = [];

function addUser() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let bio = document.getElementById('bio').value.trim();
    
    if (name === "" || email === "") {
        alert("Name and Email are required!");
        return;
    }
    
    let user = { name, email, bio };
    users.push(user);
    renderUsers();
    
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('bio').value = "";
}

function renderUsers() {
    let userList = document.getElementById('user-list');
    userList.innerHTML = "";
    
    users.forEach((user, index) => {
        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <strong>${user.name}</strong> <br>
            ${user.email} <br>
            <em>${user.bio}</em> <br>
            <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
        `;
        userList.appendChild(userCard);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}