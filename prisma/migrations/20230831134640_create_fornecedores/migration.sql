-- CreateTable
CREATE TABLE "fornecedores" (
    "id" SERIAL NOT NULL,
    "razao" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email2" TEXT,
    "nome2" TEXT,
    "produto" TEXT NOT NULL,

    CONSTRAINT "fornecedores_pkey" PRIMARY KEY ("id")
);
