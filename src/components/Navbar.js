export function renderNavbar() {
  return `
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-primary">SheSecure</h1>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-gray-600 hover:text-primary">About</a>
            <a href="#services" class="text-gray-600 hover:text-primary">Services</a>
            <a href="#team" class="text-gray-600 hover:text-primary">Team</a>
            <a href="#contact" class="text-gray-600 hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}