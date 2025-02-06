
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl.clone();

  if (!token && url.pathname.startsWith("/mydashboard")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }


  if (token && token.role === "admin" && url.pathname === "/mydashboard") {
    return NextResponse.next();
  }


  if (token && url.pathname.startsWith("/mydashboard") && token.role !== "admin") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mydashboard/:path*"], 
};













// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const url = req.nextUrl.clone();

//   if (!token && url.pathname.startsWith("/admin")) {
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }


//   if (token && token.role === "admin" && url.pathname === "/admin") {
//     return NextResponse.next();
//   }


//   if (token && url.pathname.startsWith("/admin") && token.role !== "admin") {
//     url.pathname = "/";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"], 
// };
