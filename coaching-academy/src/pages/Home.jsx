import React from 'react';
import CourseCard from '../components/CourseCard';

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

const Home = () => {

  const programs = [
    {
      title: 'FSc Tuition',
      description: 'Comprehensive FSc Part-I & Part-II preparation with concept clarity and exam-focused teaching.',
    },
    {
      title: 'ETEA / NMDCAT / NUMS',
      description: 'Result-oriented entry test preparation with regular testing, analytics, and expert guidance.',
    },
    {
      title: '9th & 10th Classes',
      description: 'Strong academic foundation for board examinations with disciplined learning environment.',
    },
  ];

  const features = [
    {
      icon: '👨‍🏫',
      title: 'Highly Qualified Faculty',
      description: 'Experienced teachers dedicated to student success',
    },
    {
      icon: '📈',
      title: 'Proven Track Record',
      description: 'Consistent top results in board & competitive exams',
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Small batch sizes with individual attention',
    },
    {
      icon: '💡',
      title: 'Modern Teaching Methods',
      description: 'Smart classes, analytics & doubt-clearing sessions',
    },
  ];

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-28">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              Leading & Result-Oriented Coaching Institute
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
              Standard Coaching Academy
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Our Academy is a leading institute in the city with a modern and
              classy education system that prepares students to become
              confident, capable, and academically qualified.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                Apply for Admission
              </button>
              <button className="px-8 py-4 border border-gray-500 rounded-lg hover:bg-white/10 transition">
                Request Information
              </button>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-10">
            <h3 className="text-2xl font-bold mb-6">
              Why Choose Our Academy
            </h3>

            <ul className="space-y-5">
              <li className="border-l-4 border-black pl-4">
                Modern & disciplined education system
              </li>
              <li className="border-l-4 border-black pl-4">
                Qualified and experienced faculty
              </li>
              <li className="border-l-4 border-black pl-4">
                Regular tests, assessments & feedback
              </li>
              <li className="border-l-4 border-black pl-4">
                Board & entry-test focused preparation
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom grid md:grid-cols-3 gap-10 text-center">
          {[
            { value: '10+', label: 'Years of Excellence' },
            { value: '5,000+', label: 'Successful Students' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-extrabold mb-2">{stat.value}</h3>
              <p className="text-gray-400 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-5xl text-center">
          <SectionHeading
            subtitle="Who We Are"
            title="A Modern & Classy Education System"
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            Standard Coaching Academy is committed to providing a structured,
            disciplined, and modern education system. Our goal is to educate
            students not only for exams but to make them confident, capable,
            and qualified for future challenges.
          </p>
        </div>
      </section>

      {/* ================= PROGRAMS / WE OFFER ================= */}
      <section className="py-24">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Programs"
            title="What We Offer"
          />

          <div className="grid md:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-black text-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Strengths"
            title="Why Students Choose Us"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition"
              >
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
