/* Add your JavaScript to this file */


document.addEventListener('DOMContentLoaded', function () {


    // var listItems = document.getElementsByTagName('li');
    // var list = document.getElementsByTagName("ul")[0];
    // list.style.listStyleType = "none";

    
    // var header = document.getElementsByTagName("header");
    // var headerElement = document.querySelector('header');
    // console.log(headerElement);
    // headerElement.style.display = "flex";








function confirm(){

    const val = document. querySelector('input').value;
    var messageelement = document.querySelector('.message');


    if (val == "" || (val.includes("@") == false) ){

    messageelement.innerHTML ="Please enter a valid email address.";
    console.log(messageelement.innerHTML);



    }

    else{
    messageelement.innerHTML = " Thank you! Your email address " + val + "has been added to our mailing list!";
    console.log(messageelement.innerHTML);
    }


}

var subscribe = document.querySelector('button');
// subscribe.preventDefault() ;
// subscribe.onClick = confirm();

subscribe.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission    
    confirm();
});








})
