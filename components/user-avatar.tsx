import Image from "next/image";
import { auth } from "../auth";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";

export default async function UserAvatar() {
    const session = await auth();

    if (!session || !session.user) return <SignIn />;

    return (
        <div className="flex gap-2">
            <Image
                src={session.user.image || ""}
                alt="User Avatar"
                width={40}
                height={40}
            />
            <SignOut />
        </div>
    );
}
