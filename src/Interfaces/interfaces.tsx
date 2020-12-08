export interface commentInterface {
    id: string;
    username: string;
    postId: string;
    contents: string;
}

export interface postInterface {
    id: string;
    authors: Array<string>;
    tags: Array<string>;
    contents: string;
}

export interface rootState {
    posts: Array<postInterface>;
    postsSpinner: Boolean;
    comments: Array<commentInterface>; 
    pageCommentsSpinnner: Boolean;
    postComments: Array<commentInterface>; 
    postCommentsSpinner: Boolean;
} 

export interface postIdProp {
    postId: string;
}