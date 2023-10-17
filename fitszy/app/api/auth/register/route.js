import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
// import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { username, email, password, name, weight, age } = await request.json();

    const foundUser = await prisma.User.findFirst({
      where: {
        email: email,
      },
    });

    if (foundUser) {
      return new Response("User with this email already exist", {
        status: 401
      });

    } else {
      try {
        const hashedPassword = await hash(password, 10);

        const user = await prisma.User.create({
          data: {
            username,
            password: hashedPassword,
            email,
          },
        });

        if (user) {
          return new Response(JSON.stringify({
            status: 200,
            user
          }));

        } else {
          return new Response("User was not create. Please create a account", {
            status: 500
          });
        }
      } catch (error) {
        return new Response(error, {
          status: 500,
         
        });
      }
    }
  } catch (error) {
    return new Response("Error", {
      status: 500,
    })
  }
};

// export { signup as POST }
