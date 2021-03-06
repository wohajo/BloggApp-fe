export interface commentInterface {
    id: string;
    username: string;
    postId: string;
    contents: string;
}

export interface commentInterfaceWithIsInDialog {
    id: string;
    username: string;
    postId: string;
    contents: string;
    isInDialog: Boolean;
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
    searchedPosts: Array<postInterface>;
    searchedPostsSpinner: Boolean;
    postsPagination: number;
    searchPostPagination: number;
} 

export interface postIdProp {
    postId: string;
}