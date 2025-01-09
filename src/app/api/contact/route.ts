import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { ContactSchema } from '@/schemas/ContactSchema'; // Adjust import for your schema
import { z } from 'zod';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse and validate the incoming request body
    const body = await req.json();
    const parsedData = ContactSchema.parse(body); // Zod validation

    // Convert 'contact' to a number (since Prisma expects it to be a number)
    const contactNumber = Number(parsedData.contact);

    // Check if the conversion is successful, otherwise return an error
    if (isNaN(contactNumber)) {
      return NextResponse.json(
        { error: 'Invalid contact number. It must be a valid number.' },
        { status: 400 }
      );
    }

    // Insert data into the database via Prisma Client
    const newContact = await prisma.contact.create({
      data: {
        ...parsedData, // Include other parsed data
        contact: contactNumber, // Ensure 'contact' is a number before inserting into DB
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: newContact,
    });
  } catch (error) {
    // Narrowing error type to handle specific cases
    if (error instanceof z.ZodError) {
      // Handle Zod validation error
      console.error('Validation error occurred:', JSON.stringify(error.errors, null, 2));
      return NextResponse.json(
        { error: 'Invalid data format. Please check the submitted fields.' },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      // Handle other errors (Prisma or others)
      console.error('Unexpected error occurred:', error.message);
      return NextResponse.json(
        { error: 'An unexpected error occurred. Please try again later.' },
        { status: 500 }
      );
    }

    // Fallback for unknown error types
    console.error('Unknown error occurred:', error);
    return NextResponse.json(
      { error: 'An unknown error occurred.' },
      { status: 500 }
    );
  }
}
