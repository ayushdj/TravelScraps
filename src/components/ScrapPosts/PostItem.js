import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import service from "./service";
import profileService from '../ProfileScreen/service'
import Comment from "./Comments/Comment";
import {useHistory} from "react-router-dom";
import _ from 'lodash';
import {ADMIN, TRAVELLER} from "../../constants/userConst";
import './index.css';

const selectProfile = (state) => state.profile;
const selectComments = (state) => state.comments;

const PostItem = ({loggedIn, postData, user}) => {
    let sizePost = postData.length;
    const selectorComments = useSelector(selectComments);
    const history = useHistory()
    const selectorProfile = useSelector(selectProfile);
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    useEffect(() => profileService.findProfileById(dispatch, postData.person).then((profile) => setProfile(profile)), [sizePost]);
    let currentPoster;

    if (_.isEqual({}, profile)) {
        currentPoster = {
            userName: "",
            title: "",
            location: "",
            tags: [],
            text: "",
            travelPlan: "",
            images: [],
            comments: [],
            person: ""
        };
    } else {
        currentPoster = profile.profile;
    }


    const [currentPost, setCurrentPost] = useState({
        title: postData.title,
        location: postData.location,
        tags: postData.tags,
        text: postData.text,
        travelPlan: postData.travelPlan,
        images: postData.images,
        comments: postData.comments,
        person: postData.person
    })

    const [newComment, setNewComment] = useState("");


    const handleCommentAddition = async (event) => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            const newCommentObj = {
                text: newComment,
                post: postData._id,
                person: user._id,
                profilePicture: user.profilePicture
            }
            service.createComment(dispatch, newCommentObj).then((commentId) => {
                const newPostObject = {
                    title: postData.title,
                    location: postData.location,
                    tags: postData.tags,
                    text: postData.text,
                    travelPlan: postData.travelPlan,
                    images: postData.images,
                    comments: [...postData.comments, commentId],
                    person: postData.person
                }

                service.updatePostComments(dispatch, postData._id, newPostObject)
            }).then(() => numComments += 1).then(() => window.location.reload());
        }
    }
    const [liked, setLiked] = useState(false);

    const handleLikeClick = (liked) => {
        if (!loggedIn) {
            history.push('/login')
        } else {
            setLiked(!liked)
        }
    }

    const handleDeletePost = () => {
        service.deletePost(postData._id);
        window.location.reload();
    }
    const [clickedComment, setClickedComment] = useState(false);


    let numComments = postData.comments.length;
    const [comments, setComments] = useState(selectorComments);


    const populateComments = async () => {
        for (let i = 0; i < postData.comments.length; i++) {
            let id = postData.comments[i];
            await service.findCommentById(dispatch, id);
        }

    }
    useEffect(() => populateComments(), [numComments]);

    const deleteComment = (event) => {
        if (window.confirm("Delete this comment?")) {
            const deletedComment = selectorComments.find((comment) => comment._id === event._id)
            const newPost = {
                ...postData,
                comments: postData.comments.filter((comment) => comment !== deletedComment._id)
            }

            service.deleteComment(dispatch, deletedComment._id, newPost, postData._id)
            numComments -= 1

        }
    }
    const handleAvatarClicker = (comment) => {
        history.push(`/userProfile/${comment}`);
    }
    return (
      <>
          <li className="list-group-item wd-scrapPosts-main">
              <div className="row">
                  <div className="col-1" onClick={() => handleAvatarClicker(currentPoster._id)}>
                      <img src={currentPoster.profilePicture} className="rounded-circle float-start wd-avatar"/>
                  </div>
                  <div className="col-9">
                      <span style={{color: "rgb(125, 125, 125)"}}>@{currentPoster.userName}</span>
                      <br/>
                      <span style={{color: "rgb(125, 125, 125)"}}><i
                          className="fas fa-street-view"/> {postData.location}</span>
                  </div>
                  <div className="col-1">
                      {
                          user._id === postData.person || user.type === ADMIN ? <i style={{marginLeft:"50px"}} className="fas fa-trash" onClick={handleDeletePost}/> : <></>
                      }
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 mt-2">
                      <h5 style={{color: "white"}}><strong>{postData.title}</strong></h5>
                      {currentPost.text}
                  </div>
              </div>
              <div className="row">
                  <ul className="list-group-horizontal">
                  {
                      currentPost.images.map(image =>
                          <li className="list-group-item wd-scrapPosts-picture">
                              <img src={image}
                                   className="mt-2 wd-border-radius-20px"
                                   style={{width: "30%"}} alt={" "}/>
                          </li>
                      )
                  }
                  </ul>
              </div>
              <div className="row mb-3 mt-2">
                  <div className="col-12">
                    <span>
                        {!clickedComment ? <button className="col-12 btn btn-primary" onClick={() => setClickedComment(!clickedComment)}>
                            <i className="far fa-comment"/> Hide all comments</button> : <button className="col-12 btn btn-primary" onClick={() => setClickedComment(!clickedComment)}>
                            <i className="far fa-comment"/> Show all comments</button>}
                    </span></div>

                  {!clickedComment ?
                      <>
                          <ul className={"list-group mt-2"}>

                              {
                                  selectorComments.map((comment) => comment.post === postData._id ?
                                      <li className={"list-group-item"} style={{backgroundColor: "black"}}>
                                          <div className="row">
                                              <div className="col-1" onClick={() => handleAvatarClicker(comment.person)}>
                                                  <img src={comment.profilePicture}
                                                       className="rounded-circle float-start wd-avatar"/>
                                              </div>
                                              <div className="col-10">
                                                <span style={{
                                                    fontSize: "15px",
                                                    color: "white"
                                                }}>{comment.text}</span>
                                              </div>
                                              {
                                                  user._id === postData.person || user._id === comment.person || user.type === ADMIN ?
                                                      <div className="col-1" onClick={() => deleteComment(comment)}>
                                                          <i className="fas fa-times"/>
                                                      </div> : <></>
                                              }
                                          </div>
                                      </li> : <></>
                                  )
                              }
                          </ul>
                      </>

                      : <></>
                  }
                  {
                      !loggedIn || user.type === ADMIN ? <></> :
                          <div className="row mt-3">
                              <div className="col-12">
                            <textarea onChange={(event) =>
                                setNewComment(event.target.value)} placeholder="Add a comment"
                                      className="wd-text col-lg-12 row-10 form-control">
                            </textarea>
                              </div>
                              <button onClick={handleCommentAddition} type="button" className="btn btn-primary mt-2">Add Comment
                              </button>

                          </div>

                  }
              </div>
          </li>
          <br/>
      </>
    )
}


export default PostItem;