import dbConnect from "@/libs/mongo"
import Message from "@/models/message"
import { NextResponse } from "next/server"

//Add a new message
export async function POST(request) {
    try {
        const { name, email, message } = await request.json()
        const trimmedName = name.trim()
        const trimmedEmail = email.trim()
        const trimmedMessage = message.trim()
        if (!trimmedName || !trimmedEmail || !trimmedMessage) {
            console.log("Name, email, and message are required.")
            return NextResponse.json(
                { message: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        await dbConnect()
        const newMessage = await Message.create({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
        })

        if (!newMessage) {
            return NextResponse.json({
                message: "Failed to send message !"
            },
                { status: 500 }
            )
        }
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