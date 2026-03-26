export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[palevioletred] mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg">Have questions or want to reach us? Send a message!</p>
      </div>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]" />
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]" />
          <textarea placeholder="Message" rows={5} className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[palevioletred]"></textarea>
          <button type="submit" className="px-4 py-2 bg-[palevioletred] cursor-pointer text-white rounded-lg hover:scale-105 transform transition-transform duration-300">Send</button>
        </form>
      </div>
      <div className="text-center mt-8 text-gray-700">
        <p>Email: info@catsite.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Cat Street, Miawtown</p>
      </div>
    </div>
  );
}