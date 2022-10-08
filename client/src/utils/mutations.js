//collects GraphQL mutations to be imported into other components
import { gql } from "@apollo/client";

//log in user and return token
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add new user to db and return token
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

//add book to user's savedBooks
//MAKE SURE TO INCLUDE SUBFIELDS FOR NESTED FIELDS SUCH AS SAVEDBOOKS, OR GRAPHQL WILL ERROR OUT
export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
            }
        }
    }
`;

//removes book from user's savedBooks
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                title
                authors
            }
        }
    }
`;

// const { gql } = require("@apollo/client");

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         savedBooks {
//           bookId
//           authors
//           description
//           title
//           image
//         }
//       }
//     }
//   }
// `;

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//         savedBooks {
//           bookId
//           authors
//           description
//           title
//           image
//         }
//       }
//     }
//   }
// `;

// export const SAVE_BOOK = gql`
//   mutation saveBook(
//     $bookId: String!
//     $authors: [String!]
//     $title: String!
//     $description: String!
//     $image: String
//   ) {
//     saveBook(
//       bookId: $bookId
//       authors: $authors
//       title: $title
//       description: $description
//       image: $image
//     ) {
//       _id
//       username
//       savedBooks {
//         bookId
//         authors
//         title
//         description
//         image
//       }
//     }
//   }
// `;

// export const DELETE_BOOK = gql`
//   mutation deleteBook($bookId: String!) {
//     deleteBook(bookId: $bookId) {
//       _id
//       username
//       bookCount
//       savedBooks {
//         bookId
//         title
//         description
//         image
//         authors
//       }
//     }
//   }
// `;