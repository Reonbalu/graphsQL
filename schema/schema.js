const graphql = require('graphql')



const { GraohQLObjectType} = graphql

const MovieType = new GraohQLObjectType({
    name: 'Movie',
    fields: ()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        genre:{type: GraphQLString}
    })
})

const RootQuery = new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movie: {
            type: MovieType,
            args: {id:{type:GraphQLString}},
            resolve{parents, args}
        }
    }
})