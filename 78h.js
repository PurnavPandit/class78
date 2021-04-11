var image =[
    "https://mail.google.com/mail/u/0?ui=2&ik=4f25742645&attid=0.1&permmsgid=msg-a:r7140968330779601771&th=178bc729788636b8&view=att&disp=safe&realattid=178bc7284a53ec8ca6f1","https://mail.google.com/mail/u/0?ui=2&ik=4f25742645&attid=0.1&permmsgid=msg-a:r-5597487972939117426&th=178bc73f3de866c8&view=att&disp=safe&realattid=178bc73dbdf4daa78c91","https://mail.google.com/mail/u/0?ui=2&ik=4f25742645&attid=0.1&permmsgid=msg-f:1665552281317104342&th=171d3af9b2bf5ad6&view=att&disp=safe&realattid=171d3af57af52441a1e1"
] 
var imagenam =[
    "Father;Kedar pandit","Mother;Abhaya Pandit","Me;Purnav Pandit"
]
var i = 0;
function nextslide()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("img").src = updatedImage;
    document.getElementById("imgnam").innerHTML = updatedName;
}
