// server/contactForm.ts
import { z } from 'zod';
import { ContactSchema } from '@/schemas'; // Adjust import path

// Use the inferred type from the schema
export const sendContactForm = async (data: z.infer<typeof ContactSchema>) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Serialize the object into JSON
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Oops! We are checking what went wrong!');
    }

    return await response.json(); // Parse and return the JSON response
};
