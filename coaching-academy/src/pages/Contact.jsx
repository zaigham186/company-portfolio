import React, { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Enter a valid phone number';

    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      alert('Thank you! Our team will contact you shortly.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
        <div className="container-custom max-w-5xl">
          <p className="uppercase tracking-widest text-gray-400 mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Have questions about admissions, courses, or schedules?
            Our team is here to guide you.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 bg-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ================= FORM ================= */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {[
                  { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+92 300 1234567' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-semibold mb-2">
                      {field.label} *
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                        errors[field.name] ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Course */}
                <div>
                  <label className="block font-semibold mb-2">
                    Course Interested *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 ${
                      errors.course ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a course</option>
                    <option value="matric">9th & 10th (Matric)</option>
                    <option value="fsc-medical">FSc Pre-Medical</option>
                    <option value="fsc-engineering">FSc Pre-Engineering</option>
                    <option value="etea">ETEA Entry Test</option>
                    <option value="nmdcat">NMDCAT</option>
                    <option value="nums">NUMS</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full py-3 text-lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* ================= INFO ================= */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <h2 className="text-3xl font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: '📍',
                      title: 'Address',
                      text: 'Standard Coaching Academy Near Islamia College BRT Stop opposite Nimra Masjid, Peshawar, Pakistan',
                    },
                    {
                      icon: '📞',
                      title: 'Phone',
                      text: '+92 336 9124670',
                    },
                    {
                      icon: '📧',
                      title: 'Email',
                      text: 'azmat50917@gmail.com',
                    },
                    {
                      icon: '🕒',
                      title: 'Office Hours',
                      text: 'Mon–Fri: 9 AM – 6 PM\nSat: 10 AM – 4 PM',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">
                  Google Map Integration
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
