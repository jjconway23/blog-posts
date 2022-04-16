const blogTitleRef = document.querySelector("#blog-title");
const blogTextRef = document.querySelector("#blog-text");
const submitBtnRef = document.querySelector("#submit-btn");
const formRef = document.querySelector("form");
const recentBlogPostsRef = document.querySelector("#recent-blog-posts")
let posts = []

function renderHTML (){
    recentBlogPostsRef.innerHTML =""
    posts.forEach( post => {
        let html =
        `
        <h4>${post.title}</h4>
        <p>${post.body}</h4>

        `        
    return recentBlogPostsRef.innerHTML += html  
    })
    
}
async function getBlogPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json()
        posts = data.slice(0,5)
        renderHTML()
    }
    catch(err){
        console.log("Error!")
        console.log(err)
    }
    finally{
        console.log("Function complete")
    }
}

formRef.addEventListener("submit",(e)=> {
    e.preventDefault()
    
    if(!blogTitleRef.value || !blogTextRef.value){
        alert("Must input a title and text")
    } else{
        let newBlogPost = {
            title: blogTitleRef.value,
            body: blogTextRef.value
        }
        posts.unshift(newBlogPost)
        formRef.reset()
        return renderHTML() 
    }
    
})
getBlogPosts()

