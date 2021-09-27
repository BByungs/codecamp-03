import { gql , ApolloServer } from "apollo-server"
import {createConnection} from "typeorm"
import Product from "./Product.postgres"

    const typeDefs = gql`
        # input page {
        #     page: Int
        # }
        input productId {
            ID : String
        }
        
        type Date {
            Date: String
        }
       
        type Return {
            message : String
            number: Int
            productId: String 
        }
        
        input CreateProductInput {
            name: String
            detail: String
            price: Int
        }

        input UpdateProductInput {
            name : String
            detail: String
            price: Int
        }

        

        type ProductReturn {
            productId: ID
            seller: String
            name: String
            detail: String
            price: Int
            createdAt: Date
        }

        ####################################

        type Query {
            fetchProducts(page: Int): [ProductReturn!]
            fetchProduct(productId: ID): ProductReturn
        }

        type Mutation {
            createProduct(
                seller:String , createProductInput:CreateProductInput
            ): Return
            
            updateProduct(
               productId: ID,
               updateProductInput: UpdateProductInput!
            ): Return

            deleteProduct(
                productId: ID
            ): Return
        }
    `

    const resolvers = {
        Query: {
            fetchProducts: async (_:any, args:any) => {
                const result = await Product.find({
                    where:{deletedAt:null,...args.page}
                })
                return result
            },
            fetchProduct: async (_:any, args:any) => {
                const result = await Product.findOne({
                    where:{deletedAt:null,productId: args.productId}
                })
                return result
            }
        },
        Mutation: {
            createProduct: async(_:any, args:any) => {
                const result = await Product.insert({
                    seller: args.seller,
                    ...args.createProductInput
                })
                console.log(result)
                return {message:"성공했습니다!!" , number:result.identifiers[0].number , productId:result.identifiers[0].productId}
            },
            updateProduct: async(_:any , args:any) => {
                const result = await Product.update({productId:args.productId}, {...args.updateProductInput})
                console.log(result)
                return {message:"성공했습니다!!" , productId:args.productId}
            },
            deleteProduct: async(_:any, args:any) => {
                const result = await Product.update({productId:args.productId},{deletedAt: new Date()})
                console.log(result)
                return {message:"성공했습니다!!" , productId:args.productId}
            }

        }
    }

    const server = new ApolloServer({
        typeDefs , resolvers
    })

    createConnection({
        type: "postgres",
        database: "postgres",
        username: "postgres",
        password: "postgres2021",
        port: 5019,
        host: "34.64.221.225",
        entities: [__dirname + "/*.postgres.ts"],
        logging: true,
        synchronize: true,
    }).then(()=>{
        console.log("접속완료!!")
        server.listen({port:4000})
    }).catch((error)=>{
        console.log(error)
    })
