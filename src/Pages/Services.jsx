import React, { useState } from "react";

const serviceOptions = [
  "Home Plant Styling",
  "Office Green Makeover",
  "Balcony / Rooftop Garden Setup",
  "Plant Care & Maintenance Visit",
];

const budgetOptions = ["৳2,000 - ৳5,000", "৳5,000 - ৳10,000", "৳10,000+"];

const Services = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    budget: "",
    notes: "",
    subscribe: true,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.service) newErrors.service = "Please choose a service type";
    if (!form.date) newErrors.date = "Select a preferred date";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(form);
  };

  return (
    <main className="bg-emerald-50 min-h-screen">
      {/* HERO */}
      <section className="relative w-full h-[60vh] md:h-[65vh] lg:h-[70vh] overflow-hidden">
        <img
          src="https://i.ibb.co.com/rLXkVM5/a8e5c5f756ad1179e194bc3205d8b144.jpg"
          alt="Smiling child supporting green world"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-emerald-200">
              We fight for the future
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Go green today,
              <br />
              save the world tomorrow!
            </h1>
            <p className="text-sm md:text-base text-gray-100/90 max-w-md">
              Choose from our eco-friendly services and we’ll help you design a
              greener home, office or rooftop that your plants—and the planet—
              will love.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#service-form"
                className="btn bg-emerald-500 hover:bg-emerald-600 border-none rounded-full"
              >
                Get Involved
              </a>
              <a
                href="#services-list"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-emerald-700 rounded-full"
              >
                Find Out More
              </a>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2" />
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section
        id="services-list"
        className="max-w-6xl mx-auto px-4 py-10 md:py-14"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl mb-4">
              🌿
            </div>
            <h3 className="font-semibold text-lg mb-2">Home Plant Styling</h3>
            <p className="text-gray-600 text-sm">
              We design cozy corners, shelves and windowsills with the right
              plants for light, space and mood.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl mb-4">
              🏢
            </div>
            <h3 className="font-semibold text-lg mb-2">Office Green Makeover</h3>
            <p className="text-gray-600 text-sm">
              Turn dull desks into fresh workspaces with low-maintenance plants
              that purify air and boost focus.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl mb-4">
              🌱
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Balcony & Rooftop Gardens
            </h3>
            <p className="text-gray-600 text-sm">
              From herbs to flowering plants, we transform your outdoor space
              into a tiny urban jungle.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section
        id="service-form"
        className="bg-white border-t border-emerald-100"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
          {/* left: form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Book a Green Service
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us what you need and we’ll match you with the perfect expert
              from the GreenNest team. You’ll get a follow-up email with time
              options and a rough cost estimate.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 md:p-6 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errors.name ? "border-red-400" : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errors.email ? "border-red-400" : ""
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service type<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`select select-bordered w-full ${
                      errors.service ? "border-red-400" : ""
                    }`}
                  >
                    <option value="">Choose one...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Preferred date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errors.date ? "border-red-400" : ""
                    }`}
                  />
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1">{errors.date}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Budget range
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="">Flexible</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Space size (approx.)
                  </label>
                  <input
                    type="text"
                    name="space"
                    value={form.space || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="e.g. 120 sq ft balcony"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Extra details
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full min-h-[90px]"
                  placeholder="Tell us about light, pets, style, or special requests..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="subscribe"
                  type="checkbox"
                  name="subscribe"
                  checked={form.subscribe}
                  onChange={handleChange}
                  className="checkbox checkbox-sm mt-1"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-600">
                  Send me monthly eco tips & plant care guides.
                </label>
              </div>

              <button
                type="submit"
                className="btn bg-emerald-500 hover:bg-emerald-600 border-none w-full md:w-auto"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* right */}
          <div className="space-y-4">
            <div className="bg-emerald-900 text-emerald-50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-2">
                Live Request Preview
              </h3>
              <p className="text-sm text-emerald-100 mb-3">
                As you fill the form, we generate a quick summary of your
                request so you can double-check before sending.
              </p>

              <ul className="text-sm space-y-1">
                <li>
                  <span className="font-semibold">Name:</span>{" "}
                  {form.name || <span className="opacity-60">Not set</span>}
                </li>
                <li>
                  <span className="font-semibold">Service:</span>{" "}
                  {form.service || (
                    <span className="opacity-60">Choose a service</span>
                  )}
                </li>
                <li>
                  <span className="font-semibold">Preferred date:</span>{" "}
                  {form.date || (
                    <span className="opacity-60">No date selected</span>
                  )}
                </li>
                <li>
                  <span className="font-semibold">Budget:</span>{" "}
                  {form.budget || (
                    <span className="opacity-60">Flexible / not set</span>
                  )}
                </li>
              </ul>
            </div>

            {submitted && (
              <div className="bg-emerald-100 border border-emerald-200 rounded-2xl p-5 text-sm text-emerald-900">
                <h4 className="font-semibold mb-1">
                  Thank you, {submitted.name}! 🌿
                </h4>
                <p>
                  We’ve received your request for{" "}
                  <span className="font-semibold">{submitted.service}</span>{" "}
                  {submitted.date && (
                    <>
                      on <span className="font-semibold">{submitted.date}</span>
                    </>
                  )}
                  . We’ll email you at{" "}
                  <span className="font-semibold">{submitted.email}</span> with
                  available time slots and a cost estimate soon.
                </p>
                {submitted.budget && (
                  <p className="mt-1">
                    You mentioned a budget of{" "}
                    <span className="font-semibold">{submitted.budget}</span>.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
