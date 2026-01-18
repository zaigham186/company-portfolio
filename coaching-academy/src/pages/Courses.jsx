import React from 'react';
import CourseCard from '../components/CourseCard';

const SectionHeading = ({ subtitle, title }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
      {subtitle}
    </p>
    <h2 className="text-4xl lg:text-5xl font-extrabold">
      {title}
    </h2>
  </div>
);

const Courses = () => {

  const courses = [
    {
      title: '9th & 10th (Matric)',
      description:
        'Complete board-oriented preparation with strong conceptual clarity, regular testing, and disciplined study environment.',
      duration: '1 Academic Year',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      title: 'FSc Pre-Medical',
      description:
        'Biology, Chemistry, and Physics preparation aligned with board exams and medical entry test requirements.',
      duration: '2 Years',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      title: 'FSc Pre-Engineering',
      description:
        'Mathematics, Physics, and Chemistry with exam-focused teaching and problem-solving mastery.',
      duration: '2 Years',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      title: 'ETEA Entry Test',
      description:
        'Structured preparation for engineering and medical colleges with MCQs practice and performance analysis.',
      duration: '4–6 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      title: 'NMDCAT',
      description:
        'Comprehensive NMDCAT preparation including Biology, Chemistry, Physics, and critical thinking.',
      duration: '4–6 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      title: 'NUMS Entry Test',
      description:
        'Focused preparation for NUMS with exam-based syllabus coverage and test simulations.',
      duration: '4 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      title: 'Mathematics (Special Classes)',
      description:
        'Advanced mathematics classes for board exams and competitive tests.',
      duration: '6 Months',
      mode: 'Online & On-Campus',
      batch: 'Morning & Evening',
    },
    {
      title: 'Biology (Medical Focus)',
      description:
        'Concept-driven biology classes covering botany, zoology, and human physiology.',
      duration: '6 Months',
      mode: 'On-Campus',
      batch: 'Morning & Evening',
    },
  ];

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
        <div className="container-custom max-w-5xl">
          <p className="uppercase tracking-widest text-gray-400 mb-4">
            Academic Programs
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            We offer structured, exam-focused academic programs designed to
            build strong concepts, confidence, and consistent academic success.
          </p>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-24 bg-gray-100">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Comprehensive Academic Programs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BATCH INFO ================= */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Flexible Scheduling"
            title="Batch Timings"
          />

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                icon: '🌅',
                title: 'Morning Batch',
                time: '8:00 AM – 12:00 PM',
              },
              {
                icon: '🌆',
                title: 'Evening Batch',
                time: '4:00 PM – 8:00 PM',
              },
              {
                icon: '📅',
                title: 'Weekend Batch',
                time: 'Saturday & Sunday',
              },
            ].map((batch, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{batch.icon}</div>
                <h3 className="text-xl font-bold mb-2">{batch.title}</h3>
                <p className="text-gray-600">{batch.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-6">
            Start Your Academic Journey With Us
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Join Standard Coaching Academy and experience a disciplined,
            modern, and result-oriented education system.
          </p>
          <button className="px-10 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            Apply for Admission
          </button>
        </div>
      </section>

    </main>
  );
};

export default Courses;
