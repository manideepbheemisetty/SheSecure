export function renderProductCard(product) {
  return `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="md:grid md:grid-cols-2">
        <div class="relative h-full">
          <img 
            src="https://i.ibb.co/xHBpfH6/shesecure.jpg"
            alt="SheSecure ${product.name}"
            class="w-full h-full object-cover product-image"
          >
        </div>
        <div class="p-8">
          <div class="h-full flex flex-col">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">${product.name}</h3>
              <p class="text-gray-600 text-lg mb-6">${product.description}</p>
              <ul class="space-y-3 text-gray-600 mb-8">
                ${product.features.map(feature => `
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="mt-auto">
              <div class="border-t border-gray-200 pt-6 mb-6">
                <div class="flex justify-between items-center">
                  <div>
                    <span class="text-3xl font-bold text-gray-900">₹${product.price}</span>
                    <span class="text-gray-600 ml-2">${product.packSize}</span>
                  </div>
                </div>
              </div>
              <button class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 text-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}