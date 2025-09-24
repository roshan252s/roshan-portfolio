import dbConnect from "@/libs/mongo"
import Message from "@/models/message"
import { NextResponse } from "next/server"

//Add a new message
export async function POST(request) {
    const { name, email, message } = await request.json()

    await dbConnect()

    const newMessage = await Message.create({ name, email, message })
    if (!newMessage) {

        return NextResponse.json({ message: "Failed to send message" }, { status: 501 })
    }
    return NextResponse.json({ message: "Message sent successfully" }, { status: 201 })

}