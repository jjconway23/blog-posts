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
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    posts = data.slice(0,5)
    renderHTML()
}

formRef.addEventListener("submit",(e)=> {
    e.preventDefault()
    let newBlogPost = {
        title: blogTitleRef.value,
        body: blogTextRef.value
    }
    posts.unshift(newBlogPost)
    formRef.reset()
    return renderHTML()
})
getBlogPosts()
renderHTML()
