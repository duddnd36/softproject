function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    var formData={};
    formData["fullname"] =document.getElementById("fullname").value;
    formData["pw"] =document.getElementById("pw").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("pwname").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML = data.pw;
}