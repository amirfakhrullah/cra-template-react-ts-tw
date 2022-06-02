function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <header className="border border-gray-600 rounded-lg p-10">
        <h1 className="text-center text-2xl font-bold text-gray-300 mb-5">
          CRA-TEMPLATE-REACT-TS-TW
        </h1>
        <p className="text-gray-400">
          Edit{" "}
          <code className="bg-blue-900 p-1 mx-2 rounded-md">'src/App.tsx'</code>{" "}
          and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-600 hover:bg-gray-700 py-2 px-3 text-center mt-5 rounded-md text-gray-300 font-bold">
            Learn React
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
