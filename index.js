const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const { MONGODB } = require('config.js');

mongoose.
connect(MONGODB, { useNewURlParser: true })
.then(() => {
    return server.listen({ port: 2000 });
})
.then((res) => {
    console.log(`Server running on port ${res.url}`);
});

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`
const resolvers = {
    Query: {
        sayHi: () => 'Hello Emily!'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: 2000 })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })