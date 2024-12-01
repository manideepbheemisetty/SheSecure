export function renderContact() {
  return `
    <div class="bg-gray-50 py-16" id="contact">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p class="mt-4 text-lg text-gray-600">Get in touch with our team</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p class="text-gray-600">+91 1234567890</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p class="text-gray-600">contact@shesecure.com</p>
          </div>
          <div class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p class="text-gray-600">123 MG Road<br>Vijayawada, Andhra Pradesh 520001</p>
          </div>
        </div>
      </div>
    </div>
  `;
}