import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Example of fetching all contacts
async function getContacts() {
    return await prisma.contact.findMany();
}

// Example of creating a new contact
async function createContact(
  data: { 
    name?: string; 
    email?: string; 
    contact?: number;
    industry?: string;
    message: string 
  }) {
    return await prisma.contact.create({
        data,
    });
}

export { getContacts, createContact };
