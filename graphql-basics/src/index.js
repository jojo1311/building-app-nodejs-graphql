import { GraphQLServer } from "graphql-yoga";

//Scalar types - Stringt, Boolean, Int, Float, ID

// Types definitions (Schema)
const typeDefs = `
   type Query {
       title: String!
       price: Float!
       releaseYear: Int
       rating: Float
       inStock:  Boolean!

   }
`;

// Resolvers defining our functions and returning methods
const resolvers = {
  Query: {
    title() {
      return "Killing a Mocking Bird";
    },
    price() {
      return 24.99;
    },
    releaseYear() {
      return null;
    },
    rating() {
      return 4.5;
    },
    inStock() {
      return true;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up!");
});
