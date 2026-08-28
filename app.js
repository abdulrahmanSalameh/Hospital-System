function Patient(username, passWord, dateOfBirth, gender, phone, disease, email, img) {

    this.username = username;
    this.passWord = passWord;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phone = phone;
    this.disease = disease;
    this.img = img;
    this.email = email;
}

let patients = [];

if (localStorage.getItem("patients")) {
    patients = JSON.parse(localStorage.getItem("patients"));
}


let form = document.getElementById("patientForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let phone = document.getElementById("phone").value;
    let disease = document.getElementById("disease").value;
    let image = document.getElementById("image").value;
    let email = document.getElementById("email").value;


    let gender;

    if (document.getElementById('male').checked) {
        gender = 'Male';
    }
    else {
        gender = 'Female';
    }


    if (username.includes(" ")) {
        alert("Username must not contain spaces");
        return;
    }


    if (passWord.length <= 8) {
        alert("Password must be more than 8 characters");
        return;
    }


    if (!/[0-9]/.test(passWord)) {
        alert("Password must contain at least one number");
        return;
    }


    if (!/[A-Z]/.test(passWord)) {
        alert("Password must contain at least one uppercase letter");
        return;
    }


    if (!/[!@#$%^&*]/.test(passWord)) {
        alert("Password must have a special Characters");
        return;
    }


    if (!/^07[0-9]{8}$/.test(phone)) {
        alert("Phone number must be 10 digits and start with 07");
        return;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    for (let i = 0; i < patients.length; i++) {

    if (patients[i].username === username) {
        alert("User already exists");
        return;
    }
}


    let newPatient = new Patient(
        username,
        passWord,
        dateOfBirth,
        gender,
        phone,
        disease,
        email,
        image
    );

    patients.push(newPatient);

    localStorage.setItem("patients", JSON.stringify(patients));

    render();
});


function render() {

    let container = document.getElementById("patientsContainer");
    container.innerHTML = "";

    for (let i = 0; i < patients.length; i++) {

        let patient = patients[i];

        let card = document.createElement("div");
        card.className = "patient-card";


        let img = document.createElement("img");
        img.src = patient.img;
        card.appendChild(img);


        let name = document.createElement("h3");
        name.textContent = patient.username;
        card.appendChild(name);


        let password = document.createElement("p");
        password.textContent = "password: " + patient.passWord;
        card.appendChild(password);


        let birth = document.createElement("p");
        birth.textContent = "Date Of Birth: " + patient.dateOfBirth;
        card.appendChild(birth);


        let gender = document.createElement("p");
        gender.textContent = "Gender: " + patient.gender;
        card.appendChild(gender);


        let phone = document.createElement("p");
        phone.textContent = "Phone: " + patient.phone;
        card.appendChild(phone);


        let disease = document.createElement("p");
        disease.textContent = "Disease: " + patient.disease;
        card.appendChild(disease);


        let email = document.createElement("p");
        email.textContent = "Email: " + patient.email;
        card.appendChild(email);


        container.appendChild(card);
    }
}

render();