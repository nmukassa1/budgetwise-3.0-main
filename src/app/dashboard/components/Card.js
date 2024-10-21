export default function Card({ children, bgColor = 'bg-white', customClass = '' }) {

    return (
        <div className={`shadow-md rounded-lg p-4 grow min-h-[110px] ${bgColor} self-start ${customClass}`}>
           {children}
        </div>
    );
}