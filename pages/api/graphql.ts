import { gql, ApolloServer } from "apollo-server-micro";
// import { PrismaClient } from "@prisma/client";

const typeDefs = gql`
  type BlogPost {
    id: String
    text: String
  }
  type Query {
    blogPosts: [BlogPost]
  }
`;

const resolvers = {
  // Query:{
  //   blogPosts:(_parent, _args,_contest) =>{
  //   }
  // }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const apolloHandler = apolloServer.createHandler({ path: "/api/graphql" });

// const startApolloServer = apolloServer.start();

export const config = { api: { bodyParser: false } };

export default apolloHandler;
