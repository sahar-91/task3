"use client";
import { useState } from "react";


export default function Form({ fields, buttonText }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (name, value) => {
    setFormData((prev) => ({...prev, [name]: value,}));
  };

  const validate = () => {
    let newErrors = {};

    fields.forEach((f) => {
      const value = formData[f.name];

      if (!value || value.trim() === "") {
        newErrors[f.name] = "This field is required";
      }

      if (f.type === "email" && value && !value.includes("@")) {
        newErrors[f.name] = "Invalid email";
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-[palevioletred] text-xl font-bold">
        Thank you! Your message has been sent successfully.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {fields.map((f, idx) => (
        <div key={idx} className="flex flex-col">
          
          {f.type === "textarea" ? (
            <textarea
              name={f.name}
              placeholder={f.placeholder}
              rows={f.rows || 5}
              value={formData[f.name] || ""}
              onChange={(e) => handleChange(f.name, e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]"
            />
          ) : (
            <input
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              value={formData[f.name] || ""}
              onChange={(e) => handleChange(f.name, e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]"
            />
          )}

          {errors[f.name] && (
            <span className="text-red-500 text-sm mt-1">
              {errors[f.name]}
            </span>
          )}

        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-[palevioletred] cursor-pointer text-white rounded-lg hover:scale-105 transform transition-transform duration-300"
      >
        {buttonText}
      </button>
    </form>
  );
}