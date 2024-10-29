import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('')
    .setProject('');

export const account = new Account(client);
export { ID } from 'appwrite';