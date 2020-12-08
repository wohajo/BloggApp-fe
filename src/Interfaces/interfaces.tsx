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
    comments: Array<commentInterface>; 
    posts: Array<postInterface>;
    postsSpinner: Boolean;
    pageCommentsSpinnner: Boolean;
} 

export interface postIdProp {
    postId: string;
}