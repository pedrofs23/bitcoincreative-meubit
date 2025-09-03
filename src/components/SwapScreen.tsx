import { useState } from 'react';
import { ArrowLeft, ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SwapScreenProps {
  onBack: () => void;
}

export function SwapScreen({ onBack }: SwapScreenProps) {
  const [fromCurrency, setFromCurrency] = useState<'btc' | 'ln'>('btc');
  const [toCurrency, setToCurrency] = useState<'btc' | 'ln'>('ln');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const exchangeRate = "1 BTC = 100000000.00000000 LN";
  const serviceFeePct = "0.5%";

  const availableBalances = {
    btc: '0.22000000',
    ln: '150000'
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount('');
    setToAmount('');
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    // Calculate conversion - simplified for demo
    if (value) {
      const converted = fromCurrency === 'btc' 
        ? (parseFloat(value) * 100000000).toString()
        : (parseFloat(value) / 100000000).toString();
      setToAmount(converted);
    } else {
      setToAmount('');
    }
  };

  const handleSwap = () => {
    console.log('Swapping...', { fromCurrency, toCurrency, fromAmount, toAmount });
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
        <h1 className="text-lg font-semibold">Trocar</h1>
      </div>

      <div className="px-6 py-8">
        {/* From Section */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">De</h2>
          
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setFromCurrency('btc')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                fromCurrency === 'btc' 
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
              onClick={() => setFromCurrency('ln')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                fromCurrency === 'ln' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">LN</p>
                <p className="text-sm text-gray-600">Instantâneo</p>
              </div>
            </button>
          </div>

          <Input
            type="number"
            placeholder="0.00"
            value={fromAmount}
            onChange={(e) => handleFromAmountChange(e.target.value)}
            className="text-center text-xl py-4 bg-gray-50 border-0 rounded-xl mb-2"
          />

          <p className="text-center text-sm text-gray-600">
            Disponível: {fromCurrency === 'btc' ? `₿ ${availableBalances.btc}` : `${availableBalances.ln} sats`}
          </p>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center mb-4">
          <Button
            onClick={handleSwapCurrencies}
            size="icon"
            className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full"
          >
            <ArrowUpDown className="w-5 h-5" />
          </Button>
        </div>

        {/* To Section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Para</h2>
          
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setToCurrency('btc')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                toCurrency === 'btc' 
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
              onClick={() => setToCurrency('ln')}
              className={`flex-1 p-4 rounded-xl border-2 transition-colors ${
                toCurrency === 'ln' 
                  ? 'border-orange-400 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-center">
                <p className="font-semibold text-gray-900">LN</p>
                <p className="text-sm text-gray-600">Instantâneo</p>
              </div>
            </button>
          </div>

          <Input
            type="number"
            placeholder="0.00"
            value={toAmount}
            readOnly
            className="text-center text-xl py-4 bg-gray-50 border-0 rounded-xl mb-2"
          />

          <p className="text-center text-sm text-gray-600">
            Taxa: {exchangeRate}
          </p>
        </div>

        {/* Fee Information */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Taxa de câmbio</span>
            <span className="font-semibold">{exchangeRate}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Taxa de serviço</span>
            <span className="font-semibold">{serviceFeePct}</span>
          </div>
        </div>

        {/* Swap Button */}
        <Button
          onClick={handleSwap}
          disabled={!fromAmount || fromCurrency === toCurrency}
          className="w-full py-4 bg-orange-400 hover:bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl"
        >
          Trocar {fromCurrency.toUpperCase()} por {toCurrency.toUpperCase()}
        </Button>
      </div>
    </div>
  );
}