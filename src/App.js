import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally Printing The Value Of Form Data");
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Utkarsh"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Srivastava"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="utkarsh123@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-gray-700 font-bold mb-2">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="A-313"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Gorakhpur"
            value={formData.city}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State / Province</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Uttar Pradesh"
            value={formData.state}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="263010"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="text-lg font-bold text-blue-500 mb-2">By Email</legend>

          <div className="flex items-start mb-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1 mr-2"
            />
            <div>
              <label htmlFor="comments" className="font-bold text-gray-700">Comments</label>
              <p className="text-gray-600">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex items-start mb-2">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mt-1 mr-2"
            />
            <div>
              <label htmlFor="candidates" className="font-bold text-gray-700">Candidates</label>
              <p className="text-gray-600">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex items-start mb-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1 mr-2"
            />
            <div>
              <label htmlFor="offers" className="font-bold text-gray-700">Offers</label>
              <p className="text-gray-600">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-lg font-bold text-blue-500 mb-2">Push Notifications</legend>
          <p className="text-gray-600 mb-2">These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything" className="text-gray-700">Everything</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail" className="text-gray-700">Same As Email</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notification"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing" className="text-gray-700">No Push Notifications</label>
          </div>
        </fieldset>

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
