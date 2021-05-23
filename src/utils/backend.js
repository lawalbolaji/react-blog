const backend = {}

backend.endpoints = {
    // create_blog: "",
    // delete_blog: "",
    blog_list: "http://127.0.0.1:8000/api/blogs/",
    blog_detail: "",
    comment: "",
    login: "",
    logout: "",
    register: "",
}

backend.createBlog = () => {

}


backend.getBlogs = () => {
    return fetch(`${backend.endpoints.blog_list}`)
    .then((data) => data.json())
}

backend.getBlogDetail = () => {


}


backend.comment = () => {

}

backend.logout = () => {

}

backend.login = () => {

}

backend.register = () => {

}

backend.userDetails = () => {

}

export default backend;