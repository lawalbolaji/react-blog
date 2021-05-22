import React from 'react';
import {useParams} from 'react-router-dom';

const blogFeed = [
    {
        'id': "1",
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': "2",
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': "3",
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': "4",
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
    {
        'id': "5",
        'title': 'New Blog',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        'author': 'Author',
        'date_published': 'May 14, 2021',
    },
];

const queryString = require('query-string');


export default function Detail(){
    const {id} = useParams();
    const blog = blogFeed.find((blog) => {
        return blog.id === id
    });

    return (
        <div class="container align-center main_image pt-5 mt-5">
            <div class="description blog_title border-bottom pb-2">
                <p id="intro_message">Excepteur sint occaecat cupidatat non proident</p>
            </div>

            <article class="blog_text mt-4">
                <p>
                    {blog.body}
                </p>
            </article>

            <p class="">
                <a href="#">Comments</a>
            </p>
        </div>

    );
}