import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


  

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, materials, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        materials, 
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("ERROR CREATING PROJECT: ", error);
    return NextResponse.json({ error: "Error creating project", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const projects = await prisma.project.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.log("ERROR GETTING PROJECTS: ", error);
    return NextResponse.json({ error: "Error updating project", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth();
    const { id, title, description, materials, date, isCompleted } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const project = await prisma.project.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        materials,
        date,
        isCompleted,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("ERROR UPDATING PROJECT: ", error);
    return NextResponse.json({ error: "Error Updating project", status: 500 });
  }
}
