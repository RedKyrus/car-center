import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, NextConfig } from "next";
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

const apolloServerStart = apolloServer.start();

async function apolloHandler(res: NextApiRequest, req: NextApiResponse) {
  await apolloServerStart;
  apolloServer.createHandler({ path: "/api/graphql" })(res, req);
}

// const startApolloServer = apolloServer.start();

export const config: NextConfig = { api: { bodyParser: false } };

export default apolloHandler;
