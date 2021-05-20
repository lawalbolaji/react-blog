import React from 'react';
import './Feed.css';

const blogs = [
    {
        'id': 1,
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': 2,
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': 3,
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': 4,
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': 5,
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
]

function Feed(){
    return (
        <div class="articles-list container">
            <div class="row pb-0 pt-0">
                <div class="col">
                    <div class="row text-align-center mb-0">
                        <div class="col-1"><img src="https://via.placeholder.com/30x30" alt="" /></div>
                        <div class="col-auto">
                            <h3 class="small-heading text-uppercase trend-heading mb-0 pb-0 mt-1">Trending on &nbsp; &nbsp;<span class="blog_logo_small">Bolaji Lass</span></h3>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="row pb-0 pt-0 mb-4">
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
                        <div class="col p-3 d-flex flex-column position-static pt-0 pb-0">
                            <strong class="d-inline-block mb-2 text-primary">Category</strong>
                            <h3 class="mb-0 small-heading">Post Title</h3>
                            <div class="mb-1 text-muted small-heading-light">Author: Admin | Nov 12</div>
                            <p class="mb-auto small-par-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <a href="#" class="stretched-link">Continue reading</a></p>
                        </div>
                        <div class="col-auto d-none d-lg-block container">
                            <div class="row align-center"><img src="https://via.placeholder.com/100x100" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
                        <div class="col p-3 d-flex flex-column position-static pt-0 pb-0">
                            <strong class="d-inline-block mb-2 text-success">Category</strong>
                            <h3 class="mb-0 small-heading">Post title</h3>
                            <div class="mb-1 text-muted small-heading-light">Author: Admin | Nov 11</div>
                            <p class="mb-auto small-par-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <a href="#" class="stretched-link">Continue reading</a></p>
                        </div>
                        <div class="col-auto d-none d-lg-block container">
                            <div class="row align-center"><img src="https://via.placeholder.com/100x100" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
                        <div class="col p-3 d-flex flex-column position-static pt-0 pb-0">
                            <strong class="d-inline-block mb-2 text-danger">Category</strong>
                            <h3 class="mb-0 small-heading">Post title</h3>
                            <div class="mb-1 text-muted small-heading-light">Author: Admin | Nov 11</div>
                            <p class="mb-auto small-par-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <a href="#" class="stretched-link">Continue reading</a></p>
                        </div>
                        <div class="col-auto d-none d-lg-block container">
                            <div class="row align-center"><img src="https://via.placeholder.com/100x100" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-md-8">
                    <h4 class="pb-2 mb-2 border-bottom">From the Engine Room</h4>
                    
                    {/* render all blogs */}
                    {blogs.map(blog => {
                        return (
                        <article className="blog-post">
                            <h2 className="blog-post-title">{blog.title}</h2>
                            <p className="blog-post-meta">{blog.date_published} by <a href="#">{blog.author}</a></p>

                            <p>
                                {blog.body}
                                <a href="#">continue reading</a>
                            </p>
                        </article>
                        )
                    })}

                </div>
                <div class="col-md-4">
                    <div class="position-sticky about_tab">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4>About</h4>
                            <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Feed;