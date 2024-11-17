import { deleteSession } from "@/lib/session";
import { LogoutOutlined } from "@mui/icons-material";

function Logout() {
    return ( 
        <form action={async () => {
            // "use server"
            // await deleteSession()
        }}>
            <button className="sidebar-item text-gray-200 hover:bg-secondary hover:text-primary w-full">
                <LogoutOutlined sx={{ fontSize: '1.2rem' }} />
                <span className="mx-4 font-medium">Logout</span>
            </button>
        </form>
     );
}

export default Logout;