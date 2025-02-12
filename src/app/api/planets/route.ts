
import { NextRequest, NextResponse } from "next/server";

let idSequence = 3;
let planets = [
  {
    id: 1,
    name: 'Mercúrio',
    description: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/800px-Mercury_in_color_-_Prockter07-edit1.jpg'
  },
  {
    id: 2,
    name: 'Vênus',
    description: 'Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4.6, o suficiente para produzir sombras.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/800px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg'
  }
];

export function GET(req:NextRequest) {
    return NextResponse.json(planets)
}

export async function POST(req:NextRequest) {
    const { name,description,imageUrl } = await req.json()

    const newPlanet = {
        id: idSequence++,
        name: name,
        description:description,
        imageUrl:imageUrl
    }

    planets.push(newPlanet)

    return NextResponse.json(newPlanet, { status:201 })
}

export async function PUT(req:NextRequest) {
    const { id, name,description, imageUrl  } = await req.json()

    const planetIntex = planets.findIndex(planet => planet.id === +id)

    if(planetIntex === -1 ) {
        return NextResponse.json({ error: "planeta nao encontrado "}, { status: 404 });
    }

    if(name) planets[planetIntex].name = name;
    if(description) planets[planetIntex].description = description;
    if(imageUrl) planets[planetIntex].imageUrl = imageUrl;

    return NextResponse.json(planets[planetIntex] );

}

export async function DELETE(req:NextRequest) {
    const { id } = await req.json();
    
    const planetIntex = planets.findIndex(planet => planet.id === +id );
    if (planetIntex === -1) {
        return NextResponse.json({ error: "planeta nao encontrado "}, { status: 404 });
    }

    const [deletePlante] = planets.splice(planetIntex,1)
    return NextResponse.json( {deletePlante} )
}