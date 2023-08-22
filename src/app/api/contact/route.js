import Contact from "@/models/contact";
import dbConnect from "@/utils/dbConn";
import { NextResponse } from "next/server";


export  const POST=async(req,res)=>{
    try {
          const body = await req.json();
          await dbConnect();
          await Contact.create(body);
          return NextResponse.json({
               message:"Message Sent Successfully",
          },{
            status:200
          }
          );


    } catch (error) {
            return NextResponse.json({
                message:"Server Error, Please Try again",
            },{
                status:500
            }
            );       
    }
}