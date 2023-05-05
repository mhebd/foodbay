import React from "react";
import BreadCrumb from "../../reusable/BreadCrumb";
import PageHeading from "../../reusable/PageHeading";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <BreadCrumb>
        <Link className='breadcrumb-item active'>Contact</Link>
      </BreadCrumb>
      <PageHeading heading='Contact Us' />

      <div className='google-map-wrapper'>
        <div className='container'>
          <div className='google-map'>
            Google maps
            {/* <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5158.28256296964!2d89.12454742827471!3d23.90888113868724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1580059629061!5m2!1sen!2sbd'
              width='100%'
              height='400'
              frameborder='0'
              style='border:0;'
              allowfullscreen=''
            /> */}
          </div>
        </div>
      </div>

      <PageHeading heading='Leave a message' />

      <div class='contact-form-wrapper'>
        <div class='container'>
          <div class='contact-form'>
            <form action='#' class='form contact'>
              <div class='form-group'>
                <div class='row'>
                  <div class='col-md-6 mb-3 mb-md-0'>
                    <input
                      type='text'
                      class='first-name form-control'
                      placeholder='Your First Name'
                    />
                    <small>Example: Mehedi</small>
                  </div>
                  <div class='col-md-6'>
                    <input
                      type='text'
                      class='last-name form-control'
                      placeholder=' Your Last Name'
                    />
                    <small>Example: Hassan</small>
                  </div>
                </div>
              </div>

              <div class='form-group'>
                <input
                  type='email'
                  name=''
                  id=''
                  class='form-control email'
                  placeholder='Your Email'
                />
                <small>Example: something@nothing.com</small>
              </div>

              <div class='form-group'>
                <input
                  type='text'
                  name=''
                  id=''
                  class='form-control phone-number'
                  placeholder='Your Phone Number'
                />
                <small>Example: +8801XXXXXXXXX</small>
              </div>

              <div class='form-group'>
                <input
                  type='text'
                  name=''
                  id=''
                  class='form-control subject'
                  placeholder='Your Subject'
                />
                <small>Example: A Business Deal</small>
              </div>

              <div class='form-group'>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  class='message form-control'
                  placeholder='Your Message'></textarea>
                <small>Example: Something write here!!</small>
              </div>

              <div class='form-group'>
                <input
                  type='submit'
                  value='Send Message'
                  class='btn btn-success submit-btn'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
