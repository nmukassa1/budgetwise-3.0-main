import Login from "@/components/auth/login/LoginForm";

export default function Home() {
  return (
    <div className="mobile-container flex justify-center items-center h-screen overflow-hidden">

      <div className="w-full text-secondary">
        {/* <h1 className="mb-2 text-[2rem] font-bold text-center text-brand">Budgetwise</h1> */}
        <h1 className="mb-2 text-[2rem] font-bold text-center">Budgetwise</h1>
        <h2 className="mb-6 text-center">Get back on top of your finances<br />Register or sign in and we&apos;ll get you started.</h2>
        
       <Login />

        <div className="text-center">
          <p className="text-sm ">Don&apos;t have an account? <a href="#" className="text-blue-500">Sign up</a></p>
          <p className="mt-4 text-xs">I accept Budgetwise <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}


