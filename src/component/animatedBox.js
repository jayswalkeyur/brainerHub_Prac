import React, { useState } from 'react';
import 'animate.css';
import Button from './button';
import { FaDownload, FaRedo } from 'react-icons/fa';

function ApiStatus() {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    setStatus('loading');
    setData(null);
    setError(null);

    fetch('http://localhost:5000/api/data')
      .then((res) => res.json())
      .then((resData) => {
        if (resData.message) {
          setData(resData.message);
          setStatus('success');
        } else {
          setError(resData.error || 'Unknown error');
          setStatus('error');
        }
      })
      .catch(() => {
        setError('Failed to connect to API.');
        setStatus('error');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 px-4 space-y-6">
      <div className="text-center animate__animated animate__fadeInDown">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          <span className="text-black">Brainer</span>
          <span className="text-rose-600">Hub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-1 font-medium">
          convert idea into business 🚀
        </p>
      </div>

   
      <Button
        onClick={handleFetch}
        logo={<FaDownload className="text-white mr-2" />}
        className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition-all shadow-md"
      >
        Hit the Funny API 🎯
      </Button>


      {status === 'loading' && (
        <div className="flex items-center space-x-3 animate__animated animate__heartBeat animate__infinite">
          <div className="w-10 h-10 border-4 border-t-purple-600 border-purple-300 rounded-full animate-spin"></div>
          <span className="text-xl font-semibold text-purple-600">Summoning data... 🧙‍♂️</span>
        </div>
      )}

      {status === 'success' && (
        <div className="bg-green-200 border border-green-500 text-green-900 px-6 py-6 rounded-lg shadow animate__animated animate__bounce text-center max-w-lg">
          <h3 className="text-3xl font-bold mb-2">🎉 Success!</h3>
          <p className="text-xl">{data} 😎</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-200 border border-red-500 text-red-900 px-6 py-6 rounded-lg shadow animate__animated animate__wobble text-center max-w-lg">
          <h3 className="text-3xl font-bold mb-2">💥 Oops!</h3>
          <p className="text-xl">{error} 😢</p>
          <Button
            onClick={handleFetch}
            logo={<FaRedo className="text-white mr-2" />}
            className="bg-red-600 text-white mt-4 px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Try Again 🔄
          </Button>
        </div>
      )}
    </div>
  );
}

export default ApiStatus;
