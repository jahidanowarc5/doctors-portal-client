import React from 'react';
import appoinment from '../../assets/images/appointment.png'



const Contact = () => {
    return (
        <section style={{
            background:`url(${appoinment})`
        }}>
            <h3 className='text-xl text-primary font-bold text-center'>Contact us</h3>
            <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
            <div>
            <div className="card flex-shrink-0 w-full max-w-lg mx-auto">
      <div className="card-body">
        <div className="form-control mb-3">
          
          <input type="text" placeholder="email address" className="input input-bordered" />
        </div>
        <div className="form-control mb-3">
          
          <input type="text" placeholder="subject" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          
        <textarea className="textarea textarea-accent  h-[136px]" placeholder="Bio"></textarea>
          
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-fit mx-auto ">submit</button>
        </div>
      </div>
    </div>
            </div>
            
        </section>
    );
};

export default Contact;