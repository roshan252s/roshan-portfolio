import dbConnect from "@/libs/mongo"
import Message from "@/models/message"
import { NextResponse } from "next/server"

//Add a new message
export async function POST(request) {
    try {
        const { name, email, message } = await request.json()
        if (!name || !email || !message) {
            console.log("Name, email, and message are required.")
            return NextResponse.json(
                { message: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        await dbConnect()
        await Message.create({ name, email, message })
        console.log("Message sent successfully.");
        return NextResponse.json({
            message: "Message sent successfully !"
        },
            { status: 201 }
        )
    } catch (error) {
        console.log(error.message)
        return NextResponse.json(
            {
                error: error.message || "Unknown error",
                message: "Failed to send message"
            },
            { status: 500 }
        );
    }


}