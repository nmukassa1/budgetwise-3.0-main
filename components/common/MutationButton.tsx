"use client"
function MutationButton({openSpecificDraw}: {openSpecificDraw?: (open: boolean) => void}) {
    function handleClick() {
        openSpecificDraw && openSpecificDraw(true);
    }
    return (
        <button onClick={handleClick} className='h-[50px] w-[50px] rounded-full border-2 border-black self-end text-2xl'>+</button>
    )
}

export default MutationButton;