import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Trending from '../trending/trending';
import backend from '../../utils/backend';

// const blogFeed = [
//     {
//         'id': 1,
//         'title': 'New Blog',
//         'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
//         'author': 'Author',
//         'date_published': 'May 14, 2021',
//     },
//     {
//         'id': 2,
//         'title': 'New Blog',
//         'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
//         'author': 'Author',
//         'date_published': 'May 14, 2021',
//     },
//     {
//         'id': 3,
//         'title': 'New Blog',
//         'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
//         'author': 'Author',
//         'date_published': 'May 14, 2021',
//     },
//     {
//         'id': 4,
//         'title': 'New Blog',
//         'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
//         'author': 'Author',
//         'date_published': 'May 14, 2021',
//     },
//     {
//         'id': 5,
//         'title': 'New Blog',
//         'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
//         'author': 'Author',
//         'date_published': 'May 14, 2021',
//     },
// ];

const categories = [
    // populate with different categories available via the api
];

function Feed(){

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let mounted = true;
        backend.getBlogs()
          .then(items => {
            if(mounted) {
                setBlogs(items);
                console.log(items)
            }
          })
        return () => mounted = false;
      }, []);

    return (
        <div className="articles-list container">
            <Trending />
            <div className="row g-5">
                <div className="col-md-8">
                    <h4 className="pb-2 mb-2 border-bottom">From the Engine Room</h4>
                    
                    {/* render all blogs */}
                    {blogs.map(blog => {
                        return (
                        <article className="blog-post">
                            <h2 className="blog-post-title">{blog.title}</h2>
                            <p className="blog-post-meta">May 23 by <a href="#">{blog.author}</a></p>

                            <p>
                                {blog.body}
                                <Link to={"/detail/".concat(blog.id)}>continue reading</Link>
                            </p>
                        </article>
                        )
                    })}

                </div>
                <div className="col-md-4">
                    <div className="position-sticky about_tab">
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4>About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Feed;