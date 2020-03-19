function res(){
  var n=document.getElementById("name").value;
  var g=document.getElementById("email").value;
  localStorage.setItem("name",n);
  localStorage.setItem("mail",g);
  window.location.assign("D:\sindhuja training\login ui\login signup.htmll")
}
