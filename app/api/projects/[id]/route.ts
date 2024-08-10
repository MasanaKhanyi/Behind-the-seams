import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";



export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const project = await prisma.project.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("ERROR DELETING PROJECT: ", error);
    return NextResponse.json({ error: "Error deleting project", status: 500 });
  }
}



export async function PUT(req: Request) {
  try {
    // Authenticate user
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    // Parse the request body
    const { id, title, description, materials, date, isCompleted } = await req.json();

    // Update the project
    const project = await prisma.project.update({
    
      where: { id: id as string },
      data: { title, description, materials, date, isCompleted },
    });

    // Return the updated project
    return NextResponse.json(project);
  } catch (error) {
    // Log and return the error
    console.error("ERROR UPDATING PROJECT: ", error);
    return NextResponse.json({ error: "Error Updating project", status: 500 });
  }
}