var form= document.getElementsByClassName('form')[0];
console.log(form);

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var n= document.getElementById('name').value;
    var e= document.getElementById('email').value;
    var p= document.getElementById('phone').value;
    var s= document.getElementById('address').value
    var m= document.getElementById('message').value;


    var body= "Name: "+n+ "<br>"+ "Email: "+e+ "<br>"+ "Phone: "+p+ "<br>"+  "Address: "+s+ "<br>"+ "Message: "+m;
    //document.write(body)
    Email.send({
        SecureToken : "2201b07b-157a-4d05-b75f-51c9d4fcb8c5",
        To : 'greenergytechpteltd@gmail.com',
        From : "greenergytechpteltd@gmail.com",
        Name: n,
        Email: e,
        Subject : s,
        Message : m,
        Body : body
    }).then(
      message => alert(message)
    );
})