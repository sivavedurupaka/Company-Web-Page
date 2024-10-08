document.getElementById('employee-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const employeeId = document.getElementById('employee-id').value;
    const profilePictureUrl = document.getElementById('profile-picture-url').value;

    // Add to Employee List
    const employeeListItem = document.createElement('li');
    employeeListItem.innerHTML = `<a href="#">${fullName} (${email})</a>`;
    document.getElementById('employee-list-ol').appendChild(employeeListItem);

    // Add to Employee Details Table
    const employeeDetailsRow = document.createElement('tr');
    employeeDetailsRow.innerHTML = `
        <td>${fullName}</td>
        <td>${employeeId}</td>
        <td>${department}</td>
        <td><img src="${profilePictureUrl}" alt="${fullName}'s profile picture" width="50"></td>
    `;
    document.getElementById('employee-details-tbody').appendChild(employeeDetailsRow);

    // Clear Form Fields
    document.getElementById('employee-form').reset();
});
