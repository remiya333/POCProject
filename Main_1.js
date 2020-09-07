var button= document.getElementById("submit");
var Companynae = document.getElementById("Companyname")
var Adminname = document.getElementById("Adminname")
var PhoneNumber = document.getElementById("Phonenumber")
var AdminNumber = document.getElementById("Adminnumber")
var FaxNumber = document.getElementById("Faxnumber")
var UploadFile = document.getElementById("Logoupload")
var Department = document.getElementById("Department")
var JobTitle = document.getElementById("Jobtitle")
var NumberCheck = /\d{10}$/;
var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                    


function numberCheck(number){
    
    let check = number.match(NumberCheck)
    if(!check){
        return true
    }
    else{
        return false
    }

}
 button.addEventListener("click", function(){

    if(Companynae.value.length<=0){
        document.getElementById("CompanyNameError").innerHTML = 'Please enter Company Name'
        
    }
    if(Adminname.value.length <=0){
        document.getElementById("AdminnameError").innerHTML = 'Please enter Admin Name'
        
    }
    
    
    if(numberCheck(PhoneNumber.value)){
        document.getElementById("Phonenumberrror").innerHTML = 'Please enter a valid Phone number'
       
    }

    if(numberCheck(AdminNumber.value)){
        document.getElementById("Adminnumberrror").innerHTML = 'Please enter a valid Admin number'
        
    }

    if(numberCheck(FaxNumber.value)){
        document.getElementById("FaxNumbererror").innerHTML = 'Please enter a valid Fax number'
        
    }
    
    if(!allowedExtensions.exec(UploadFile.value)){
        document.getElementById("UploadError").innerHTML = 'File is not an image file'

    }
    if(Department.value.length<=0){
        document.getElementById("DepartmentError").innerHTML = 'Please enter Department.'
        
    }

    if(JobTitle.value.length<=0){
        document.getElementById("JobTitleError").innerHTML = 'Please enter Job Title'
        
    }
  
 })
 