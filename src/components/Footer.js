export function renderFooter() {
  return `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold text-primary mb-4">SheSecure</h3>
            <p class="text-gray-400">Comfort & Protection for Every Day</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-gray-400 hover:text-primary">About Us</a></li>
              <li><a href="#services" class="text-gray-400 hover:text-primary">Services</a></li>
              <li><a href="#team" class="text-gray-400 hover:text-primary">Our Team</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <p class="text-gray-400">123 MG Road</p>
            <p class="text-gray-400">Vijayawada, Andhra Pradesh 520001</p>
            <p class="text-gray-400 mt-2">contact@shesecure.com</p>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-sm text-gray-400">© 2024 SheSecure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}