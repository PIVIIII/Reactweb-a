import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    if(!session||!session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createAt)
            
    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl"></div>
            <table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createAt.toString()}</td></tr>
            </tbody>
            </table>
        </main>
    )
}