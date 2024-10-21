import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="w-full">
        <h1 className="mb-2 text-[3rem] font-bold text-center text-brand">Budgetwise</h1>
        <h2 className="mb-6 text-center text-gray-600">Manage your finances with ease<br />Register or sign in and we'll get you started.</h2>
        
       <LoginForm />

        <div className="text-center">
          <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
          <p className="mt-4 text-xs text-gray-500">I accept Budgetwise <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}


