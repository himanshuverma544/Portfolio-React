import React from "react";

import {Divider} from "./RepeatedElements";

const ContactSection = ({heading, form}) => (
  <section className="page-section" id="contact">
    <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{heading}</h2>
        {/* <!-- Icon Divider--> */}
        <Divider/>
        {/* <!-- Contact Section Form--> */}
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    {/* <!-- Name input--> */}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="name" type="text" placeholder={form.placeholder.name} data-sb-validations="required" />
                        <label htmlFor="name">{form.label.name}</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">{form.feedback.name}</div>
                    </div>
                    {/* <!-- Email address input--> */}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="email" type="email" placeholder={form.placeholder.email} data-sb-validations="required,email" />
                        <label htmlFor="email">{form.label.email}</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">{form.feedback.email.required}</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">{form.feedback.email.notVaild}</div>
                    </div>
                    {/* <!-- Phone number input--> */}
                    <div className="form-floating mb-3">
                        <input className="form-control" id="phone" type="tel" placeholder={form.placeholder.phone} data-sb-validations="required" />
                        <label htmlFor="phone">{form.label.phone}</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">{form.feedback.phone}</div>
                    </div>
                    {/* <!-- Message input--> */}
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" type="text" placeholder={form.placeholder.message} style={{height: "10rem"}} data-sb-validations="required"></textarea>
                        <label htmlFor="message">{form.label.message}</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">{form.feedback.message}</div>
                    </div>
    
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">{form.submissionMsg.success}</div>
                        </div>
                    </div>
                    {/* <!-- Submit error message--> */}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">{form.submissionMsg.error}</div></div>
                    {/* <!-- Submit Button-->  */}
                    <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">{form.label.btn}</button>
                </form>
            </div>
        </div>
    </div>
</section>
);

export default ContactSection;