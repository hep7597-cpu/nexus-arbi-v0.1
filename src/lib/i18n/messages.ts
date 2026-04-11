export type Locale = 'zh' | 'en'

const zh = {
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
  me: { title: '我的', kyc: 'KYC 认证', kycHint: '提现前需要完成 KYC。' },
  support: { title: '客服', openTelegram: '前往 Telegram 客服' },
}

const en = {
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
  me: { title: 'Me', kyc: 'KYC Verification', kycHint: 'KYC is required before withdrawals.' },
  support: { title: 'Customer Support', openTelegram: 'Open Telegram Support' },
}

export function getMessages(locale: Locale) {
  return locale === 'en' ? en : zh
}
