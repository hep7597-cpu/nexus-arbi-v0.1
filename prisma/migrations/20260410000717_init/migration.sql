-- CreateEnum
CREATE TYPE "Chain" AS ENUM ('BASE');

-- CreateEnum
CREATE TYPE "Stablecoin" AS ENUM ('USDC', 'USDT');

-- CreateEnum
CREATE TYPE "TxStatus" AS ENUM ('PENDING', 'CONFIRMED', 'FAILED');

-- CreateEnum
CREATE TYPE "WithdrawStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'PAID');

-- CreateEnum
CREATE TYPE "RoundStatus" AS ENUM ('OPEN', 'SETTLED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'REVIEWER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "balanceUsdc" DECIMAL(36,18) NOT NULL DEFAULT 0,
    "balanceUsdt" DECIMAL(36,18) NOT NULL DEFAULT 0,
    "dailyQuotaUsed" INTEGER NOT NULL DEFAULT 0,
    "timesBalance" INTEGER NOT NULL DEFAULT 0,
    "quotaResetAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositOrder" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderNo" TEXT NOT NULL,
    "chain" "Chain" NOT NULL,
    "coin" "Stablecoin" NOT NULL,
    "toAddress" TEXT NOT NULL,
    "fromAddress" TEXT,
    "txHash" TEXT,
    "blockNumber" BIGINT,
    "amount" DECIMAL(36,18) NOT NULL,
    "confirmations" INTEGER NOT NULL DEFAULT 0,
    "requiredConf" INTEGER NOT NULL DEFAULT 10,
    "status" "TxStatus" NOT NULL DEFAULT 'PENDING',
    "confirmedAt" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "DepositOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCode" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT NOT NULL,
    "issuedFor" "Stablecoin" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "redeemedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "ServiceCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roundNo" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "status" "RoundStatus" NOT NULL DEFAULT 'OPEN',

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundEntry" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roundId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coin" "Stablecoin" NOT NULL,
    "amount" DECIMAL(36,18) NOT NULL,
    "profit" DECIMAL(36,18) NOT NULL,
    "settledAt" TIMESTAMP(3),

    CONSTRAINT "RoundEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WithdrawOrder" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderNo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chain" "Chain" NOT NULL,
    "coin" "Stablecoin" NOT NULL,
    "amount" DECIMAL(36,18) NOT NULL,
    "toAddress" TEXT NOT NULL,
    "kycRef" TEXT,
    "status" "WithdrawStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewNote" TEXT,
    "paidTxHash" TEXT,
    "paidAt" TIMESTAMP(3),

    CONSTRAINT "WithdrawOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");

-- CreateIndex
CREATE INDEX "User_walletAddress_idx" ON "User"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "DepositOrder_orderNo_key" ON "DepositOrder"("orderNo");

-- CreateIndex
CREATE UNIQUE INDEX "DepositOrder_txHash_key" ON "DepositOrder"("txHash");

-- CreateIndex
CREATE INDEX "DepositOrder_toAddress_idx" ON "DepositOrder"("toAddress");

-- CreateIndex
CREATE INDEX "DepositOrder_txHash_idx" ON "DepositOrder"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCode_code_key" ON "ServiceCode"("code");

-- CreateIndex
CREATE INDEX "ServiceCode_userId_idx" ON "ServiceCode"("userId");

-- CreateIndex
CREATE INDEX "ServiceCode_expiresAt_idx" ON "ServiceCode"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "Round_roundNo_key" ON "Round"("roundNo");

-- CreateIndex
CREATE INDEX "Round_status_idx" ON "Round"("status");

-- CreateIndex
CREATE INDEX "Round_endsAt_idx" ON "Round"("endsAt");

-- CreateIndex
CREATE INDEX "RoundEntry_userId_idx" ON "RoundEntry"("userId");

-- CreateIndex
CREATE INDEX "RoundEntry_roundId_idx" ON "RoundEntry"("roundId");

-- CreateIndex
CREATE UNIQUE INDEX "WithdrawOrder_orderNo_key" ON "WithdrawOrder"("orderNo");

-- CreateIndex
CREATE INDEX "WithdrawOrder_status_idx" ON "WithdrawOrder"("status");

-- CreateIndex
CREATE INDEX "WithdrawOrder_userId_idx" ON "WithdrawOrder"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- AddForeignKey
ALTER TABLE "DepositOrder" ADD CONSTRAINT "DepositOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceCode" ADD CONSTRAINT "ServiceCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundEntry" ADD CONSTRAINT "RoundEntry_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundEntry" ADD CONSTRAINT "RoundEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WithdrawOrder" ADD CONSTRAINT "WithdrawOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
