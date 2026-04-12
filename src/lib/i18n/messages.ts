export type Locale = 'zh' | 'en'

type Messages = {
  nav: {
    dashboard: string
    rounds: string
    deposit: string
    withdraw: string
    me: string
    admin: string
  }
  top: { announcement: string }
  actions: { support: string; connectWallet: string }
  wallet: {
    title: string
    address: string
    chain: string
    goRounds: string
    onlyBaseSepolia: string
    wrongNetwork: string
  }
  rounds: {
    enter: string
  }
  me: { title: string; kyc: string; kycHint: string }
  support: { title: string; openTelegram: string }
  admin: {
    title: string
    loginTitle: string
    email: string
    password: string
    signIn: string
    signingIn: string
    loginHint: string
    quickLinks: string
    withdrawalList: string
    testData: string
    seedHint: string
    seedButton: string
    seeding: string
    seedOk: string
    withdrawalsTitle: string
    withdrawalsHint: string
    backToAdmin: string
    orderNo: string
    coin: string
    amount: string
    to: string
    status: string
    view: string
    open: string
    loading: string
    noRecords: string
    withdrawalsNote: string
  }
}

const zh: Messages = {
  nav: {
    dashboard: '总览',
    rounds: '轮次',
    deposit: '充值',
    withdraw: '提现',
    me: '我的',
    admin: '后台',
  },
  top: { announcement: '公告' },
  actions: { support: '客服', connectWallet: '连接钱包' },
  wallet: {
    title: '钱包',
    address: '地址',
    chain: '网络',
    goRounds: '去 60 秒轮次',
    onlyBaseSepolia: '仅支持 Base Sepolia',
    wrongNetwork: '网络不对',
  },
  rounds: {
    enter: '进入 60 秒轮次',
  },
  me: { title: '我的', kyc: 'KYC 认证', kycHint: '提现前需要完成 KYC。' },
  support: { title: '客服', openTelegram: '前往 Telegram 客服' },
  admin: {
    title: '后台',
    loginTitle: '后台登录',
    email: '邮箱',
    password: '密码',
    signIn: '登录',
    signingIn: '登录中…',
    loginHint: 'v0.1 使用环境变量 ADMIN_EMAIL / ADMIN_PASSWORD_HASH 做最小可用登录。',
    quickLinks: '快捷入口',
    withdrawalList: '提现审核列表',
    testData: '测试数据',
    seedHint: '一键插入 2 条 WithdrawOrder 方便验收。',
    seedButton: 'Seed 2 WithdrawOrders',
    seeding: 'Seeding…',
    seedOk: 'OK: created',
    withdrawalsTitle: '提现审核',
    withdrawalsHint: '审核通过后你手动链上打款，后台记录 tx hash。',
    backToAdmin: '返回后台首页',
    orderNo: 'OrderNo',
    coin: 'Coin',
    amount: 'Amount',
    to: 'To',
    status: 'Status',
    view: 'View',
    open: '打开',
    loading: '加载中…',
    noRecords: '暂无记录。',
    withdrawalsNote: '备注：当前已接入数据库（WithdrawOrder）。',
  },
}

const en: Messages = {
  nav: {
    dashboard: 'Dashboard',
    rounds: 'Rounds',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    me: 'Me',
    admin: 'Admin',
  },
  top: { announcement: 'Announcement' },
  actions: { support: 'Support', connectWallet: 'Connect Wallet' },
  wallet: {
    title: 'Wallet',
    address: 'Address',
    chain: 'Chain',
    goRounds: 'Go to 60s Rounds',
    onlyBaseSepolia: 'Only Base Sepolia is supported',
    wrongNetwork: 'Wrong network',
  },
  rounds: {
    enter: 'Enter 60s Rounds',
  },
  me: { title: 'Me', kyc: 'KYC Verification', kycHint: 'KYC is required before withdrawals.' },
  support: { title: 'Customer Support', openTelegram: 'Open Telegram Support' },
  admin: {
    title: 'Admin',
    loginTitle: 'Admin Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign in',
    signingIn: 'Signing in…',
    loginHint: 'v0.1 uses env ADMIN_EMAIL / ADMIN_PASSWORD_HASH for minimal login.',
    quickLinks: 'Quick Links',
    withdrawalList: 'Withdrawals Review',
    testData: 'Test Data',
    seedHint: 'Insert 2 WithdrawOrder records for quick testing.',
    seedButton: 'Seed 2 WithdrawOrders',
    seeding: 'Seeding…',
    seedOk: 'OK: created',
    withdrawalsTitle: 'Withdrawals',
    withdrawalsHint: 'After approving, you send on-chain manually and record the tx hash.',
    backToAdmin: 'Back to Admin',
    orderNo: 'OrderNo',
    coin: 'Coin',
    amount: 'Amount',
    to: 'To',
    status: 'Status',
    view: 'View',
    open: 'Open',
    loading: 'Loading…',
    noRecords: 'No records.',
    withdrawalsNote: 'Note: Currently connected to DB (WithdrawOrder).',
  },
}

export function getMessages(locale: Locale) {
  return locale === 'en' ? en : zh
}
