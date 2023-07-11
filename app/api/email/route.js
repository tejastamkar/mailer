import { configDotenv } from "dotenv";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
// port: 2525,ailer";
export async function POST() {
  const user = process.env.NODEMAILER_USERNAME;
  const password = process.env.NODEMAILER_PASSWORD;

  //   const transport = nodemailer.createTransport("SMTP", {
  //     service: "Gmail",
  //     auth: {
  //       user: user,
  //       pass: password,
  //     },
  //   });

  var transport = nodemailer.createTransport(
    `smtps://${user}:${password}@smtp.gmail.com`
  );
  const mailOption = {
    from: "abc@gmail.com",
    to: "abc@gmail.com",
    subject: "test",
    text: "testing more",
  };
  const mailRes = await transport.sendMail(mailOption);

  return NextResponse.json(mailRes);
}
