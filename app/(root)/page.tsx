import Login from "@/components/auth/login/LoginForm";

export default function Home() {
  return (
    <div className="mobile-container flex justify-center items-center h-screen overflow-hidden">

      <div className="w-full">
        {/* <h1 className="mb-2 text-[2rem] font-bold text-center text-brand">Budgetwise</h1> */}
        <h1 className="mb-2 text-[2rem] font-bold text-center text-primary">Budgetwise</h1>
        <h2 className="mb-6 text-center text-gray-600">Get back on top of your finances<br />Register or sign in and we&apos;ll get you started.</h2>
        
       <Login />

        <div className="text-center">
          <p className="text-sm text-gray-600">Don&apos;t have an account? <a href="#" className="text-blue-500">Sign up</a></p>
          <p className="mt-4 text-xs text-gray-500">I accept Budgetwise <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}


