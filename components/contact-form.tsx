"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzjlnB7zrSNxojf_pDNmJZFYaViMj08eGqmjfJTQdiOhLWkMyvJ76ys437PT1EmMj8f/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", company: "", service: "", message: "" });

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsError(true);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Get in Touch</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select value={formData.service} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mvp">MVP Development</SelectItem>
            <SelectItem value="revamp">Codebase Revamp</SelectItem>
            <SelectItem value="ai">AI & Automation</SelectItem>
            <SelectItem value="consulting">Tech Consulting</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" className="min-h-[120px]" required />
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => window.open("https://calendly.com/faiq55555", "_blank")}
        >
          <CalendarIcon className="h-4 w-4" />
          Schedule a Call
        </Button>

        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>

      {isSuccess && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/50 dark:text-green-300">
          ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {isError && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/50 dark:text-red-300">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
