import { AlertTriangle, BarChart2, Package, TrendingUp, Users, Zap } from "lucide-react";
import { CreditCard, CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { ShoppingCart, UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";

export const overviewPageTopCart = [
    {
        name: 'Total Sales',
        icon: Zap,
        value: '$12,345',
        color: '#6366F1',
    },
    {
        name: 'New Users',
        icon: Users,
        value: '1,234',
        color: '#8B5CF6',
    },
    {
        name: 'Total Products',
        icon: ShoppingBag,
        value: '567',
        color: '#EC4899',
    },
    {
        name: 'Conversion Rate',
        icon: BarChart2,
        value: '12.5%',
        color: '#10B981',
    },
];

export const productsPageTopCart = [
    {
        name: 'Total Products',
        icon: Package,
        value: 1234,
        color: '#6366F1',
    },
    {
        name: 'Top Selling',
        icon: TrendingUp,
        value: 89,
        color: '#10B981',
    },
    {
        name: 'Low Stock',
        icon: AlertTriangle,
        value: 23,
        color: '#F59E0B',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: "$543,210",
        color: '#EF4444',
    },
];

export const usersPageTopCart = [
    {
        name: 'Total Users',
        icon: UsersIcon,
        value: 152845,
        color: '#6366F1',
    },
    {
        name: 'New Users Today',
        icon: UserPlus,
        value: 243,
        color: '#10B981',
    },
    {
        name: 'Active Users',
        icon: UserCheck,
        value: 98520,
        color: '#F59E0B',
    },
    {
        name: 'Churn Rate',
        icon: UserX,
        value: '2.4%',
        color: '#EF4444',
    },
];

export const orderPageTopCart = [
    {
        name: 'Total Orders',
        icon: ShoppingBag,
        value: 1234,
        color: '#6366F1',
    },
    {
        name: 'Pending Orders',
        icon: Clock,
        value: 56,
        color: '#F59E0B',
    },
    {
        name: 'Completed Orders',
        icon: CheckCircle,
        value: 1178,
        color: '#10B981',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: "$98,765",
        color: '#EF4444',
    },
];

export const salesPageTopCart = [
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: "$1,234,567",
        color: '#6366F1',
    },
    {
        name: 'Avg. Order Value',
        icon: ShoppingCart,
        value: "$78.90",
        color: '#F59E0B',
    },
    {
        name: 'Conversion Rate',
        icon: TrendingUp,
        value: "3.45%",
        color: '#10B981',
    },
    {
        name: 'Sales Growth',
        icon: CreditCard,
        value: "12.3%",
        color: '#EF4444',
    },
]

// export const analyticsPageTopCart = []