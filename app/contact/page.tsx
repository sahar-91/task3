import Banner from "@/components/Banner";
import Form from "@/components/form";

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "message", type: "textarea", placeholder: "Message" }
]; 

export default function Contact() {
  return (
    <>
      <Banner
        title="Contact Us"
        description="Have questions or want to reach us? Send a message!"
        bgImage="/cat-banner.jpeg"
      />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <Form fields={fields} buttonText="Send" />
        </div>
        <div className="text-center mt-8 text-gray-700">
          <p>Email: info@catsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Cat Street, Miawtown</p>
        </div>
      </div>
    </>
  );
}