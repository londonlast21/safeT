import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login(
    $email: String!,
    $password: String!
) {
    login(
            email: $email
            password: $password
    ){
        token user{
            _id email
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String!,
    $email: String!,
    $password: String!
){
    addUser(username: $username,
        email: $email,
        password: $password
    ){
        token user{
            _id username
        }
    }
}

`;

export const CREATE_POST_MUTATION =gql`
mutation addPost(
    $name: String!,
    $location: String!,
    $type: String!
){
addPost(name: $name,
    location: $location,
    type: $type
){
    _id name location type username createdAt 
    comments{
        _id createdAt username commentBody
    }
    
}
}
` 
;

export const CREATE_COMMENT_MUTATION = gql`
mutation addComment($postId: ID!, $commentBody: String!){
    addComment(postId: $postId, commentBody: $commentBody){
        _id
        comments{
            _id commentBody createdAt username
        }
       
}
}
`;