export function renderTeam() {
  const team = [
    { name: 'Sk Roshanara', id: 'AP22211210013' },
    { name: 'Andy Mahima', id: 'AP22211210018' },
    { name: 'Suhana Sulthana', id: 'AP22211210008' },
    { name: 'Shiny Sankalpa', id: 'AP22211210022' },
    { name: 'Manideep Bheemisetty', id: 'AP22211210024' }
  ];

  return `
    <div class="bg-white py-16" id="team">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Our Team</h2>
          <p class="mt-4 text-lg text-gray-600">Meet the passionate individuals behind SheSecure</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${team.map(member => `
            <div class="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <div class="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl font-bold">${member.name.charAt(0)}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">${member.name}</h3>
              <p class="text-gray-600 mt-2">${member.id}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}