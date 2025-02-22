
 function formData(){
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.querySelectorAll('input[ name="course"]:checked');
    let date = document.getElementById('date').value;

    let courseValue= [];
    for (i=0; i<course.length;i++){
        courseValue.push(course[i].value);   
    }
    let output="Full Name; " +fullName+ '<br>'
    +'Email: '+email+ '<br>'
    + 'Password: '+password+'<br>'
    +'Gender: '+gender.value+ '<br>'
    + 'DoB: '+date+'<br>'
    +'Courses: '+courseValue+'<br>';

    let newWindow=window.open('','_blank');
    newWindow.document.write("<pre>"+output+"</pre>");
 }

