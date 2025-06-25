const config = {
    appwriteUrl : String(import.meta.VITE_APPWRITE_URL),
    project_Id : String(import.meta.APPWRITE_PROJECT_ID),
    databaseId : String(import.meta.APPWRITE_DATABASE_ID),
    collectionId : String(import.meta.APPWRITE_COLLECTION_ID),
    bucketId : String(import.meta.APPWRITE_BUCKET_ID),

}

export default config