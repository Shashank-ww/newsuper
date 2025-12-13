"use client";

import React, { useState } from "react";
import {
  Profile,
  TalentCategory,
  TalentCategories,
} from "@/data/profiles";

const ProfileForm: React.FC = () => {
  // Initial profile state
  const initialProfile: Profile = {
    id: crypto.randomUUID(),
    name: "",
    role: "",
    category: TalentCategories[0], // default to first category
    rate: 0,
    expertise: [],
    lastWorkedAt: "",
    experience: 0,
    verified: false,
    image: "/webimgs/avatars/profiles/default.png",
  };

  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Handle generic input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setProfile((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rate" || name === "experience"
          ? Number(value)
          : value,
    }));
  };

  // Handle expertise checkboxes
  const handleExpertiseChange = (skill: string, checked: boolean) => {
    setProfile((prev) => ({
      ...prev,
      expertise: checked
        ? [...prev.expertise, skill]
        : prev.expertise.filter((s) => s !== skill),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!response.ok) throw new Error("Failed to create profile.");

      setMessage("Profile created successfully!");
      setProfile({ ...initialProfile, id: crypto.randomUUID() }); // reset
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Example expertise options
  const expertiseOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "Figma",
    "Photoshop",
    "SEO",
    "Marketing",
    "Project Management",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Create Your Profile</h2>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="role"
        value={profile.role}
        onChange={handleChange}
        placeholder="Role / Position"
        required
        className="w-full p-2 border rounded"
      />

      <select
        name="category"
        value={profile.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {TalentCategories.map((cat: TalentCategory) => (
          <option key={cat} value={cat}>
            {cat.replace(/([A-Z])/g, " $1").trim()}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="rate"
        value={profile.rate}
        onChange={handleChange}
        placeholder="Hourly Rate (₹)"
        min={0}
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="experience"
        value={profile.experience}
        onChange={handleChange}
        placeholder="Experience (years)"
        min={0}
        step={0.5}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="lastWorkedAt"
        value={profile.lastWorkedAt}
        onChange={handleChange}
        placeholder="Last Worked At"
        className="w-full p-2 border rounded"
      />

      <div className="space-y-1">
        <p className="font-medium">Expertise:</p>
        {expertiseOptions.map((skill) => (
          <label key={skill} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={profile.expertise.includes(skill)}
              onChange={(e) => handleExpertiseChange(skill, e.target.checked)}
            />
            {skill}
          </label>
        ))}
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="verified"
          checked={profile.verified}
          onChange={handleChange}
        />
        Verified
      </label>

      <input
        type="url"
        name="image"
        value={profile.image}
        onChange={handleChange}
        placeholder="Profile Image URL"
        className="w-full p-2 border rounded"
      />

      {message && (
        <p
          className={`text-center ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;



