export function renderServices() {
  const services = [
    {
      title: "Eco-Friendly Menstrual Products",
      description: "Sustainable and biodegradable sanitary products that are kind to both you and the environment",
      icon: "🌱"
    },
    {
      title: "Educational Workshops",
      description: "Interactive sessions on menstrual health, hygiene, and sustainable practices",
      icon: "👥"
    },
    {
      title: "Community Outreach",
      description: "Programs focused on breaking taboos and promoting menstrual awareness in rural areas",
      icon: "🤝"
    }
  ];

  return `
    <div class="bg-white py-16" id="services">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Our Services</h2>
          <p class="mt-4 text-lg text-gray-600">Empowering through education and sustainable solutions</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${services.map(service => `
            <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300 text-center">
              <div class="text-4xl mb-4">${service.icon}</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">${service.title}</h3>
              <p class="text-gray-600">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}