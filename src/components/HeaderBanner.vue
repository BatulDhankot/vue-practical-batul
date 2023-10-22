<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex items-center mx-7">
      <img src="src/assets/logo.svg" class="h-8 mr-3" alt="company Logo" />
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-4 pr-4 bg-orange-100 rounded-md">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-4 pr-4  hover:bg-orange-100 rounded-md font-medium">Shop</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-4 pr-4 hover:bg-orange-100 rounded-md font-medium">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-4 pr-4 hover:bg-orange-100 rounded-md font-medium">Contact</a>
      </li>
    </ul>
  </div>
  <div class="flex items-center md:order-2  px-10 gap-4">
      <button type="button" class="flex mr-3 text-sm md:mr-0" id="alert-button">
        <img class="w-7 h-7 rounded-full" src="src/assets/icons/alert.svg" alt="alert icon">
      </button>

      <button type="button" class="flex mr-3 text-sm md:mr-0" id="vector-button">
        <img class="w-7 h-7 rounded-full" src="src/assets/icons/vector.svg" alt="vector icon">
      </button>

      <button type="button" class="flex mr-3 text-sm md:mr-0" id="heart-button">
        <img class="w-7 h-7 rounded-full" src="src/assets/icons/heart.svg" alt="heart icon">
      </button>
      
      <button type="button" class="flex mr-3 text-sm md:mr-0" id="cart-button">
        <img class="w-8 h-8 rounded-full" src="src/assets/icons/cart.svg" alt="cart icon">
      </button>
  </div>
  
  </div>
</nav>

<section class="mx-auto p-10 px-0 md:p-10 md:px-0">
    <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <img src="src/assets/banner.jpg" class="h-screen w-screen">
        <div class="content bg-orange-100 p-2 pt-8 md:p-12 pb-12 lg:max-w-xl lg:px-14 md:max-w-4xl w-full lg:absolute  bottom-96 right-5 mr-8">
            <div class="flex justify-between font-bold text-sm">
                <p>New arrival</p>
            </div>
            <h2 class="text-6xl text-yellow-600 font-semibold mt-4 md:mt-1">Discover Our New Collection</h2>
            <p class="my-3 text-justify leading-relaxed">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci
                aliquid.</p>
            <button class="mt-2 md:mt-5 p-3 px-5 bg-yellow-600 text-white font-bold text-sm hover:bg-black">Buy Now</button>
        </div>
    </section>
  </section>
</template>