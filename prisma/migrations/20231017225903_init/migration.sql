-- CreateTable
CREATE TABLE "ActivityAction" (
    "id" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL,
    "amountParticipants" INTEGER NOT NULL,

    CONSTRAINT "ActivityAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAction" (
    "userId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "timeSpeaking" INTEGER NOT NULL,

    CONSTRAINT "UserAction_pkey" PRIMARY KEY ("userId","activityId")
);
