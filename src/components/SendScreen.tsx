import { useState } from 'react';
import { ArrowLeft, Scan } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface SendScreenProps {
  onBack: () => void;
}

export function SendScreen({ onBack }: SendScreenProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<'btc' | 'lightning'>('btc');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');

  const availableBalance = selectedCurrency === 'btc' 
    ? { btc: '0.22000000', brl: 'R$ 61.600,00' }
    : { sats: '150.000', brl: 'R$ 420,00' };

  const handleSend = () => {
    // Implement send logic
    console.log('Sending...', { selectedCurrency, address, amount, memo });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onBack}
          className="mr-4"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Enviar</h1>
      </div>

      <div className="px-6 py-8">
        {/* Currency Selection */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Selecionar Moeda</h2>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedCurrency('btc')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                selectedCurrency === 'btc' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">BTC</p>
                <p className="text-sm text-gray-600">Layer 1</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedCurrency('lightning')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                selectedCurrency === 'lightning' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">Lightning</p>
                <p className="text-sm text-gray-600">Instantâneo</p>
              </div>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Disponível: {selectedCurrency === 'btc' ? `₿ ${availableBalance.btc}` : `${availableBalance.sats} sats`}
            </p>
            <p className="text-xs text-gray-500">{availableBalance.brl}</p>
          </div>
        </div>

        {/* Address/Invoice Input */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedCurrency === 'btc' ? 'Endereço Bitcoin' : 'Invoice Lightning'}
          </h2>
          
          <div className="relative">
            <Textarea
              placeholder={selectedCurrency === 'btc' 
                ? 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' 
                : 'lnbc1500nips0jyppqw...'
              }
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pr-12 bg-gray-50 border-0 rounded-xl resize-none"
              rows={3}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8"
            >
              <Scan className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Amount Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Valor</h2>
          
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-center text-xl py-4 bg-gray-50 border-0 rounded-xl"
          />

          <div className="flex justify-between mt-4 text-sm">
            <button className="text-orange-500 font-semibold">25%</button>
            <button className="text-orange-500 font-semibold">50%</button>
            <button className="text-orange-500 font-semibold">75%</button>
            <button className="text-orange-500 font-semibold">Máx</button>
          </div>
        </div>

        {/* Memo Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Memo (Opcional)</h2>
          
          <Textarea
            placeholder="Adicione uma nota..."
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="bg-gray-50 border-0 rounded-xl resize-none"
            rows={2}
          />
        </div>

        {/* Send Button */}
        <Button
          onClick={handleSend}
          disabled={!address || !amount}
          className="w-full py-4 bg-orange-400 hover:bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl"
        >
          Enviar {selectedCurrency === 'btc' ? 'Bitcoin' : 'Lightning'}
        </Button>

        {/* Fee Info */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Taxa estimada: {selectedCurrency === 'btc' ? '~2.500 sats' : '~1 sat'}
          </p>
        </div>
      </div>
    </div>
  );
}