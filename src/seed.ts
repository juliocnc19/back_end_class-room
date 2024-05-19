import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  const genderMan = await prisma.gender.upsert({
    where:{ gender:"man" },
    update:{},
    create:{
      gender:"man"
    }
  });
  
  const genderWoman = await prisma.gender.upsert({
    where: { gender: 'woman' },
    update: {},
    create: {
      gender: 'woman',
    },
  });

  const genderOther = await prisma.gender.upsert({
    where: { gender: 'other' },
    update: {},
    create: {
      gender: 'other',
    },
  });

  const statusLate = await prisma.status.upsert({
    where: { status: "late"},
    update:{},
    create:{
      status:"late"
    }
  })

  const statusOpen = await prisma.status.upsert({
    where: { status: "open"},
    update:{},
    create:{
      status:"open"
    }
  })

  const statusFinished = await prisma.status.upsert({
    where: { status: "finished"},
    update:{},
    create:{
      status:"finished"
    }
  })

  const areaScience = await prisma.area.upsert({
    where: { area: "science"},
    update:{},
    create:{
      area:"science"
    }
  })

  const areaMath = await prisma.area.upsert({
    where: { area: "math"},
    update:{},
    create:{
      area:"math"
    }
  })

  const areaLanguage = await prisma.area.upsert({
    where: { area: "language"},
    update:{},
    create:{
      area:"language"
    }
  })

  const areaBiology = await prisma.area.upsert({
    where: { area: "biology"},
    update:{},
    create:{
      area:"biology"
    }
  })

  const areaCoding = await prisma.area.upsert({
    where: { area: "coding"},
    update:{},
    create:{
      area:"coding"
    }
  })

  const areaOther = await prisma.area.upsert({
    where: { area: "other"},
    update:{},
    create:{
      area:"other"
    }
  })

  console.log('Genders seeding completed:', {
    genderMan,
    genderWoman,
    genderOther,
    statusOpen,
    statusLate,
    statusFinished,
    areaScience,
    areaMath,
    areaBiology,
    areaLanguage,
    areaCoding,
    areaOther
  });

}

await main()