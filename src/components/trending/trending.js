import React from 'react';
import { Link } from 'react-router-dom';

const trending_blogs = [
    {
        "id": 1,
        "title": "Post Title",
        "author": "Author",
        "date_published": "May 22",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
        "image_url": "https://via.placeholder.com/100x100",
    },
    {
        "id": 2,
        "title": "Post Title",
        "author": "Author",
        "date_published": "May 22",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
        "image_url": "https://via.placeholder.com/100x100",
    },
    {
        "id": 3,
        "title": "Post Title",
        "author": "Author",
        "date_published": "May 22",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
        "image_url": "https://via.placeholder.com/100x100",
    },
];

export default function Trending(){
    return (
        <div>
            <div class="row pb-0 pt-0" id="trending">
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
                {
                    trending_blogs.map((blog) => {
                        return (
                            <div class="col-md-4">
                                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
                                    <div class="col p-3 d-flex flex-column position-static pt-0 pb-0">
                                        <strong class="d-inline-block mb-2 text-primary">Category</strong>
                                        <h3 class="mb-0 small-heading">{blog.title}</h3>
                                        <div class="mb-1 text-muted small-heading-light">Author: {blog.author} | {blog.date_published}</div>
                                        <p class="mb-auto small-par-text">{blog.body.slice(0,100)} &nbsp;&nbsp;<Link to="/" className="stretched-link">continue reading</Link></p>
                                    </div>
                                    <div class="col-auto d-none d-lg-block container">
                                        <div class="row align-center"><img src={blog.image_url} alt={blog.title} /></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}