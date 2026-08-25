import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(
        {
            message: "Howdy Edgar Guzman",
        }, {
            status: 200
        }
    );
}

export function PUT() {
    return NextResponse.json(
        {
            message: "Howdy Edgar Guzman",
        }, {
            status: 200
        }
    );
}

export function POST() {
    return NextResponse.json(
        {
            message: "Howdy Edgar Guzman",
        }, {
            status: 200
        }
    );
}

export function DELETE() {
    return NextResponse.json(
        {
            message: "Howdy Edgar Guzman",
        }, {
            status: 200
        }
    );
}
