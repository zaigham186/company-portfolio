import React from 'react';
import FacultyCard from '../components/FacultyCard';

const SectionHeading = ({ subtitle, title }) => (
  <div className="text-center max-w-3xl mx-auto mb-14">
    <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
      {subtitle}
    </p>
    <h2 className="text-4xl lg:text-5xl font-extrabold">
      {title}
    </h2>
  </div>
);

const About = () => {
  const faculty = [
    {
      name: 'Dr. Ahmed Khan',
      subject: 'Mathematics',
      experience: '15+ years of teaching & academic leadership',
    },
    {
      name: 'Prof. Sarah Ali',
      subject: 'Physics',
      experience: '12+ years of concept-based instruction',
    },
    {
      name: 'Mr. Hassan Raza',
      subject: 'Chemistry',
      experience: '10+ years of board & entry-test preparation',
    },
    {
      name: 'Ms. Fatima Malik',
      subject: 'English',
      experience: '8+ years of language & communication training',
    },
  ];

  return (
    <main>

      {/* ================= PAGE HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
        <div className="container-custom max-w-5xl">
          <p className="uppercase tracking-widest text-gray-400 mb-4">
            Who We Are
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            About Standard Coaching Academy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A trusted institution dedicated to academic excellence, disciplined
            learning, and long-term student success through expert guidance and
            proven methodologies.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <SectionHeading
            subtitle="Our Journey"
            title="A Legacy of Excellence in Education"
          />

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Standard Coaching Academy was founded with a clear mission:
                to deliver structured, result-oriented education that empowers
                students to achieve their highest academic potential.
              </p>
              <p>
                Over the years, we have built a reputation for discipline,
                conceptual clarity, and consistent results in board and
                competitive examinations.
              </p>
              <p>
                Our approach combines modern teaching techniques with
                personalized mentorship, ensuring every student receives
                the guidance they need to excel.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: '15+', label: 'Years of Excellence' },
                { value: '5,000+', label: 'Students Mentored' },
                { value: '95%', label: 'Success Rate' },
                { value: '100%', label: 'Commitment to Quality' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl font-extrabold mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-gray-100">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Principles"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: '🎯',
                title: 'Result-Oriented',
                desc: 'Focused strategies aligned with academic outcomes',
              },
              {
                icon: '📚',
                title: 'Concept Clarity',
                desc: 'Strong foundations through deep understanding',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Faculty',
                desc: 'Highly qualified & experienced educators',
              },
              {
                icon: '🤝',
                title: 'Student-Centered',
                desc: 'Personal mentoring & individual attention',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACULTY ================= */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Strength"
            title="Meet Our Expert Faculty"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition"
              >
                <div className="text-5xl mb-5">👤</div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-400 mt-1">{member.subject}</p>
                <p className="text-gray-500 mt-4 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
