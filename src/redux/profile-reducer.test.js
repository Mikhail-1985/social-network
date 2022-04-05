import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hello', like: 15 },
        { id: 2, message: 'How are you?', like: 11 },
        { id: 3, message: 'I am Ok', like: 12 }
    ]
}

test('new post should be added', () => {
    let action = addPostActionCreator("Hello")
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
  });

test('new post text should be correct', () => {
    let action = addPostActionCreator("Hello")
    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe("Hello")
  });

test('after deliting length of array of posts shiuld be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
  });