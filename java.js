let studentId=1;
document.getElementById("btn-add").addEventListener("click", function(){
    const name=document.getElementById("name").value;
    const gender=document.getElementById("gender").value;
    const age=document.getElementById("age").value;
    const email=document.getElementById("email").value;
    const province=document.getElementById("province").value;
   
    if (!(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com"))) {
      alert("Email is Invalid");
      return;
    }
    if (/\d/.test(name)) {
      alert("Your name can't input the number");
      return;
    }
    if (isNaN(age) || age <= 0) {
      alert("Your age isn't valid");
      return;
    }
    if (/\d/.test(province)) {
      alert("province is invalid");
      return;
    }

    if(name && gender && age && email && province) {
        addStudent(name,gender, age, email, province);
        clearInput();
    }
    else{
        alert("Please fill out all fields.");
    }
});

function addStudent(name, gender, age, email, province){
    const tableBody=document.getElementById("student-table-body");
    const row=document.createElement("tr");

    row.innerHTML=`
    <td>${studentId++}</td>
    <td>${name}</td>
    <td>${gender}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${province}</td>
    <td>
        <button class="Edit" onclick="editStudent(this)">Edit</button>
        <button class="Delete" onclick="deleteStudent(this)">Delete</button>
    </td>
    `;
    tableBody.appendChild(row);
}

function clearInput(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("province").value="";
}

function deleteStudent(button){
    const row = button.parentElement.parentElement;
    row.remove();
}

function editStudent(button){
    const row =button.parentElement.parentElement;
    document.getElementById("name").value=row.cells[1].textContent;
    document.getElementById("gender").value=row.cells[2].textContent;
    document.getElementById("age").value=row.cells[3].textContent;
    document.getElementById("email").value=row.cells[4].textContent;
    document.getElementById("province").value=row.cells[5].textContent;
    row.remove();
}