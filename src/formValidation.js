export default function validate(employee, setErr){
 let formValid = true;
 let error = {};
 if(!employee.name){
     formValid = false;
     error.name = "Name field is required";
 }
 if(!employee.phone){
    formValid = false;
    error.phone = "Phone field is required";
}
if(!employee.company){
    formValid = false;
    error.company = "Company field is required";
}
if(!employee.address){
    formValid = false;
    error.address = "Address field is required";
}
setErr(error);
return formValid;
}