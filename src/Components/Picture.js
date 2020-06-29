import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
        const post = props.post
        return <figure className = "figure">
            <img className = "picture" src = {post.imageLink} alt = {post.description} />   
            <figcaption> <p> {post.description} </p> </figcaption>
            <div className = "button-container">
                <button onClick = {() => {
                    props.onRemovePicture(post)
                }}> Remove </button>
            </div>
        </figure>
}

Picture.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePicture: PropTypes.func.isRequired
}

export default Picture;