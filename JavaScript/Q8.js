function submitForm(event) {
    event.preventDefault(); // Prevents default form submission

    // Get input values from the form
    let name = document.getElementById('name').value;
    let rollNo = document.getElementById('rollNo').value;

    // Alert the user with the form values
    alert("Your form has been submitted.\nName: " + name + "\nRoll No: " + rollNo);
}
