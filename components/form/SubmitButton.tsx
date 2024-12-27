function SubmitButton({pending}: {pending: boolean}) {
    return ( 
      <div className="mt-4">
      <button
        type="submit"
        className="w-full bg-secondary text-primary py-4 rounded-md mt-2"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
     );
}

export default SubmitButton;