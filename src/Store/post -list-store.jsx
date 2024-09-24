import { createContext, useReducer } from 'react';

// Create context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST') {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid );
    }

    else if (action.type === 'ADD_POST') {
      newPostList = [action.payload, ...currPostList]
    }
  return newPostList; 
};

// Initial post list
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Enjoying my new trip to Mumbai",
    reactions: "2",
    userId: "user-7",
    tags: ['vacation', 'enjoying', 'Mumbai'],
  },
  {
    id: "2",
    title: "B.Tech Passout",
    body: "Got my bachelor's degree successfully without any backlog",
    reactions: "4",
    userId: "user-9",
    tags: ['passout', 'engineer', 'results'],
  },
];

// Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId,PostTitle,postBody,tags,Reaction) => {

    dispatchPostList({
      type: 'ADD_POST',
      payload:  {
        id: Date.now(),
        title: PostTitle ,
        body: postBody ,
        reactions: Reaction ,
        userId: userId,
        tags: tags,
      }
    })
  }; // Placeholder function
  const deletePost = (postid) => {
  dispatchPostList({
    type: 'DELETE_POST',
    payload: {
      postid,
    }
  })
  }; // Placeholder function

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
