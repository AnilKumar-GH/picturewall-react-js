import React, {Component} from 'react';
import Title from './Title';
import PictureWall from './PictureWall';
import AddPicture from './AddPicture';
import {Route} from 'react-router-dom';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "Dice Rollers",
                imageLink: "https://images.pexels.com/photos/707837/pexels-photo-707837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }, {
                id: 1,
                description: "The Lion",
                imageLink: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }, {
                id: 2,
                description: "Sunset",
                imageLink: "https://images.pexels.com/photos/70577/sunset-birds-flying-sky-70577.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }, {
                id: 4,
                description: "Wild Life",
                imageLink: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }],
        }

        this.removePicture = this.removePicture.bind(this);

    }

    removePicture(postRemoved) {
        this.setState(state => ({
          posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPicture(postSubmitted) {
        this.setState(state => ({
          posts: state.posts.concat([postSubmitted])
        }))
    }

    render() {
        return (
        <div>
          <Route exact path = "/" render = {() => (
              <div>
                  <Title title = {'Picturewall'}/>  
                  <PictureWall posts = {this.state.posts} onRemovePicture = {this.removePicture} />
              </div>    
          )}/>
              
          <Route path = "/AddPicture" render = {({history}) => (
                  <AddPicture onAddPicture = {(addedPost) => {
                    this.addPicture(addedPost)
                    history.push('/')
                  }}/>
          )}/>
        </div>
        )    
    }
  }
  
  export default Main;