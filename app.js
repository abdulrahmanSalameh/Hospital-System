function Patient(fullName,passWord,dateOfBirth,gender,phone,disease,img){


    this.fullName = fullName;
    this.passWord = passWord;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phone = phone;
    this.disease = disease;
    this.img = img;
}

let patients = [];

if (localStorage.getItem("patients")) {
    patients = JSON.parse(localStorage.getItem("patients"));
}


let form=document.getElementById("patientForm");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let fullName=document.getElementById("fullName").value;
    let passWord=document.getElementById("password").value;
    let dateOfBirth=document.getElementById("dateOfBirth").value;
    let phone=document.getElementById("phone").value;
    let disease=document.getElementById("disease").value;
    let image =document.getElementById("image").value;

    let gender;
    if(document.getElementById('male').checked )
    {
        gender='Male';
    }
    else{
        gender = 'Female'
    }

    let newPatient= new Patient(fullName,passWord,dateOfBirth,gender,phone,disease,image)

    patients.push(newPatient)
    
    localStorage.setItem("patients", JSON.stringify(patients));


    render();
});
    
    function render(){
        let container= document.getElementById("patientsContainer")
        container.innerHTML = "";
         for(let i=0;i<patients.length;i++){

            let patient=patients[i];

            let card=document.createElement("div");
            card.className = "patient-card";            
            

            let img=document.createElement("img");
            img.src=patient.img
            card.appendChild(img)


            let name=document.createElement("h3");
            name.textContent=patient.fullName;
            card.appendChild(name);

            let password=document.createElement("p")
            password.textContent="password: "+ patient.passWord;
            card.appendChild(password)


            let birth=document.createElement("p");
            birth.textContent="Date Of Birth: "+patient.dateOfBirth;
            card.appendChild(birth);


            let gender=document.createElement("p")
            gender.textContent="Gender: "+ patient.gender;
            card.appendChild(gender);


            let phone=document.createElement("p");
            phone.textContent="Phone: "+ patient.phone;
            card.appendChild(phone);


            let disease=document.createElement("p")
            disease.textContent="Disease: "+ patient.disease;
            card.appendChild(disease);

            container.appendChild(card);



 }}
    render();
   

    
