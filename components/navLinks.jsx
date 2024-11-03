import { Home, ReceiptLong, PieChart, Savings, Schedule } from '@mui/icons-material';

export const navLinks = [
  { icon: <Home sx={{ fontSize: '1.2rem' }} />, label: 'Overview', href: '/dashboard' },
  { icon: <ReceiptLong sx={{ fontSize: '1.2rem' }} />, label: 'Expenses', href: '/dashboard/expenses' },
  { icon: <PieChart sx={{ fontSize: '1.2rem' }} />, label: 'Budgets' },
  { icon: <Savings sx={{ fontSize: '1.2rem' }} />, label: 'Pots' },
  // { icon: <Schedule sx={{ fontSize: '1.2rem' }} />, label: 'Recurring Bills' },
];