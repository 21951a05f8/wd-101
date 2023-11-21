let form = document.getElementById('custom-form');
const fetchUserEntries = () =>{
    let entries = localStorage.getItem("custom-user-entries");
    if(entries){
        entries = JSON.parse(entries);
    }
    else{
        entries = []
    }
    return entries
}
let userRecords = fetchUserEntries();

const displayUserRecords = () =>{
    const entries = fetchUserEntries();

    const tableRows = entries.map((record) =>{
        const nameCell = `<td> ${record.name}</td>`;
        const emailCell = `<td> ${record.email}</td>`;
        const passwordCell = `<td> ${record.password}</td>`;
        const dobCell = `<td> ${record.dob}</td>`;
        const acceptTermsCell = `<td> ${record.acceptTerms}</td>`;
        const row =  `<tr> ${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    
    const table = `<table><tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Dob</th>
    <th>Accepted terms?</th>
    </tr>${tableRows}</table>`;

    let details = document.getElementById('display-records');
    details.innerHTML = table;
} 


const saveUserFormDetails = (event) =>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTermsandConditions').checked;

    const record = {
        name,
        email,
        password,
        dob,
        acceptTerms
    }
    userRecords.push(record);

    localStorage.setItem("custom-user-entries" , JSON.stringify(userRecords));
    userRecords = fetchUserEntries();
    displayUserRecords();
}

form.addEventListener("submit", saveUserFormDetails);
displayUserRecords();

document.addEventListener("DOMContentLoaded", function() {
    var inputDOB = document.getElementById('dob');
    var minDOB = new Date('1967-11-09');
    var maxDOB = new Date('2004-11-09');
  
    inputDOB.addEventListener('input', function() {
      var selectedDOB = new Date(this.value);
  
      if (selectedDOB < minDOB) {
        this.setCustomValidity('Date must be after 9/11/1967.');
      } 
      else if(selectedDOB > maxDOB){
        this.setCustomValidity('Date must be before 09/11/2004.')
      }
      else {
        this.setCustomValidity('');
      }
    });
});
