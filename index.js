
function submitData(someName,someEmail){
    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name : someName,
            email: someEmail,
        })
    })
    .then(res =>res.json())
    .then(resObj => appendDom(resObj))
    .catch(function appendDomErr(err){
   
        p.textContent = 'Unauthorized Access'
        body.append(p)
    })
}
let body = document.querySelector('body');
const p = document.createElement('p')

function appendDom(someObj){
    p.textContent = someObj.id
    body.append(p)
}







