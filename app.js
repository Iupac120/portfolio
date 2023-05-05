const navBtn = document.querySelectorAll('.section')
const toggleBtn = document.querySelectorAll('.control')
const btn = document.querySelectorAll('.nav')
console.log(navBtn)
console.log(btn.length)
console.log(toggleBtn)

function toggleControll(){
    for (let i = 0; i < toggleBtn.length; i++){
        toggleBtn[1].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active')
            currentBtn[0].className = currentBtn[0].className.replace('active','')
            this.className += 'active'
            console.log(this.className)
        })
    }
}
const data = {
    name: document.getElementById('name'),
    email:document.getElementById('email'),
    subject:document.getElementById('subject'),
    textarea:document.getElementById('area'),
    userId:100
}
const getdata = () =>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(data)
    })
}
const fetchPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/users',{
        method:'post',
        body:JSON.stringify(data),
        headers: {
            'content-type':'application/json'
        }
    }).then((res)=>{res.json}).then((data) => {console.log(data)})
}
const formBtn = document.getElementById('form-btn')
formBtn.addEventListener('click',function(e){
    e.preventDefault()
    fetchPost()
})
toggleControll()