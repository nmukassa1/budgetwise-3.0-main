import UserInfo from "./UserInfo";

function Footer() {
    return ( 
        <div className="bg-primary text-primary mt-5 text-[.8rem] text-white">
            <div className="mobile-container flex justify-between py-2">
                <button>Logout</button>
                <span>Created by Ny</span>
            </div>
        </div>
     );
}

export default Footer;