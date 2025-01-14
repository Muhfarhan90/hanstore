/* eslint-disable react/prop-types */

const Button = ({ btnName }) => {
  return <button className="py-4 px-12 text-base bg-red-500 text-white rounded-md hover:bg-red-400">{btnName}</button>;
};

export default Button;
