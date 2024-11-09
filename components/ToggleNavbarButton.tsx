
interface ToggleNavbarButtonProps {
    toggleSidebar: () => void;
    isVisible: boolean;
}

function ToggleNavbarButton({ toggleSidebar, isVisible }: ToggleNavbarButtonProps) {
    return (
        <button className="fixed top-4 right-4 p-2 bg-secondary text-primary rounded-lg" onClick={toggleSidebar}>
            {isVisible ? 'Hide' : 'Show'} Sidebar
        </button>
    );
}

export default ToggleNavbarButton;