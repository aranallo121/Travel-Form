var first = document.getElementById("firstName");
var last = document.getElementById("lastName");
var age = document.getElementById("age");
var male = document.getElementById("isMale");
var female = document.getElementById("isfemale");
var destination= document.getElementById("destination")
var restrictions=document.getElementsByName("food")



function alertInfo() {
    var restrictions=document.getElementsByName("food")
    var firstname = first.value;
    var lastname=last.value;
    var agevalue=age.value;
    var destinationValue=destination.value
    var food=[]
    if (male.checked==true){
        var gender= "male"
    } else if(female.checked==true){
        var gender="female"
    } else {
        var gender="other"
    };
    for (var i=0; i<restrictions.length; i++){
        if (restrictions[i].checked==true) {
            food.push(restrictions[i].value)
        }
    }
    
    alert("Firstname: "+firstname + "\nLastname: "+lastname + "\nAge: " +agevalue + "\nGender: " +gender+"\nDestination: " +destinationValue+ "\nFood Restrictions: " + food);
}