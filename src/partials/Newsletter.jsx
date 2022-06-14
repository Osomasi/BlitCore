import React from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const SERVICE_ID = "service_cx4sjvu";
const TEMPLATE_ID = "template_t5lm7m8";
const USER_ID = "W_2SHf331gtm6yJqv";

function Newsletter() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
         icon: 'success',
         title: 'Thank you for Subscribing!',
         text: 'You will now recieve our latest news and promotions!',
         showConfirmButton: true,
         confirmButtonColor: '#348FF3',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-blitblue-100 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden mt-10" data-aos="zoom-y-out">

            {/* Background illustration */}


              {/* CTA content */}
                <h3 className="h3 text-white mb-2 text-center text-blitblue-400">Powering your business</h3>
                <p className="text-gray-300 text-lg mb-6 text-center">Subscribe to our news letter to recieve updates and promotions on our services</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto"  onSubmit={handleOnSubmit}>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md">
                    <input required type="email" name="user_email" className="w-300 rounded-lg form-input appearance-none bg-blitblue-400 border-blitblue-400 focus:border-gray-600 px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-blittext-100" placeholder="Your email…" aria-label="Your email…" />
                    <button type="submit" className="rounded-full btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3 text-center">Get your free consultaion now!</p>
                </form>
              </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
