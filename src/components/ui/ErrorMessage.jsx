const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center py-10 text-red-500">
      {message || "Something went wrong."}
    </div>
  );
};

export default ErrorMessage;
