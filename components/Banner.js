export default function Banner() {
    return (
    <div className="bg-[url('/cat-banner.jpeg')] bg-cover h-[350px] p-20 text-white flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-4">
        <h1>Welcome to Our Website</h1>
        <p style={{ maxWidth: "400px", width: "100%" }}>
          A place where you can find cute kitties and learn how to take proper care of them. Discover what foods are healthy for cats, such as high-protein meals and safe treats, and what to avoid like chocolate, onions, or overly salty foods. Learn about daily care, grooming, and how to keep your cat active and happy. You can also explore adoption options, understand cat behavior, and get tips to create a safe and comfortable environment for your furry friend.
        </p>
      </div>
    </div>
    );
}