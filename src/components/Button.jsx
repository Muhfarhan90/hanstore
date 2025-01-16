/* eslint-disable react/prop-types */

const Button = ({ btnName, jenis, fungsi = null }) => {
  return jenis === "primary" ? (
    <button
      className="py-4 px-12 text-base bg-red-500 text-white rounded-md hover:bg-red-400"
      onClick={fungsi}
    >
      {btnName}
    </button>
  ) : (
    <button
      className="py-4 px-12 text-base bg-white text-red-500 border border-red-500 rounded-md hover:bg-red-100"
      onClick={fungsi}
    >
      {btnName}
    </button>
  );
};

export default Button;
