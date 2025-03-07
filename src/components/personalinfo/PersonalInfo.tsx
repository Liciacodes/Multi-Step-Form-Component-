import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface PersonalInfoProps {
  nextStep: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep(); 
  };

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 space-y-6"
      >
        <h3 className="text-[hsl(213, 96%, 18%)] text-2xl font-semibold">
          Personal Information
        </h3>
        <p className="text-gray-500">
          Please provide your name, email address, and phone number.
        </p>

        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9+()\s-]*$/,
                message: 'Enter a valid phone number',
              },
            })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
