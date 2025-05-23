"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ContactSchema } from "@/schemas"; // Defined ContactSchema lives in schemas folder
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { sendContactForm } from "@/server/contactForm"; // Function to send data to your backend
import { Icons } from "@/components/ui/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { sectorData } from "@/components/Sectors";

export const ContactForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form setup with Zod schema validation
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      industry: "",
      message: "",
    },
  });

  // Submit handler for the form
  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    startTransition(() => {
      sendContactForm(values) 
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setSuccess("Thanks for your interest! We will respond soon.");
            form.reset(); // Reset the form on successful submission
          }
        })
        .catch(() => {
          // Catch any unexpected errors and clear the messages
          setError("Something went wrong. Please try again.");
        })
        .finally(() => {
          // Clear error and success messages after 5 seconds
          setTimeout(() => {
            setError("");
            setSuccess("");
          }, 5000); // 5000ms = 5 seconds

          setIsLoading(false);
        });
    });
  };

  return (
    <MaxWidthWrapper>
      <div className="w-full max-w-screen-lg px-4 items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="name"
                        placeholder="Your Name"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        placeholder="name@domain.com"
                        type="email"
                        autoComplete="email"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {/* Contact Field */}
              <FormField
                control={form.control}
                name="contact"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="contact">Contact</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="contact"
                        placeholder="Your Contact Number"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {/* Industry Dropdown */}
              <FormField
                control={form.control}
                name="industry"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="industry">Industry</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        id="industry"
                        disabled={isPending}
                        className="w-full bg-inherit border border-gray-300 rounded-md p-2 text-gray-500 text-sm"
                      >
                        <option value="">Select Industry</option>
                        {sectorData.map((service) => (
                          <option key={service.title} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Others">Others</option>
                      </select>
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        id="message"
                        placeholder="Share project details, proposals, talent profile, job description, web links, etc."
                        rows={3} // Adjusted to be smaller
                        disabled={isPending}
                        className="w-full bg-inherit border border-gray-300 rounded-md p-2 text-sm"
                      />
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Error and Success Messages */}
            <FormError message={error} />
            <FormSuccess message={success} />

            {/* Button Container */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              {/* Submit Button */}
              <Button
                disabled={isPending || isLoading}
                type="submit"
                className="w-full lg:w-auto text-secondary-foreground"
                variant={"outline"}
              >
                {(isPending || isLoading) ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              
              {/* Clear Button */}
              <Button
                disabled={isPending}
                type="button"
                className="w-full text-inherit lg:w-auto"
                variant={"ghost"}
                onClick={() => form.reset()}
              >
                Clear All
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactForm;
