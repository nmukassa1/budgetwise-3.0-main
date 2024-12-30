function SubmitButton({pending, className}: {pending: boolean, className?: string}) {
    return ( 
      <>
      <button
        type="submit"
        className={`${className} w-full bg-secondary text-primary py-4 rounded-md mt-2`}
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
     );
}

export default SubmitButton;