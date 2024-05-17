import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import logo2 from '../../../src/Assets/logo2.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    console.log('Form submitted:', formData);
    navigate(-1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=''>
      <div className='bg-gray-500 w-full h-svh'>
        <div className='flex justify-center'>
          <div className='bg-gray-800 w-full md:rounded-lg md:py-10 md:mx-6 md:top-[15%] lg:top-[20%] absolute md:px-6 md:w-fit m-auto h-full md:h-fit '>
            <div className='md:grid grid-cols-2 md:max-w-fit gap-10 m-auto'>
              <div className='text-center pt-5'>
                <div className='flex justify-center'>
                  <img src={logo2} alt="" className='w-[100px]' />
                </div>
                <p className='pb-4 text-gray-200 '>Create your account. <br className='md:hidden' /> It's free and only takes a minute</p>
              </div>
              <div className='px-3 max-w-[400px] m-auto'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Name'
                      className='w-full mt-3 py-2 bg-gray-500 text-gray-200 placeholder:text-gray-200 outline-none  border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full pl-5' />
                  </div>
                  <div className='pt-4'>
                    <input type="tel"
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder='Mobile No'
                      className='w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full' />
                  </div>
                  <div className='pt-4'>
                    <div className="relative">
                      <input type={showPassword ? "text" : "password"}
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full' />
                      <button type="button"
                        className="absolute  top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                        onClick={togglePasswordVisibility}>
                        {showPassword ? <RiEyeOffFill />   : <RiEyeFill />}
                      </button>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <div className="relative">
                      <input type={showPassword ? "text" : "password"}
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='Confirm Password'
                        className='w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none   border border-gray-400 focus:text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-700 rounded-full' />
                      <button type="button"
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                        onClick={togglePasswordVisibility}>
                        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                      </button>
                    </div>
                    {passwordError && <p className="text-gray-200 text-sm">{passwordError}</p>}
                  </div>
                  <div className='pt-4'>
                    <input type="checkbox"
                      required
                    />
                    <label htmlFor=" " className='pl-2 text-gray-200'>I accept the Terms of Use and Privacy Policy</label>
                  </div>
                  <div className='pt-6'>
                    <button type="submit" className='bg-gray-100 hover:text-white hover:bg-gray-600 py-2 w-full rounded-full'>SIGN UP</button>
                    <p className='pt-3 text-center text-gray-200'>Already a member?<a href="/" className='underline'>Sign in</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
