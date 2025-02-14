import { MiddlewareConfig, NextRequest } from "next/server";

export const config:  MiddlewareConfig={
    matcher: ["/"]
}

export default function middleware(req:NextRequest) {
    console.log("middleware executado")
}