import { Users, Briefcase, DollarSign, Code, Megaphone, Package, Palette, Search, Brain, HeadphonesIcon } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nikita',
      role: 'Chief Executive Officer (CEO)',
      icon: Users,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Sharad',
      role: 'Chief Operating Officer (COO)',
      icon: Briefcase,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Jas',
      role: 'Chief Financial Officer (CFO)',
      icon: DollarSign,
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Darsh',
      role: 'Chief Technology Officer (CTO)',
      icon: Code,
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Shubhankar',
      role: 'Head of Data Science & AI',
      icon: Brain,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Mehul',
      role: 'Chief Marketing Officer (CMO)',
      icon: Megaphone,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Chirag',
      role: 'Chief Product Officer (CPO)',
      icon: Package,
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Shruti',
      role: 'Chief Design Officer (CDO)',
      icon: Palette,
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      name: 'Amos',
      role: 'Chief Research Officer (CRO)',
      icon: Search,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    
    {
      name: 'Ritwik',
      role: 'Head of Customer Experience & Support',
      icon: HeadphonesIcon,
      gradient: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary leaders driving innovation in indoor navigation technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${member.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <member.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*<div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for revolutionizing indoor navigation. 
              Explore career opportunities and help shape the future of location technology.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              View Open Positions
            </button>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Team;