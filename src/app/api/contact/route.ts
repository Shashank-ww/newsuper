import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { ContactSchema } from "@/schemas/ContactSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsedData =
      ContactSchema.parse(body);

    await prisma.contact.create({
      data: {
        name: parsedData.name,
        email: parsedData.email,
        contact: parsedData.contact,
        industry: parsedData.industry,
        message: parsedData.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Contact form submitted successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.flatten(),
        },
        { status: 400 }
      );
    }

    console.error(
      "Contact form error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}