import React from 'react';
import Picture from './Picture';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PictureWall(props) {
    return  <div>
                <Link className="addIcon" to="/AddPicture"> </Link>
                
                <div className = "picture-grid">
                        {props.posts
                        .sort(function(a, b) {
                            return b.id - a.id
                        })
                        .map((post, index) => <Picture key = {index} post = {post} onRemovePicture = {props.onRemovePicture}/>)}
                </div>
            </div>
}

PictureWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePicture: PropTypes.func.isRequired
}

export default PictureWall;