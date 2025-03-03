import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params } : { params: { id: string}}) => {
    try {
        await connectDb();
        const task = await TaskModel.findById(params.id);

        if (!task) {
            return NextResponse.json({ message: "Task not exist" }, {status: 404 });
        }

        return NextResponse.json({ message: "Success get task by id", task});
    } catch (error) {
        console.log("failed get task by id");
        return NextResponse.json({ message: "failed get task by id"}, { status: 500 });
    }
};

export const dynamic = "force-dynamic";