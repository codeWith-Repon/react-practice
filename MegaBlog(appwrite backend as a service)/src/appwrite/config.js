import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, uerId}){
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    uerId
                }
            )

        } catch (error) {
            console.log("Appwrite service createPost :: createPost() :: error", error)
            throw error
        }
    }

    async updatePost( slug, {title, content, featuredImage, status}){
       try {
        
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )

       } catch (error) {
        console.log("Appwrite service updatePost() :: error", error);
        throw error;
       }
    }

    async deletePost(slug){
        console.log("image delete succfully (featuredImage) ", slug)

        try {

            await this.databases.deleteDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId,
            slug,
           )
           return true

        } catch (error) {
            console.log("Appwrite service createPost :: deletePost() :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service getPost() :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
           return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service getPosts :: getPosts() :: error", error);
            return false;
        }
    }

    //file upload service

    async uploadFile(file){
        console.log("file upload", file)
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service uploadFile :: uploadFile() :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        console.log("deleteFile :::", fileId)
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service deleteFile :: deleteFile() :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service;