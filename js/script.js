const blogTitleRef = document.querySelector("#blog-title");
const blogTextRef = document.querySelector("#blog-text");
const submitBtnRef = document.querySelector("#submit-btn");
const formRef = document.querySelector("form");
let recentBlogPostsRef = document.querySelector("#recent-blog-posts")

async function getBlogPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    console.log(data)
}
getBlogPosts()