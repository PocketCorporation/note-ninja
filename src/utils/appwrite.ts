import { Client, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67bfe8600011f250e328'); // Replace with your project ID

export const databases = new Databases(client);
export { ID } from 'appwrite';
