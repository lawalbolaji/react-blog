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
            <div className="row pb-0 pt-0" id="trending">
                <div className="col">
                    <div className="row text-align-center mb-0">
                        <div className="col-1"><img src="https://via.placeholder.com/30x30" alt="" /></div>
                        <div className="col-auto">
                            <h3 className="small-heading text-uppercase trend-heading mb-0 pb-0 mt-1">Trending on &nbsp; &nbsp;<span className="blog_logo_small">Bolaji Lass</span></h3>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className="row pb-0 pt-0 mb-4">
                {
                    trending_blogs.map((blog) => {
                        return (
                            <div className="col-md-4">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
                                    <div className="col p-3 d-flex flex-column position-static pt-0 pb-0">
                                        <strong className="d-inline-block mb-2 text-primary">Category</strong>
                                        <h3 className="mb-0 small-heading">{blog.title}</h3>
                                        <div className="mb-1 text-muted small-heading-light">Author: {blog.author} | {blog.date_published}</div>
                                        <p className="mb-auto small-par-text">{blog.body.slice(0,100)} &nbsp;&nbsp;<Link to="/" className="stretched-link">continue reading</Link></p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block container">
                                        <div className="row align-center"><img src={blog.image_url} alt={blog.title} /></div>
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