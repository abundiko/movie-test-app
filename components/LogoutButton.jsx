'use client'

import { logoutUser } from "@/actions/logout";

export default function LogoutBuutton() {
    async function logout(){
        await logoutUser();
        window.location.href = '/'
    }
    
    return (
        <button 
        onClick={logout}
        className="rounded-md bg-red-800 text-white p-2"
        >
            Log-out
        </button>
    );
}