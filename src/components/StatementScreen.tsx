import { useState } from 'react';
import { ArrowLeft, Filter, ArrowDownLeft, ArrowUpRight, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface StatementScreenProps {
  onBack: () => void;
  initialFilter?: 'all' | 'btc' | 'lightning';
}

interface Transaction {
  id: string;
  type: 'received' | 'sent' | 'swap' | 'deposit';
  title: string;
  date: string;
  time: string;
  network: 'LN' | 'BTC' | 'BRL';
  amount: string;
  isPositive: boolean;
  status: 'completed' | 'pending';
  icon: 'arrow-down-left' | 'arrow-up-right' | 'refresh-cw' | 'trending-up';
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'received',
    title: 'Pagamento recebido via Lightning',
    date: '15/01/2024',
    time: '07:30',
    network: 'LN',
    amount: '+50.000 sats',
    isPositive: true,
    status: 'completed',
    icon: 'arrow-down-left'
  },
  {
    id: '2',
    type: 'sent',
    title: 'Transferência para carteira externa',
    date: '14/01/2024',
    time: '12:45',
    network: 'BTC',
    amount: '-₿ 0.01000000',
    isPositive: false,
    status: 'completed',
    icon: 'arrow-up-right'
  },
  {
    id: '3',
    type: 'swap',
    title: 'Conversão BRL → BTC',
    date: '13/01/2024',
    time: '06:15',
    network: 'BRL',
    amount: '+R$ 1.000,00',
    isPositive: true,
    status: 'completed',
    icon: 'refresh-cw'
  },
  {
    id: '4',
    type: 'deposit',
    title: 'Depósito via PIX',
    date: '12/01/2024',
    time: '11:20',
    network: 'BRL',
    amount: '+R$ 2.500,00',
    isPositive: true,
    status: 'completed',
    icon: 'trending-up'
  },
  {
    id: '5',
    type: 'sent',
    title: 'Pagamento Lightning pendente',
    date: '11/01/2024',
    time: '08:10',
    network: 'LN',
    amount: '-25.000 sats',
    isPositive: false,
    status: 'pending',
    icon: 'arrow-up-right'
  }
];

export function StatementScreen({ onBack, initialFilter = 'all' }: StatementScreenProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'btc' | 'lightning'>(initialFilter);

  const filteredTransactions = mockTransactions.filter(transaction => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'btc') return transaction.network === 'BTC' || transaction.network === 'BRL';
    if (activeFilter === 'lightning') return transaction.network === 'LN';
    return true;
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'arrow-down-left':
        return <ArrowDownLeft className="w-5 h-5" />;
      case 'arrow-up-right':
        return <ArrowUpRight className="w-5 h-5" />;
      case 'refresh-cw':
        return <RefreshCw className="w-5 h-5" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <ArrowDownLeft className="w-5 h-5" />;
    }
  };

  const getIconColor = (type: string, isPositive: boolean) => {
    if (type === 'received' || isPositive) return 'text-green-600';
    if (type === 'sent') return 'text-red-600';
    return 'text-orange-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Extrato</h1>
        </div>
        
        <Button variant="ghost" size="icon">
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <div className="px-6 py-6">
        {/* Filter Tabs */}
        <div className="flex space-x-2 mb-6">
          <Button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'all' 
                ? 'bg-orange-400 text-white' 
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Todas
          </Button>
          
          <Button
            onClick={() => setActiveFilter('btc')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'btc' 
                ? 'bg-orange-400 text-white' 
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            BTC
          </Button>
          
          <Button
            onClick={() => setActiveFilter('lightning')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'lightning' 
                ? 'bg-orange-400 text-white' 
                : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Lightning
          </Button>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                    transaction.isPositive ? 'bg-green-100' : 
                    transaction.type === 'sent' ? 'bg-red-100' : 'bg-orange-100'
                  }`}>
                    <div className={getIconColor(transaction.type, transaction.isPositive)}>
                      {getIcon(transaction.icon)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{transaction.title}</h3>
                    <p className="text-sm text-gray-600">
                      {transaction.date}, {transaction.time} • {transaction.network}
                    </p>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <p className={`font-semibold mb-1 ${
                    transaction.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </p>
                  
                  <Badge 
                    variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    className={`text-xs ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                    }`}
                  >
                    {transaction.status === 'completed' ? 'Concluído' : 'Pendente'}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhuma transação encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
}